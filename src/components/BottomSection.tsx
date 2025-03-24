import { Group, Stack, Text } from "@mantine/core";
import { motion } from "framer-motion";
import CareerTimeline from "./CareerTimeline";
import { Link } from "react-router-dom";
import Pdf from "../assets/Resume.pdf";
import { useState } from "react";
import CareerItemCard from "./CareerItemCard";
import { IconCornerDownLeft } from "@tabler/icons-react";
import AnimatedArrow from "./AnimatedArrow";

const BottomSection = () => {
  const [selectedCareerIndex, setSelectedCareerIndex] = useState(6);

  const handleCareerSelect = (index: number) => {
    setSelectedCareerIndex(index);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      id="timeline-section"
    >
      <div style={{ position: "relative" }}>
        <Group justify="space-between">
          <Stack>
            <Text component={Link} target="_blank" to={Pdf} td="underline">
              My Resume
            </Text>
            <CareerTimeline
              onCareerSelect={handleCareerSelect}
              selectedCareerIndex={selectedCareerIndex}
            />
          </Stack>
          <AnimatedArrow activeIndex={selectedCareerIndex} />

          <CareerItemCard selectedCareerIndex={selectedCareerIndex} />
        </Group>
      </div>
    </motion.div>
  );
};

export default BottomSection;
