import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

interface AnimatedArrowProps {
  activeIndex: number; // The index of the selected timeline item
}

function AnimatedArrow({ activeIndex }: AnimatedArrowProps) {
  const [arrowPosition, setArrowPosition] = useState(100);

  console.log("Rendering AnimatedArrow with index:", activeIndex);

  // Effect to update arrow position when activeIndex changes
  useEffect(() => {
    setArrowPosition(100 + activeIndex * 50); // Adjust position dynamically
  }, [activeIndex]);

  return (
    <div
      style={{
        position: "fixed",
        top: "50px",
        left: "50px",
        zIndex: 9999,
        background: "rgba(0, 255, 0, 0.5)", // TEMP: Green debug box
        width: "100px",
        height: "100px",
      }}
    >
      Arrow is here!
    </div>
    // <svg
    //   xmlns="http://www.w3.org/2000/svg"
    //   width="60"
    //   height="60"
    //   viewBox="0 0 24 24"
    //   strokeWidth="2"
    //   stroke="black"
    //   fill="none"
    //   strokeLinecap="round"
    //   strokeLinejoin="round"
    //   style={{
    //     position: "absolute", // Fix positioning
    //     left: "30px", // Adjust based on your layout
    //     top: `${arrowPosition}px`, // Move dynamically
    //     overflow: "visible",
    //   }}
    // >
    //   {/* Left Arrow - Animated Long Path */}
    //   <motion.path
    //     d="M 20 4 v 7 a 4 4 0 0 1 -4 4 H 4"
    //     key={activeIndex} // Forces re-render to trigger redraw
    //     initial={{ strokeDasharray: "100", strokeDashoffset: "100" }}
    //     animate={{ strokeDashoffset: "0" }}
    //     transition={{ duration: 0.5, ease: "easeInOut" }}
    //     stroke="black"
    //     strokeWidth="2"
    //   />
    //   {/* Left Arrow - Static Arrowhead */}
    //   <path d="M 9 15 L 4 20 L 9 20" />
    // </svg>
  );
}

export default AnimatedArrow;
