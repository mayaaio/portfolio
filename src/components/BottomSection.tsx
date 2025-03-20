import { Group, Stack, Text } from "@mantine/core";
import { motion } from "framer-motion";
import CareerTimeline from "./CareerTimeline";
import { Link } from "react-router-dom";
import Pdf from "../assets/Resume.pdf";
import { useState } from "react";

const BottomSection = () => {
  const [selectedCareerIndex, setSelectedCareerIndex] = useState(6);

  const handleCareerSelect = (index: number) => {
    setSelectedCareerIndex(index);
    // Additional logic when a career item is selected (if needed)
    console.log("Selected career index:", index);
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
          <CareerTimeline onCareerSelect={handleCareerSelect} />
        </Stack>
        <Text size="xl" style={{ maxWidth: 300, wordWrap: "break-word" }}>
          I’m looking for a software engineering role where I can make a real
          impact by building products people will use and love. I’m excited by
          the idea of owning projects from start to finish, working hard, and
          seeing my efforts come to life. I’m eager to join a team where I can
          grow, take on meaningful responsibilities, gain hands-on experience,
          and constantly learn. I thrive in a collaborative environment with
          smart, passionate people who care about building great products with
          the user in mind.
        </Text>
      </Group>
    </motion.div>
  );
};

export default BottomSection;
