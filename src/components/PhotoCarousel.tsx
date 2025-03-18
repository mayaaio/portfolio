import { Carousel } from "@mantine/carousel";
import { useEffect, useState } from "react";
import PhotoCard from "./PhotoCard";

function PhotoCarousel() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImagesData = async () => {
      try {
        // Fetch the image metadata JSON file
        const response = await fetch("/images.json");
        const data = await response.json();
        setImages(data); // Set the image metadata to state
      } catch (error) {
        console.error("Error fetching image metadata:", error);
      }
    };

    fetchImagesData();
  }, []);

  return (
    <Carousel
      align="start"
      slideSize="auto"
      slideGap="md"
      controlsOffset="sm"
      loop
      dragFree
    >
      {images.map((image, index) => (
        <Carousel.Slide key={index}>
          <PhotoCard {...image} />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}

export default PhotoCarousel;
