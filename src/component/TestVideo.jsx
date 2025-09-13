import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const videos = [
  "/src/assets/naoAcademia.mp4",
  // add more videos here
];

export function TestVideo() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: { perView: 1, spacing: 16 },
    mode: "free-snap",
  });

  return (
    <section className="w-full py-20 bg-base-100 px-6 md:px-20">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-center bg-silver-gradient bg-clip-text text-transparent">
        See the Studio in Action 🎥
      </h2>

      <div
        ref={sliderRef}
        className="keen-slider flex gap-6 overflow-x-auto scrollbar-none"
      >
        {videos.map((src, idx) => (
          <div
            key={idx}
            className="keen-slider__slide flex-shrink-0 w-64 md:w-80 lg:w-96 rounded-xl overflow-hidden shadow-lg"
          >
            <video
              src={src}
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
        ))}
      </div>
    </section>
  );
}
