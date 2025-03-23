import { Card, Text } from "@mantine/core";
import timelineData from "../assets/timelineData.json";

interface CareerItemCardProps {
  selectedCareerIndex: number; // Active index passed from the parent
}

function CareerItemCard({ selectedCareerIndex }: CareerItemCardProps) {
  const selectedIndexData = timelineData[selectedCareerIndex];
  return (
    <div>
      <Card w={300} shadow="sm" padding="lg" radius="md" withBorder>
        <Text size="lg" style={{ maxWidth: 300, wordWrap: "break-word" }}>
          {selectedIndexData.description}
        </Text>
        {selectedIndexData.majors && (
          <Text mt="sm">
            <Text component="span" fw={700}>
              Majors:
            </Text>{" "}
            {selectedIndexData.majors.join(", ")}
          </Text>
        )}
        {selectedIndexData.gpa && (
          <Text mt="sm">
            <Text component="span" fw={700}>
              GPA:
            </Text>{" "}
            {selectedIndexData.gpa}
          </Text>
        )}
        {selectedIndexData.courses && (
          <Text mt="sm">
            <Text component="span" fw={700}>
              Courses:
            </Text>{" "}
            {selectedIndexData.courses.join(", ")}
          </Text>
        )}
        {selectedIndexData.skills && (
          <Text mt="sm">
            <Text component="span" fw={700}>
              Skills:
            </Text>{" "}
            {selectedIndexData.skills.join(", ")}
          </Text>
        )}
        {selectedIndexData.projects && (
          <Text mt="sm">
            {" "}
            <Text component="span" fw={700}>
              Projects:
            </Text>{" "}
            {selectedIndexData.projects.join(", ")}
          </Text>
        )}
        {selectedIndexData.highlights && (
          <Text mt="sm">
            {" "}
            <Text component="span" fw={700}>
              Highlights:
            </Text>{" "}
            {selectedIndexData.highlights.join(", ")}
          </Text>
        )}
      </Card>
    </div>
  );
}

export default CareerItemCard;
