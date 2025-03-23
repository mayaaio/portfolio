import { Stack, Title, Text, Button } from "@mantine/core";
import { motion } from "framer-motion";
import PhotoCarousel from "./PhotoCarousel";

function TopSection({ atBottom, handleScrollDown, handleScrollUp }) {
  return (
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
          and volunteering across the globe, gaining invaluable experiences that
          expanded my horizons. Now, after two enriching years, I'm eager to
          bring my skills and passion back to the workforce. Feel free to
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
  );
}

export default TopSection;
