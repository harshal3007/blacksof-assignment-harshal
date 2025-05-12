import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import VehicleToggle from "./vehicleToggle";
import VideoSelector from "./videoSelector";
import VideoPlayer from "./videoPlayer";

const passengerVideos = [
  "/assets/car1.mp4",
  "/assets/front.mp4",
  "/assets/exterior.mp4",
  "/assets/trunk.mp4",
  "/assets/cabin.mp4",
];

const commercialVideos = ["/assets/truck1.mp4", "/assets/front.mp4"];

export default function VehicleSection() {
  const [type, setType] = useState<"passenger" | "commercial">("passenger");
  const [activeIndexes, setActiveIndexes] = useState({
    passenger: 0,
    commercial: 0,
  });

  const scrollRef = useRef<HTMLDivElement>(null);
  const passengerRef = useRef<HTMLDivElement>(null);
  const commercialRef = useRef<HTMLDivElement>(null);

  const passengerScaleRaw = useMotionValue(0.5);
  const commercialScaleRaw = useMotionValue(0.5);

  const passengerScale = useSpring(passengerScaleRaw, {
    stiffness: 80,
    damping: 20,
  });
  const commercialScale = useSpring(commercialScaleRaw, {
    stiffness: 80,
    damping: 20,
  });

  const handleTypeChange = (newType: "passenger" | "commercial") => {
    setType(newType);
    const sectionRef = newType === "passenger" ? passengerRef : commercialRef;
    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleVisible = (
    vehicleType: "passenger" | "commercial",
    index: number
  ) => {
    setType(vehicleType);
    setActiveIndexes((prev) => ({ ...prev, [vehicleType]: index }));
  };

  useEffect(() => {
    if (!scrollRef.current || !passengerRef.current) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        const ratio = entry.intersectionRatio;
        const scale = 0.3 + ratio * 0.5;
        passengerScaleRaw.set(scale);
      },
      {
        root: scrollRef.current,
        threshold: Array.from({ length: 100 }, (_, i) => i / 100),
      }
    );

    obs.observe(passengerRef.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!scrollRef.current || !commercialRef.current) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        const ratio = entry.intersectionRatio;
        const scale = 0.3 + ratio * 0.5;
        commercialScaleRaw.set(scale);
      },
      {
        root: scrollRef.current,
        threshold: Array.from({ length: 100 }, (_, i) => i / 100),
      }
    );

    obs.observe(commercialRef.current);
    return () => obs.disconnect();
  }, []);

  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const height = useTransform(scrollYProgress, [0, 0.1], ["100vh", "20vh"]);
  const springHeight = useSpring(height, { stiffness: 200, damping: 30 });

  return (
    <section className="w-full bg-black text-white">
      <div className="relative h-screen flex items-center justify-center">
        <div className="sticky top-0 z-10">
          <motion.div
            className="sticky top-0 flex items-end justify-center z-10"
            style={{ height: springHeight }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight max-w-4xl text-center px-6 pb-12">
              Evolving the drive with{" "}
              <span className="font-bold">360-degree</span> comprehensive
              solutions
            </h1>
          </motion.div>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="h-screen overflow-y-auto rtl scrollbar-thin scrollbar-thumb-white scrollbar-track-gray-800"
      >
        <div className="flex min-h-full ltr">
          <div className="w-[30%] bg-black px-6 sticky top-0 h-screen flex items-start justify-center z-10 pt-40">
            <VehicleToggle type={type} onChange={handleTypeChange} />
          </div>

          <div className="flex-1 space-y-48 py-20">
            <motion.div
              ref={passengerRef}
              style={{ scale: passengerScale }}
              className="space-y-6 min-h-[100vh]"
            >
              <VideoPlayer
                src={passengerVideos[activeIndexes.passenger]}
                isActive={type === "passenger"}
                onVisible={() =>
                  handleVisible("passenger", activeIndexes.passenger)
                }
              />
              {type === "passenger" && (
                <VideoSelector
                  total={passengerVideos.length}
                  activeIndex={activeIndexes.passenger}
                  onSelect={(i) =>
                    setActiveIndexes((p) => ({ ...p, passenger: i }))
                  }
                  vehicleType="passenger"
                />
              )}
            </motion.div>

            <motion.div
              ref={commercialRef}
              style={{ scale: commercialScale }}
              className="space-y-6 min-h-[100vh]"
            >
              <VideoPlayer
                src={commercialVideos[activeIndexes.commercial]}
                isActive={type === "commercial"}
                onVisible={() =>
                  handleVisible("commercial", activeIndexes.commercial)
                }
              />
              {type === "commercial" && (
                <VideoSelector
                  total={commercialVideos.length}
                  activeIndex={activeIndexes.commercial}
                  onSelect={(i) =>
                    setActiveIndexes((p) => ({ ...p, commercial: i }))
                  }
                  vehicleType="commercial"
                />
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
