import { Group, Stack, Title, Text } from "@mantine/core";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <Stack align="center">
            <Title pb='sm'>Hi, I'm Maya Itkin-Ofer</Title>
            <Group position="center">
                <Text component={Link} to="work">
                    Projects
                </Text>
                <Text component={Link} to="about">
                    About me
                </Text>
                <Text component={Link} to="contact">
                    Contact
                </Text>
            </Group>
        </ Stack>
    )
  }

export default Home;