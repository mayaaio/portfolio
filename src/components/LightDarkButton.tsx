import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { Moon, Sun } from "react-feather";

function LightDarkButton() {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const dark = colorScheme === 'dark';
    return (
        <ActionIcon
        variant="outline"
        color={dark ? 'yellow' : 'blue'}
        onClick={() => toggleColorScheme()}
        title="Toggle color scheme"
      >
        {dark ? <Sun size="1.1rem" /> : <Moon size="1.1rem" />}
      </ActionIcon>
    )
}

export default LightDarkButton