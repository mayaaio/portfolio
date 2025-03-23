import { Group, Stack, Text } from "@mantine/core";
import { motion } from "framer-motion";
import CareerTimeline from "./CareerTimeline";
import { Link } from "react-router-dom";
import Pdf from "../assets/Resume.pdf";
import { useState } from "react";
import CareerItemCard from "./CareerItemCard";
import { IconCornerDownLeft } from "@tabler/icons-react";

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
        <motion.div
          style={{
            position: "absolute",
            left: "30%",
            // top: `calc(${(selectedCareerIndex + 1) * 100}px)`,
            // left: `calc(${(selectedCareerIndex + 1) * 100}px)`, // Adjust based on timeline item width
            transform: "translateY(-50%)",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <IconCornerDownLeft />
        </motion.div>

        <CareerItemCard selectedCareerIndex={selectedCareerIndex} />
      </Group>
    </motion.div>
  );
};

export default BottomSection;
