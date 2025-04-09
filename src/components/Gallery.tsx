import { useState } from "react";
import styled from "styled-components";
import { galleryImage } from "../imgUrl";
const images = [
  galleryImage.riceBowl,
  galleryImage.sobaSalad,
  galleryImage.grilledBeef,
  galleryImage.teriyakiChicken,
  galleryImage.loverBox,
  galleryImage.tempuraPrawn,
  galleryImage.seaWeed,
  galleryImage.salmonNigiri,
];

const visibleImages = 4;
const imageWidth = 220;

const GalleryContainer = styled.div`
  width: 80%;
  max-width: 900px;
  padding: 20px;
  position: relative;
`;

const GalleryWrapper = styled.div<{ $translatex: number }>`
  display: flex;
  gap: 15px;
  transition: transform 0.3s ease-in-out;
  transform: translateX(${(props) => props.$translatex}px);
`;

const GalleryItem = styled.div`
  width: ${imageWidth - 15}px;
  height: 250px;
  flex-shrink: 0;
  border-radius: 12px;
  overflow: hidden;
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
`;

const ArrowButton = styled.button<{ $left?: boolean }>`
  position: absolute;
  top: 50%;
  ${(props) => (props.$left ? "left: 10px;" : "right: 10px;")}
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.3);
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 24px;
  cursor: pointer;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s;

  &:hover {
    background: rgba(0, 0, 0, 0.6);
  }
`;

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollGallery = (direction: "left" | "right") => {
    setCurrentIndex((prevIndex) => {
      if (direction === "left") {
        return prevIndex > 0 ? prevIndex - 1 : images.length - visibleImages;
      } else {
        return prevIndex >= images.length - visibleImages ? 0 : prevIndex + 1;
      }
    });
  };

  return (
    <GalleryContainer>
      <ArrowButton $left onClick={() => scrollGallery("left")}>
        &#10094;
      </ArrowButton>

      <div style={{ overflow: "hidden" }}>
        <GalleryWrapper $translatex={-currentIndex * imageWidth}>
          {images.map((image, index) => (
            <GalleryItem key={index}>
              <GalleryImage src={image} alt={`Gallery ${index + 1}`} />
            </GalleryItem>
          ))}
        </GalleryWrapper>
      </div>

      <ArrowButton onClick={() => scrollGallery("right")}>&#10095;</ArrowButton>
    </GalleryContainer>
  );
};

export default Gallery;
