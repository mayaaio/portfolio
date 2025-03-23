import { Group, Stack, Text } from "@mantine/core";
import { motion } from "framer-motion";
import CareerTimeline from "./CareerTimeline";
import { Link } from "react-router-dom";
import Pdf from "../assets/Resume.pdf";
import { useEffect, useRef, useState } from "react";
import CareerItemCard from "./CareerItemCard";
import AnimatedArrow from "./AnimatedArrow";

const BottomSection = () => {
  const [selectedCareerIndex, setSelectedCareerIndex] = useState(6);
  const timelineRef = useRef(null);
  const cardRef = useRef(null);
  const [timelinePosition, setTimelinePosition] = useState(null);
  const [cardPosition, setCardPosition] = useState(null);

  const handleCareerSelect = (index: number) => {
    setSelectedCareerIndex(index);
  };

  useEffect(() => {
    if (timelineRef.current && cardRef.current) {
      const timelinePos = timelineRef.current.getBoundingClientRect();
      const cardPos = cardRef.current.getBoundingClientRect();
      console.log("Timeline position:", timelinePos);
      console.log("Card position:", cardPos);
      setTimelinePosition(timelinePos);
      setCardPosition(cardPos);
      //   setTimelinePosition(timelineRef.current.getBoundingClientRect());
      //   setCardPosition(cardRef.current.getBoundingClientRect());
    }
  }, [timelineRef, cardRef, selectedCareerIndex]);

  console.log(timelinePosition);
  console.log(cardPosition);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      id="timeline-section"
    >
      <Group justify="space-between">
        <Stack>
          <Text component={Link} target="_blank" to={Pdf} td="underline">
            My Resume
          </Text>
          <div ref={timelineRef}>
            <CareerTimeline
              onCareerSelect={handleCareerSelect}
              selectedCareerIndex={selectedCareerIndex}
            />
          </div>
        </Stack>
        {timelinePosition && cardPosition && (
          <AnimatedArrow from={timelinePosition} to={cardPosition} />
        )}
        <div ref={cardRef}>
          <CareerItemCard selectedCareerIndex={selectedCareerIndex} />
        </div>
      </Group>
    </motion.div>
  );
};

export default BottomSection;
