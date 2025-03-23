import React from "react";
import { useSpring, animated } from "react-spring";

const AnimatedArrow = ({ from, to }) => {
  // Calculate the center of the "from" (timeline) and "to" (career card) positions
  const fromCenter = {
    x: from.left + from.width / 2,
    y: from.top + from.height / 2,
  };

  const toCenter = {
    x: to.left + to.width / 2,
    y: to.top + to.height / 2,
  };

  // Calculate the angle for rotation
  const angle =
    Math.atan2(toCenter.y - fromCenter.y, toCenter.x - fromCenter.x) *
    (180 / Math.PI);

  // Animation properties
  const arrowProps = useSpring({
    from: {
      left: fromCenter.x,
      top: fromCenter.y,
      transform: `rotate(${angle}deg)`,
    },
    to: { left: toCenter.x, top: toCenter.y, transform: `rotate(${angle}deg)` },
    config: { tension: 120, friction: 20 },
  });

  return (
    <animated.div
      style={{
        ...arrowProps,
        position: "absolute",
        width: 30,
        height: 30,
        borderLeft: "3px solid black",
        borderBottom: "3px solid black",
        transformOrigin: "0 100%",
      }}
    />
  );
};

export default AnimatedArrow;
