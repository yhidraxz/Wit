import { useRef, useState, useEffect } from "react";
import { FaPlay, FaVolumeMute, FaArrowUp } from "react-icons/fa";
import { PrimaryButton } from "./primaryButton";

const videos = [
  { id: 1, src: "/testemunho2.mp4", title: "Saúde" },
  { id: 2, src: "/testemunho1.mp4", title: "Segurança" },
  { id: 3, src: "/testemunho3.mp4", title: "Acolhimento" },
];

// 🔹 Individual Video Player
function VideoPlayer({ src, index, title, onInView }) {
  const videoRef = useRef(null);

  const [userInteracted, setUserInteracted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [inView, setInView] = useState(false);
  const [isEnded, setEnded] = useState(false);

  // overlays
  const [showMutedHint, setShowMutedHint] = useState(false);
  const [showEndOverlay, setShowEndOverlay] = useState(false);
  const [showArrow, setShowArrow] = useState(false);

  // --- Intersection Observer → autoplay ---
  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);

        if (entry.isIntersecting) {
          onInView(index);

          // First video before interaction → autoplay muted
          if (index === 0 && !userInteracted) {
            videoEl.muted = true;
            videoEl.play().catch(() => {});
          } else {
            // All other cases → autoplay unmuted
            videoEl.muted = false;
            videoEl.play().catch(() => {});
          }
        } else {
          videoEl.pause();
        }
      },
      { threshold: 0.6 }
    );

    obs.observe(videoEl);
    return () => obs.unobserve(videoEl);
  }, [index, userInteracted, onInView]);

  // --- Sync isPlaying + handle end ---
  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return;

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onEnded = () => {
      setEnded(true);
      setIsPlaying(false);
      setShowEndOverlay(true);
      setTimeout(() => setShowArrow(true), 3000);
    };

    videoEl.addEventListener("play", onPlay);
    videoEl.addEventListener("pause", onPause);
    videoEl.addEventListener("ended", onEnded);

    setIsPlaying(!videoEl.paused);

    return () => {
      videoEl.removeEventListener("play", onPlay);
      videoEl.removeEventListener("pause", onPause);
      videoEl.removeEventListener("ended", onEnded);
    };
  }, []);

  // --- Muted hint overlay (only first video) ---
  useEffect(() => {
    if (index > 0) return; // skip for other videos
    if (!isPlaying || userInteracted) return;

    const videoEl = videoRef.current;
    if (!videoEl) return;

    const timer = setTimeout(() => {
      if (videoEl.muted) {
        setShowMutedHint(true);
        setTimeout(() => setShowMutedHint(false), 4000);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [index, isPlaying, userInteracted]);

  // --- Handle click play/pause ---
  const handleClick = () => {
    const videoEl = videoRef.current;
    if (!videoEl) return;

    if (index === 0 && !userInteracted) {
      setUserInteracted(true);
      setShowMutedHint(false);
      videoEl.muted = false;
      videoEl.currentTime = 0;
      videoEl.play().catch(() => {});
      return;
    }

    if (videoEl.paused) {
      videoEl.play().catch(() => {});
    } else {
      videoEl.pause();
    }
  };

  const showOverlay = !isPlaying && !isEnded;

  return (
    <div className="relative w-[70vw] h-[80vh] flex-shrink-0 snap-center">
      <video
        ref={videoRef}
        src={src}
        className="w-full h-full object-cover rounded-2xl shadow-xl"
        playsInline
        loop
        onClick={handleClick}
      />

      {/* Pause/Play Overlay */}
      <div
        onClick={handleClick}
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500
          ${
            showOverlay
              ? "bg-black/80 opacity-100 pointer-events-auto"
              : "bg-black/0 opacity-0 pointer-events-none"
          }`}
      >
        <FaPlay
          className={`text-white transition-all duration-500
            ${showOverlay ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
          style={{ fontSize: 56 }}
        />
      </div>

      {/* Muted Hint Overlay (only first video) */}
      {index === 0 && (
        <div
          className={`absolute inset-0 flex items-center justify-center bg-black/40 transition-opacity duration-700
            ${showMutedHint ? "opacity-100" : "opacity-0 pointer-events-none"}`}
          onClick={handleClick}
        >
          <FaVolumeMute className="text-white text-6xl animate-scalePulse" />
        </div>
      )}

      {/* End Screen Overlay */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-end text-center transition-opacity duration-700
          ${showEndOverlay ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.9) 30%, rgba(0,0,0,0) 100%)",
        }}
      >
        <button className="bg-white text-black px-6 py-3 rounded-lg font-bold shadow-lg mb-20">
          Continuar
        </button>
        {showArrow && (
          <FaArrowUp className="absolute mb-4 text-white text-3xl animate-bounce" />
        )}
      </div>

      {/* Title Overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent rounded-b-2xl">
        <h3 className="text-white text-lg font-semibold">{title}</h3>
      </div>
    </div>
  );
}

// 🔹 Carousel Wrapper
export function VideoCarouselSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="min-h-screen bg-black flex flex-col pb-10">
      {/* Header */}
      <div className="p-4 py-10 text-center">
        <h1 className="text-2xl font-bold text-white mb-2">
          O que estão falando..
        </h1>
        <p className="text-gray-400 text-sm">Deslize para explorar</p>
      </div>

      {/* Carousel */}
      <div className="flex-1 flex items-center">
        <div className="flex overflow-x-auto scrollbar-hide gap-[5vw] px-[15vw] snap-x snap-mandatory">
          {videos.map((video, index) => (
            <VideoPlayer
              key={video.id}
              src={video.src}
              title={video.title}
              index={index}
              onInView={setActiveIndex}
            />
          ))}
        </div>
      </div>

      {/* Bottom Navigation Dots */}
      <div className="p-6 flex justify-center space-x-2">
        {videos.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === activeIndex ? "bg-white w-6" : "bg-gray-600"
            }`}
          />
        ))}
      </div>
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      <div className="text-center">
        <PrimaryButton
          text="Quero fazer parte do Wit"
          className="bg-primary items-center rounded-xl ml:btn-lg w-3/4 mt-8 transform animate-bounce
        "
        />
      </div>
    </div>
  );
}
