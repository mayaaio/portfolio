import { Title, Text, Stack, Button } from "@mantine/core";
import Pdf from "../assets/Resume.pdf";
import { Link } from "react-router-dom";
import PhotoCarousel from "../components/PhotoCarousel";
import CareerTimeline from "../components/CareerTimeline";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function About() {
  const [showTimeline, setShowTimeline] = useState(false);
  const [spacingHeight, setSpacingHeight] = useState("50vh");
  const [atBottom, setAtBottom] = useState(false); // Track if user is at the bottom

  // Function to check scroll position and update showTimeline
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const threshold = window.innerHeight * 0.2;
    const timelineVisible = scrollPosition > threshold;

    setShowTimeline(timelineVisible);

    // Detect if the user is at the bottom of the page
    const isAtBottom =
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight;

    setAtBottom(isAtBottom);

    // Adjust spacing when scrolling
    if (document.documentElement.scrollHeight <= window.innerHeight) {
      setSpacingHeight("50vh"); // Add extra space for small content
    } else if (scrollPosition < threshold && !timelineVisible) {
      setSpacingHeight("50vh"); // Ensure there's space to scroll back up
    } else {
      setSpacingHeight("0vh"); // Remove extra space when timeline is visible
    }
  };

  // Function to handle button click and trigger scroll down
  const handleScrollDown = () => {
    setShowTimeline(true);

    // Ensure enough space for scrolling if needed
    if (document.documentElement.scrollHeight <= window.innerHeight) {
      setSpacingHeight("50vh");
    }

    setTimeout(() => {
      document
        .getElementById("timeline-section")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  // Function to handle button click and trigger scroll up
  const handleScrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setAtBottom(false); // Reset the bottom state
  };

  useEffect(() => {
    // Ensure there's enough space when content is less than viewport
    if (document.documentElement.scrollHeight <= window.innerHeight) {
      setSpacingHeight("50vh");
    }

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll); // Re-check on window resize

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <Stack
      style={{
        width: "80vw", // Stack takes 80% of the viewport width
        margin: "0 auto", // Centers the Stack horizontally
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        id="intro-section"
      >
        <Stack>
          <Title order={1}>About me</Title>
          <Text fs="italic" size="xl" mt="sm">
            I'm a graduate of UPenn with a degree in Computer Science and Health
            and Societies. Two years ago, after being laid off, I embraced the
            opportunity to take a career break. I spent that time traveling solo
            and volunteering across the globe, gaining invaluable experiences
            that expanded my horizons. Now, after two enriching years, I'm eager
            to bring my skills and passion back to the workforce. Feel free to
            explore my resume and some photos from my journey below :)
          </Text>
          <PhotoCarousel />
          <Button
            variant="transparent"
            mt="lg"
            onClick={atBottom ? handleScrollUp : handleScrollDown}
          >
            {atBottom ? "Scroll Up ↑" : "Scroll Down ↓"}
          </Button>
        </Stack>
      </motion.div>

      <div
        style={{ height: spacingHeight, transition: "height 0.5s ease-in-out" }}
      />

      {showTimeline && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          id="timeline-section"
        >
          <Stack>
            <Text component={Link} target="_blank" to={Pdf} td="underline">
              My Resume
            </Text>
            <CareerTimeline />
          </Stack>
        </motion.div>
      )}
    </Stack>
  );
}

export default About;
