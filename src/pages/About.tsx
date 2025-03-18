import { Title, Text, Stack } from "@mantine/core";
import Pdf from "../assets/Resume.pdf";
import { Link } from "react-router-dom";
import PhotoCarousel from "../components/PhotoCarousel";

function About() {
  return (
    <Stack
      style={{
        width: "80vw", // Stack takes 80% of the viewport width
        margin: "0 auto", // Centers the Stack horizontally
      }}
    >
      <Title order={1}>About me</Title>
      <Text fs="italic">
        Hi, I'm Maya! I'm a graduate of UPenn with a degree in Computer Science
        and Health and Societies. Two years ago, after being laid off, I
        embraced the opportunity to take a career break. I spent that time
        traveling solo and volunteering across the globe, gaining invaluable
        experiences that expanded my horizons. Now, after two enriching years,
        I'm eager to bring my skills and passion back to the workforce. Feel
        free to explore my resume and some photos from my journey below :)
      </Text>
      <Text component={Link} target="_blank" to={Pdf}>
        Resume
      </Text>
      <PhotoCarousel />
    </Stack>
  );
}

export default About;
