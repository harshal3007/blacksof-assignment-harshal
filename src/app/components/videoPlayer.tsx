import { useEffect, useRef, useState } from "react";

interface VideoPlayerProps {
  src: string;
  isActive: boolean;
  onVisible?: () => void;
}

export default function VideoPlayer({
  src,
  isActive,
  onVisible,
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const isIntersecting = entry.isIntersecting;
        setIsVisible(isIntersecting);
        if (isIntersecting && onVisible) onVisible();
      },
      { threshold: 0.6 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [onVisible]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateProgress = () => {
      if (video.duration) {
        setProgress((video.currentTime / video.duration) * 100);
      }
    };

    const handleEnded = () => {
      setIsPlaying(false);
    };

    video.addEventListener("timeupdate", updateProgress);
    video.addEventListener("ended", handleEnded);

    if (isActive && isVisible) {
      video.play().catch(() => {});
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }

    return () => {
      video.removeEventListener("timeupdate", updateProgress);
      video.removeEventListener("ended", handleEnded);
    };
  }, [isActive, isVisible, src]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const radius = 24;
  const stroke = 2;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div
      ref={containerRef}
      className="relative w-[90%] max-w-[100%] aspect-video mx-auto"
    >
      <video
        ref={videoRef}
        src={src}
        muted
        playsInline
        className="w-full h-full object-cover rounded-lg"
      />

      <button
        onClick={togglePlay}
        className="absolute bottom-6 right-6 w-12 h-12 flex items-center justify-center bg-black bg-opacity-50 hover:bg-opacity-70 backdrop-blur-md text-white rounded-full"
      >
        <svg height={radius * 2} width={radius * 2} className="absolute z-0">
          <circle
            stroke="rgba(255,255,255,0.3)"
            strokeWidth={stroke}
            fill="transparent"
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
          <circle
            stroke="#ffffff"
            strokeWidth={stroke}
            fill="transparent"
            r={normalizedRadius}
            cx={radius}
            cy={radius}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-200 ease-linear"
          />
        </svg>

        {isPlaying ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-20 w-20 z-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 9v6m4-6v6"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 z-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14.752 11.168l-5.197-3.027A1 1 0 008 9.027v5.946a1 1 0 001.555.832l5.197-3.027a1 1 0 000-1.664z"
            />
          </svg>
        )}
      </button>
    </div>
  );
}
