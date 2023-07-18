import { ActionIcon, AppShell, Container, Group, Paper } from '@mantine/core';
import { GitHub, Home } from 'react-feather';
import { Link, Outlet } from "react-router-dom";
import LightDarkButton from '../components/LightDarkButton';

function Layout() {
    return(
        <Paper padding='md' radius={0} style={{minHeight: '100vh'}}>
        <AppShell 
        header={
            <Group mx='md'>
                <ActionIcon component={Link} to="/">
                    <Home />
                </ActionIcon>
                <ActionIcon component={Link} target='_blank' to="https://github.com/mayaaio">
                   <GitHub />
                </ActionIcon>
                <LightDarkButton />
            </Group>
        }
        >
            <Container size={420} my={40}>
                <Outlet />
            </Container>
        </AppShell>
        </Paper>
    )
}

export default Layout