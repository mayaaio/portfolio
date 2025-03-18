import { Group, Stack, Title, Text, Tabs } from "@mantine/core";
import { Link } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";

const Home = () => {
  return (
    <Stack>
      <Title pb="sm">Hi, I'm Maya Itkin-Ofer</Title>
      <Tabs defaultValue="about" orientation="vertical">
        <Tabs.List>
          <Tabs.Tab value="work">Projects</Tabs.Tab>
          <Tabs.Tab value="about">About</Tabs.Tab>
          <Tabs.Tab value="contact">Contact</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="work" px="lg">
          <Projects />
        </Tabs.Panel>
        <Tabs.Panel value="about" px="lg">
          <About />
        </Tabs.Panel>
        <Tabs.Panel value="contact" px="lg">
          <Contact />
        </Tabs.Panel>
      </Tabs>
    </Stack>
  );
};

export default Home;
