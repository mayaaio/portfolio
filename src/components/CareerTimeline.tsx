import { Timeline } from "@mantine/core";
import {
  IconSchool,
  IconFileTypeTsx,
  IconRainbow,
  IconMountain,
  IconPlaneTilt,
  IconListLetters,
  IconSearch,
} from "@tabler/icons-react";
import TimeLineItem from "./TimeLineItem";

interface CareerTimelineProps {
  onCareerSelect: (index: number) => void;
}

function CareerTimeline({ onCareerSelect }: CareerTimelineProps) {
  return (
    <Timeline active={4} bulletSize={24} lineWidth={2}>
      <TimeLineItem
        title={"University of Pennsylvania"}
        description={
          "Majored in Computer Science and Health and Societies, graduated with a 3.89 GPA"
        }
        location={"Philadelphia, PA"}
        skills={"Java, SQL, Python, pandas"}
        startDate={2018}
        endDate={2022}
        icon={<IconSchool size={16} />}
        onClick={() => onCareerSelect(0)}
      />
      <TimeLineItem
        title={"Ophelia"}
        description={undefined}
        location={"New York City, NY"}
        skills={undefined}
        startDate={2022}
        endDate={2023}
        icon={<IconFileTypeTsx size={16} />}
        onClick={() => onCareerSelect(1)}
      />
      <TimeLineItem
        title={"Volunteer + travel"}
        description={undefined}
        location={"Wailuku, HI"}
        skills={undefined}
        startDate={2023}
        endDate={2023}
        icon={<IconRainbow size={16} />}
        onClick={() => onCareerSelect(2)}
      />
      <TimeLineItem
        title={"Volunteer + travel"}
        description={undefined}
        location={"South Lake Tahoe, CA"}
        skills={undefined}
        startDate={2023}
        endDate={2023}
        icon={<IconMountain size={16} />}
        onClick={() => onCareerSelect(3)}
      />
      <TimeLineItem
        title={"Backpacking in Southeast Asia"}
        description={undefined}
        location={"Thailand, Laos, Cambodia, Vietnam, Nepal"}
        skills={undefined}
        startDate={2023}
        endDate={2024}
        icon={<IconPlaneTilt size={16} />}
        onClick={() => onCareerSelect(4)}
      />
      <TimeLineItem
        title={"Teaching"}
        description={undefined}
        location={"Afikim, IL"}
        skills={undefined}
        startDate={2024}
        endDate={2025}
        icon={<IconListLetters size={16} />}
        onClick={() => onCareerSelect(5)}
      />
      <TimeLineItem
        title={"Job search"}
        description={undefined}
        location={undefined}
        skills={undefined}
        startDate={2025}
        endDate={"current"}
        icon={<IconSearch size={16} />}
        onClick={() => onCareerSelect(6)}
      />
    </Timeline>
  );
}

export default CareerTimeline;
