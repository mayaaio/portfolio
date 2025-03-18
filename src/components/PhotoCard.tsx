import { Paper, Text, BackgroundImage, Stack } from "@mantine/core";
import { useHover } from "@mantine/hooks";
import process from "process";

interface CardProps {
  public_id: string;
  format: string;
  location?: string;
  description?: string;
}

function PhotoCard({ public_id, format, location, description }: CardProps) {
  const { hovered, ref } = useHover();
  return (
    <Paper
      opacity={hovered ? 0.5 : 1}
      shadow="md"
      radius="md"
      style={{
        display: "inline-block", // Makes the Paper width fit the image's width
        maxWidth: "100%", // Ensures it doesn't exceed the container's width
        width: 200,
      }}
    >
      <BackgroundImage
        ref={ref}
        radius="sm"
        src={
          `https://res.cloudinary.com/` +
          process.env.REACT_APP_CLOUDINARY_CLOUD_NAME +
          `/image/upload/f_auto/` +
          public_id +
          "." +
          format
        }
        style={{
          height: "300px",
          width: "auto",
        }}
      >
        <Stack justify="space-between" p="sm">
          <Text fw={700} fs="italic">
            {hovered ? location : ""}
          </Text>
          <Text>{hovered ? description : ""}</Text>
        </Stack>
      </BackgroundImage>
    </Paper>
  );
}

export default PhotoCard;
