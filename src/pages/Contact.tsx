import { Title, Text } from "@mantine/core"
import { Link } from "react-router-dom"

function Contact() {
    return(
        <div>
            <Title>Contact</Title>
            <Text component={Link} target="_blank" to="https://www.linkedin.com/in/mayaitkinofer/">Linkedin</Text>
        </div>
    )
}

export default Contact