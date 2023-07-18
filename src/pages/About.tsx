import { Title, Text } from "@mantine/core";
import Pdf from '../assets/Resume.pdf';
import { Link } from "react-router-dom";

function About() {
    return(
        <div>
            <Title>About me</Title>
            <Text component={Link} target="_blank" to={Pdf}>Resume</Text>
        </div>
    )
}

export default About