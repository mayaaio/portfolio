import { Accordion, Button, Card, Group, Image, Text } from "@mantine/core";
import { FC } from "react";

interface ProjectProps {
  title: string;
  desc: string;
  link: string;
  github: string;
  img: string;
}

function Project({ title, desc, link, github, img }: ProjectProps) {
  return (
    <Accordion.Item value={title}>
      <Accordion.Control>{title}</Accordion.Control>
      <Accordion.Panel>
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Card.Section>
            <Image height={160} src={require(`../assets/${img}`)} />
          </Card.Section>
          <Text mt="sm">{desc}</Text>
          <Group mt="sm">
            <Button>
              <a href={link} target="_blank" rel="noreferrer">
                Link to project
              </a>
            </Button>
            <Button>
              <a href={github} target="_blank" rel="noreferrer">
                Github link
              </a>
            </Button>
          </Group>
        </Card>
      </Accordion.Panel>
    </Accordion.Item>
  );
}

export default Project;
