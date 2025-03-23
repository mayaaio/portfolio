import { Group, Timeline, Text } from "@mantine/core";
import { IconCalendar, IconMapPin } from "@tabler/icons-react";
import { useState } from "react";

interface TimeLineItemProps {
  title: string;
  location?: string;
  startDate: number | string;
  endDate: number | string;
  icon: JSX.Element;
  onClick: () => void; // Added onClick prop to trigger the action when clicked
}

function TimeLineItem({
  title,
  location,
  startDate,
  endDate,
  icon,
  onClick,
}: TimeLineItemProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Handle mouse enter and leave events
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <Timeline.Item
      title={title}
      bullet={icon}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        cursor: "pointer",
        backgroundColor: isHovered ? "#f0f0f0" : "white",
        transition: "background-color 0.3s ease",
      }}
    >
      {location && (
        <Group gap="xs">
          <IconMapPin size={14} />
          <Text size="xs">{location}</Text>
        </Group>
      )}
      <Group gap="xs" mt={4}>
        <IconCalendar size={14} />{" "}
        <Text size="xs">
          {startDate} - {endDate}
        </Text>
      </Group>
    </Timeline.Item>
  );
}

export default TimeLineItem;
