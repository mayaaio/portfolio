import { Accordion, Button, Card, Group, Image, Text } from "@mantine/core";

function Project({ title, desc, link, github, img }) {
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
              <a href={link} target="_blank">
                Link to project
              </a>
            </Button>
            <Button>
              <a href={github} target="_blank">
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
