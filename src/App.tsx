import './css/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from './pages/Projects';
import { ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core';
import { useHotkeys, useLocalStorage } from '@mantine/hooks';
import Contact from './pages/Contact';

function App() {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  useHotkeys([['mod+J', () => toggleColorScheme()]]);

  return (
    <BrowserRouter>
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
          <MantineProvider theme={{ colorScheme,
          components: {
            Link: {
              defaultProps: (theme) => ({
                color: theme.colorScheme === 'dark' ? 'orange' : 'cyan',
              }),
            }
          },
          other: {
            colors: {
              green:"C9E3CA",
              brown:"814331",
              red:"C9160D",
              beige:"#D0C3A9",
              black:"0B090A",
              blue:"0F1548",
              coral:"ED8B8F",
              yellow:"E7E28B"
            }
          }
        }} >
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="work" element={<Projects />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
        </MantineProvider>
        </ColorSchemeProvider>
    </BrowserRouter>
  );
}

export default App;
