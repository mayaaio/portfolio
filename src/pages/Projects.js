import { Accordion, Stack, Title, Text } from "@mantine/core";
import Project from "../components/Project";

function Projects() {
  return (
    <Stack>
      <Title>Projects</Title>
      <Text>
        Note: many of these projects use free, external API integration. If the
        key associated with the project is out of API credits, the project may
        be dysfunctional.
      </Text>
      <Accordion>
        <Project
          title={"Rolling Tune Tracker"}
          desc={
            "A full-stack app that tracks progress through Rolling Stone’s 500 Greatest Albums, using data scraped with Python and enriched via the Spotify API. Built with React + Express, fully deployed on Vercel and Render."
          }
          link={"https://rollingtunetracker.vercel.app/"}
          github={"https://github.com/mayaaio/rollingtunetracker"}
          img={"rollingtunetracker.png"}
        />
        <Project
          title={"FridgeMate"}
          desc={
            "This project was built for the fourth and final round of Lighthall’s Software Engineering Super League 3 competition, and won first place. \nIt is a fridge item tracker that tracks the expiration status and quantity of items in a fridge, using an external API. For this project, I worked with a partner, and we used React, Javascript, Firebase, and Node.js."
          }
          link={"https://fridgemateapp.netlify.app/"}
          github={"https://github.com/mayaaio/FridgeMate"}
          img={"fridgemate.png"}
        />
        <Project
          title={"PalatePals"}
          desc={
            "This project was built for the third round of Lighthall’s Software Engineering Super League 3 competition, and won third place. It is a solution for couples/groups to help decide where to eat. For this project, I worked with a partner, and we used React, Javascript, Firebase, and Node.js."
          }
          link={"https://palatepals.netlify.app/"}
          github={"https://github.com/mayaaio/PalatePals"}
          img={"palatepals.png"}
        />
        <Project
          title={"Air distance calculator"}
          desc={
            "This project was built for the first round of Lighthall’s Software Engineering Super League 3 competition, and won first place out of 324 registered participants. \nIt is a simple website that calculates the air distance between any 2 points on earth. The project uses a Google Maps API integration, and was built using JavaScript and React."
          }
          link={"https://distancecalculator.vercel.app/"}
          github={"https://github.com/mayaaio/distance-calculator"}
          img={"airdistance.png"}
        />
        <Project
          title={"Task tracker"}
          desc={
            "This project was built for the second round of Lighthall’s Software Engineering Super League 3 competition. It is a personal task tracker that allows users to add, delete, edit, and filter tasks by priority. I built it using React, Javascript, Firebase, Node.js and Express."
          }
          link={"https://mayas-task-tracker.vercel.app/"}
          github={"https://github.com/mayaaio/task-tracker"}
          img={"tasktracker.png"}
        />
      </Accordion>
    </Stack>
  );
}

export default Projects;
