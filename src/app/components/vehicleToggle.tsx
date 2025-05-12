"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface Props {
  type: "passenger" | "commercial";
  onChange: (type: "passenger" | "commercial") => void;
}

export default function VehicleToggle({ type, onChange }: Props) {
  const passengerRef = useRef<HTMLDivElement>(null);
  const commercialRef = useRef<HTMLDivElement>(null);
  const [indicatorStyle, setIndicatorStyle] = useState({ top: 0, height: 0 });

  useEffect(() => {
    const activeRef = type === "passenger" ? passengerRef : commercialRef;
    if (activeRef.current) {
      const rect = activeRef.current.getBoundingClientRect();
      const parentTop =
        activeRef.current.parentElement!.getBoundingClientRect().top;
      setIndicatorStyle({
        top: rect.top - parentTop,
        height: rect.height,
      });
    }
  }, [type]);

  return (
    <div className="relative flex flex-col gap-10 py-6 pl-9">
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="absolute left-0 w-[1.5px] bg-white rounded-full"
        style={{
          top: indicatorStyle.top,
          height: indicatorStyle.height,
        }}
      />
      <div ref={passengerRef}>
        <button
          onClick={() => onChange("passenger")}
          className="text-left group"
        >
          <h3
            className={`text-3xl font-medium transition ${
              type === "passenger" ? "text-white" : "text-gray-500"
            }`}
          >
            Passenger vehicles
          </h3>
          <p
            className={`text-xl transition ${
              type === "passenger" ? "text-white" : "text-gray-500"
            }`}
          >
            Revving up innovation from <br /> interior to exterior.
          </p>
        </button>
      </div>

      <div ref={commercialRef}>
        <button
          onClick={() => onChange("commercial")}
          className="text-left group"
        >
          <h3
            className={`text-3xl font-medium transition ${
              type === "commercial" ? "text-white" : "text-gray-500"
            }`}
          >
            Commercial vehicles
          </h3>
          <p
            className={`text-xl transition ${
              type === "commercial" ? "text-white" : "text-gray-500"
            }`}
          >
            Advancing engineering <br /> for heavy-duty vehicles.
          </p>
        </button>
      </div>
    </div>
  );
}
