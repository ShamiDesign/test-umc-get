// MapCard.jsx
import React from "react";

function buildOSM_FR({ lat, lng, zoom = 5, w = 640, h = 360 }) {
  const base = "https://staticmap.openstreetmap.fr/staticmap.php";
  const q = new URLSearchParams({
    center: `${lat},${lng}`,
    zoom: String(zoom),
    size: `${w}x${h}`,
    markers: `${lat},${lng},red-pushpin`,
  });
  return `${base}?${q.toString()}`;
}

function buildOSM_DE({ lat, lng, zoom = 5, w = 640, h = 360 }) {
  const base = "https://staticmap.openstreetmap.de/staticmap.php";
  const q = new URLSearchParams({
    center: `${lat},${lng}`,
    zoom: String(zoom),
    size: `${w}x${h}`,
    markers: `${lat},${lng},red-pushpin`,
  });
  return `${base}?${q.toString()}`;
}

function gmapsView({ lat, lng, zoom = 5 }) {
  return `https://www.google.com/maps/@${lat},${lng},${zoom}z`;
}

export default function MapCard({
  lat = 23.87060046297995,
  lng = 34.402958119295796,
  zoom = 5,
  title = "Saudi Arabia",
  address = "Saudi Arabia",
  width = 900,
  height = 500,
  rating = 4.5,
  reviews = 4,
}) {
  const primary = buildOSM_FR({ lat, lng, zoom, w: width, h: height });
  const backup = buildOSM_DE({ lat, lng, zoom, w: width, h: height });

  const [src, setSrc] = React.useState(primary);
  const [loaded, setLoaded] = React.useState(false);
  const [failed, setFailed] = React.useState(false);

  const viewUrl = gmapsView({ lat, lng, zoom });
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;

  return (
    <div className="relative w-full max-w-5xl rounded-xl border overflow-hidden">
      {/* صورة الخريطة */}
      <a
        href={viewUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`فتح الموقع على خرائط Google: ${title}`}
        className="block"
      >
        {/* Skeleton أثناء التحميل */}
        {!loaded && !failed && (
          <div className="w-full h-[320px] md:h-[360px] animate-pulse bg-gray-200" />
        )}

        {!failed ? (
          <img
            src={src}
            alt={`خريطة: ${title}`}
            className={`w-full h-auto block ${loaded ? "" : "hidden"}`}
            loading="lazy"
            decoding="async"
            onLoad={() => setLoaded(true)}
            onError={() => {
              if (src !== backup) {
                setSrc(backup);
              } else {
                setFailed(true);
              }
            }}
          />
        ) : (
          <div className="w-full h-[320px] md:h-[360px] grid place-items-center text-sm text-gray-600">
            تعذّر عرض الخريطة. افتح الموقع مباشرةً على خرائط Google.
          </div>
        )}
      </a>

      {/* بطاقة المعلومات */}
      <div className="absolute top-4 left-4 bg-white/95 backdrop-blur rounded-md shadow-md w-[320px]">
        <div className="p-4">
          <div className="text-lg font-semibold">{title}</div>
          <div className="text-sm text-gray-600 mt-1">{address}</div>

          <div className="flex items-center gap-2 mt-2">
            <div className="text-base font-medium">{rating}</div>
            <div aria-hidden>★★★★★</div>
            <a
              href={viewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:underline"
            >
              {reviews} reviews
            </a>
          </div>

          <div className="flex items-center gap-4 mt-3">
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:underline"
            >
              Directions
            </a>
            <a
              href={viewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:underline"
            >
              View larger map
            </a>
          </div>
        </div>
      </div>

      {/* وسم حقوق OSM */}
      <div className="absolute bottom-2 left-2 text-[11px] bg-white/85 rounded px-1">
        © OpenStreetMap contributors
      </div>
    </div>
  );
}
