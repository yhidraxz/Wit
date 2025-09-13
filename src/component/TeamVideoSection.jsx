import { useRef, useState, useEffect } from "react";
import { FaPlay, FaVolumeMute, FaArrowUp } from "react-icons/fa";

export function TeamVideoSection() {
  const videoRef = useRef(null);

  const [userInteracted, setUserInteracted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [inView, setInView] = useState(false);
  const [isEnded, setEnded] = useState(false);

  // overlays
  const [showMutedHint, setShowMutedHint] = useState(false);
  const [showEndOverlay, setShowEndOverlay] = useState(false);
  const [showArrow, setShowArrow] = useState(false);

  // Intersection observer → autoplay muted
  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);

        if (entry.isIntersecting) {
          // Reset end states when video comes into view
          setEnded(false);
          setShowEndOverlay(false);
          setShowArrow(false);

          if (!userInteracted) {
            videoEl.muted = true;
            const p = videoEl.play();
            if (p && typeof p.then === "function") {
              p.catch(() => {});
            }
          }
        }
      },
      { threshold: 0.4 }
    );

    obs.observe(videoEl);
    return () => obs.unobserve(videoEl);
  }, [userInteracted]);

  // sync isPlaying + handle end
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

  // muted hint overlay logic
  useEffect(() => {
    if (!isPlaying || userInteracted) return;

    const videoEl = videoRef.current;
    if (!videoEl) return;
    videoEl.scrollIntoView({ behavior: "smooth", block: "start" });

    const timer = setTimeout(() => {
      if (videoEl.muted) {
        setShowMutedHint(true);
        setTimeout(() => setShowMutedHint(false), 4000);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [isPlaying, userInteracted]);

  const handleClick = () => {
    const videoEl = videoRef.current;
    if (!videoEl) return;

    if (!userInteracted) {
      setUserInteracted(true);
      setShowMutedHint(false);
      videoEl.muted = false;
      videoEl.currentTime = 0;
      videoEl.play().catch(() => {});
      videoEl.scrollIntoView({ behavior: "smooth", block: "start" });
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
    <section className="w-full h-screen relative bg-gradient-to-br from-black to-base-100 overflow-hidden">
      <video
        ref={videoRef}
        src="/src/assets/TimeWit.mp4"
        className={`absolute top-0 left-0 w-full h-full object-cover transition-all duration-700 ease-out
          ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        playsInline
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

      {/* Muted Hint Overlay */}
      <div
        className={`absolute inset-0 flex items-center justify-center bg-black/40 transition-opacity duration-700
          ${showMutedHint ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={handleClick}
      >
        <FaVolumeMute className="text-white text-6xl animate-scalePulse" />
      </div>

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
    </section>
  );
}
