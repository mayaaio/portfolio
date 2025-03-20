import { Group, Timeline, Text } from "@mantine/core";
import { IconCalendar, IconMapPin } from "@tabler/icons-react";

interface TimeLineItemProps {
  title: string;
  description?: string;
  location?: string;
  skills?: string;
  startDate: number | string;
  endDate: number | string;
  icon: JSX.Element;
  onClick: () => void; // Added onClick prop to trigger the action when clicked
}

function TimeLineItem({
  title,
  description,
  location,
  skills,
  startDate,
  endDate,
  icon,
  onClick,
}: TimeLineItemProps) {
  return (
    <Timeline.Item title={title} bullet={icon} onClick={onClick}>
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
