// src/components/YouTubePlayer.jsx
export default function YouTubePlayer({
  videoId = "dQw4w9WgXcQ",
  title = "YouTube video",
  start = 0,
  autoplay = false,
}) {
  const embed = `https://www.youtube-nocookie.com/embed/${videoId}?start=${start}&autoplay=${autoplay?1:0}&mute=${autoplay?1:0}&rel=0`;
  const watch = `https://www.youtube.com/watch?v=${videoId}`;

  return (
    <section className="max-w-4xl mx-auto p-4 space-y-3">
      {/* مشاهدة داخل الموقع */}
      <div className="relative w-full aspect-[16/9] overflow-hidden rounded-[12px]">
        <iframe
          className="absolute inset-0 w-full h-full"
          src={embed}
          title={title}
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; autoplay"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>

      {/* فتح على يوتيوب */}
      <a
        href={watch}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center px-4 py-2 border rounded-[12px] hover:opacity-90"
      >
        فتح على YouTube
      </a>
    </section>
  );
}
