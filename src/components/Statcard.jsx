import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, animate } from "framer-motion";

const StatCard = ({ icon, number, title }) => {
  const containerRef = useRef(null);
  const inView = useInView(containerRef, { once: true, margin: "-20% 0px" });

  // Parse numeric part and suffix from the provided number prop
  const str = String(number);
  const match = str.match(/^([0-9]+)(.*)$/i);
  const targetValue = match ? parseInt(match[1], 10) : null;
  const suffix = match ? match[2] : "";

  const motionVal = useMotionValue(0);
  const [display, setDisplay] = useState(match ? "0" + suffix : str);

  useEffect(() => {
    if (!inView || targetValue === null) return;
    const controls = animate(motionVal, targetValue, {
      duration: 2.0,
      ease: "easeOut",
    });
    const unsubscribe = motionVal.on("change", (latest) => {
      setDisplay(`${Math.round(latest)}${suffix}`);
    });
    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [inView, targetValue, suffix, motionVal]);

  return (
    <div
      ref={containerRef}
      className="flex flex-col items-center justify-center bg-white/20 backdrop-blur-md rounded-2xl p-4 sm:p-5 md:p-6 w-32 sm:w-36 md:w-48 shadow-lg"
    >
      <div className="text-3xl sm:text-4xl mb-1 sm:mb-2">{icon}</div>
      <div className="text-2xl sm:text-3xl font-bold mb-1">{display}</div>
      <div className="text-base sm:text-lg font-medium">{title}</div>
    </div>
  );
};

export default StatCard;