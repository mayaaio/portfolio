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
import timelineData from "../assets/timelineData.json";

interface CareerTimelineProps {
  selectedCareerIndex: number; // Active index passed from the parent
  onCareerSelect: (index: number) => void;
}

function CareerTimeline({
  selectedCareerIndex,
  onCareerSelect,
}: CareerTimelineProps) {
  // map the icon name to the icon
  function getIcon(iconName) {
    switch (iconName) {
      case "school":
        return <IconSchool size={16} />;
      case "tsx":
        return <IconFileTypeTsx size={16} />;
      case "rainbow":
        return <IconRainbow size={16} />;
      case "mountain":
        return <IconMountain size={16} />;
      case "plane":
        return <IconPlaneTilt size={16} />;
      case "letters":
        return <IconListLetters size={16} />;
      case "search":
        return <IconSearch size={16} />;
      default:
        return null; // Return null or a default icon
    }
  }

  return (
    <Timeline active={selectedCareerIndex} bulletSize={24} lineWidth={2}>
      {timelineData.map((item, index) => (
        <TimeLineItem
          key={index}
          title={item.title}
          location={item.location}
          startDate={item.startDate}
          endDate={item.endDate}
          icon={getIcon(item.icon)}
          onClick={() => onCareerSelect(index)}
          isSelected={() => selectedCareerIndex == index}
        />
      ))}
    </Timeline>
  );
}

export default CareerTimeline;
