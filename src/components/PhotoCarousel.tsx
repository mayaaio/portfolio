import { Carousel } from "@mantine/carousel";
import { useEffect, useState } from "react";
import PhotoCard from "./PhotoCard";
import { Stack, Text } from "@mantine/core";

interface ImageData {
  public_id: string;
  format: string;
  location?: string;
}

function PhotoCarousel() {
  const [images, setImages] = useState<ImageData[]>([]);

  useEffect(() => {
    const fetchImagesData = async () => {
      try {
        // Fetch the image metadata JSON file
        const response = await fetch(
          `https://res.cloudinary.com/` +
            process.env.REACT_APP_CLOUDINARY_CLOUD_NAME +
            `/image/list/portfolio.json`
        );
        const data = await response.json();
        const imageData = data.resources || [];

        if (Array.isArray(imageData)) {
          const filteredImages = imageData.map((image) => ({
            public_id: image.public_id,
            format: image.format,
            ...(image.context?.custom?.Location
              ? { location: image.context.custom.Location }
              : {}),
          }));

          setImages(filteredImages); // Set state with the filtered images
        } else {
          console.error("Expected an array of images but got:", imageData);
        }
      } catch (error) {
        console.error("Error fetching image metadata:", error);
      }
    };

    fetchImagesData();
  }, []);

  return (
    <Stack>
      <Text>Some career break highlights</Text>
      <Carousel
        align="start"
        slideSize="auto"
        slideGap="md"
        controlsOffset="sm"
        loop
        dragFree
        // slidesToScroll={3} // update this later to reflect the size of the viewport
      >
        {images.map((image, index) => (
          <Carousel.Slide key={index}>
            <PhotoCard {...image} />
          </Carousel.Slide>
        ))}
      </Carousel>
    </Stack>
  );
}

export default PhotoCarousel;
