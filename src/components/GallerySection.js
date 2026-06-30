import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Section = styled.section`
  padding: 5rem 3rem;
  background: linear-gradient(180deg, #0a120e 0%, #0f1b15 100%);
  border-top: 1px solid rgba(248, 229, 49, 0.1);

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const Badge = styled.div`
  display: inline-block;
  background: rgba(248, 229, 49, 0.1);
  border: 1px solid rgba(248, 229, 49, 0.2);
  padding: 0.3rem 1.5rem;
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 600;
  color: #f8e531;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  margin-bottom: 1rem;
`;

const Title = styled.h2`
  font-size: 2.8rem;
  font-weight: 800;
  color: white;
  margin-bottom: 0.5rem;

  span {
    color: #f8e531;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  color: #8ba396;
  font-size: 1.1rem;
`;

const SliderContainer = styled.div`
  overflow: hidden;
  position: relative;
  border-radius: 20px;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5);
`;

const Track = styled.div`
  display: flex;
  transition: transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  transform: translateX(-${(props) => props.activeIndex * 100}%);
`;

const Slide = styled.div`
  flex: 0 0 100%;
  height: 450px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to top,
      rgba(10, 14, 12, 0.6) 0%,
      transparent 100%
    );
  }

  @media (max-width: 768px) {
    height: 280px;
  }
`;

const Controls = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 2rem;
`;

const Dot = styled.button`
  width: 40px;
  height: 4px;
  border-radius: 4px;
  background: ${(props) =>
    props.active ? "#f8e531" : "rgba(255,255,255,0.2)"};
  border: none;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    background: ${(props) =>
      props.active ? "#f8e531" : "rgba(255,255,255,0.4)"};
  }
`;

// Updated to use local images from public folder
const galleryImages = [
  "/vision1.png",
  "/vision2.png",
  "/vision3.png",
  "/vision4.png",
  "/vision5.png",
];

function GallerySection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % galleryImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Section id="gallery">
      <Container>
        <Header>
          <Badge>What’s to Come</Badge>
          <Title>
            The <span> Vision</span>
          </Title>
          <Subtitle>
            A visual journey into the energy, atmosphere, and community we are
            bringing to life for this run.
          </Subtitle>
        </Header>
        <SliderContainer>
          <Track activeIndex={activeIndex}>
            {galleryImages.map((img, i) => (
              <Slide key={i} image={img} />
            ))}
          </Track>
        </SliderContainer>
        <Controls>
          {galleryImages.map((_, i) => (
            <Dot
              key={i}
              active={i === activeIndex}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </Controls>
      </Container>
    </Section>
  );
}

export default GallerySection;
