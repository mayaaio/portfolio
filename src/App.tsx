import "./css/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import { MantineProvider } from "@mantine/core";
import Contact from "./pages/Contact";
import "@mantine/core/styles.css";
import process from "process";
import "@mantine/carousel/styles.css";

function App() {
  return (
    <BrowserRouter>
      <MantineProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="work" element={<Projects />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </MantineProvider>
    </BrowserRouter>
  );
}

export default App;
