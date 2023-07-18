import { Accordion, Stack, Title, Text} from "@mantine/core"
import Project from "../components/Project"

function Projects() {
    return(
        <Stack>
            <Title>Projects</Title>
            <Text>Note: many of these projects use free, external API integration. If the key associated with the project is out of API credits, the project may be dysfunctional.</Text>
            <Accordion >
               <Project 
                title={"Air distance calculator"} 
                desc={"This was created for part of a project"} 
                link={"https://distancecalculator.vercel.app/"} 
                github={"https://github.com/mayaaio/distance-calculator"} 
                img={"airdistance.png"}
               />
               <Project 
                title={"Task tracker"} 
                desc={"This was created for part of a project"} 
                link={"https://mayas-task-tracker.vercel.app/"} 
                github={"https://github.com/mayaaio/task-tracker"} 
                img={"tasktracker.png"}
               />
               <Project 
                title={"PalatePals"} 
                desc={"This was created for part of a project"} 
                link={"https://palatepals.netlify.app/"} 
                github={"https://github.com/mayaaio/PalatePals"} 
                img={"palatepals.png"}
               />
               <Project 
                title={"FridgeMate"} 
                desc={"This was created for part of a project"} 
                link={"https://fridgemateapp.netlify.app/"} 
                github={"https://github.com/mayaaio/FridgeMate"} 
                img={"fridgemate.png"}
               />
            </Accordion>
        </Stack>
    )
}

export default Projects