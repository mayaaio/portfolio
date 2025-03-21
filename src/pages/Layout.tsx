import { ActionIcon, AppShell, Container, Group, Paper } from "@mantine/core";
import { GitHub, Home } from "react-feather";
import { Link, Outlet } from "react-router-dom";
import LightDarkButton from "../components/LightDarkButton";

function Layout() {
  return (
    <Paper p="lg" radius={0} style={{ minHeight: "100vh" }}>
      <AppShell>
        <AppShell.Header>
          <Group px="md" py="md">
            <ActionIcon variant="transparent" component={Link} to="/">
              <Home />
            </ActionIcon>
            <ActionIcon
              variant="transparent"
              component={Link}
              target="_blank"
              to="https://github.com/mayaaio"
            >
              <GitHub />
            </ActionIcon>
            <LightDarkButton />
          </Group>
        </AppShell.Header>
        <Container fluid my={50}>
          <Outlet />
        </Container>
      </AppShell>
    </Paper>
  );
}

export default Layout;
