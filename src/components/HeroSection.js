import React, { useState, useEffect } from "react";
import styled from "styled-components";

const HeroContainer = styled.section`
  position: relative;
  width: 100%;
  height: 85vh;
  min-height: 500px;
  overflow: hidden;
  background: #0d1d14;
  margin-top: -1px;
`;

const SlidesWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  transform: translateX(-${(props) => props.activeIndex * 100}%);
`;

const Slide = styled.div`
  flex: 0 0 100%;
  height: 100%;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 8%;
  position: relative;
  text-align: center;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      135deg,
      rgba(7, 83, 45, 0.85) 0%,
      rgba(0, 0, 0, 0.6) 100%
    );
    z-index: 1;
  }
`;

const SlideContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 800px;
  color: white;
  text-align: center;

  h1 {
    font-size: 4.2rem;
    font-weight: 800;
    line-height: 1.2;
    margin-bottom: 1.2rem;
    text-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
    span {
      font-size: 6rem;
    }
    .highlight {
      color: #f8e531;
      position: relative;

      &::after {
        content: "";
        position: absolute;
        bottom: 5px;
        left: 0;
        width: 100%;
        height: 4px;
        background: #f8e531;
        opacity: 0.5;
      }
    }

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }

  p {
    font-size: 1.2rem;
    opacity: 0.9;
    margin: 0 auto 2.5rem;
    max-width: 600px;
    line-height: 1.6;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;

const CTAButton = styled.a`
  background: #f8e531;
  color: #000000;
  padding: 1rem 3rem;
  font-weight: 700;
  font-size: 1.1rem;
  border-radius: 60px;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 8px 30px rgba(248, 229, 49, 0.3);
  display: inline-block;
  text-decoration: none;
  letter-spacing: 0.5px;
  border: 2px solid transparent;

  i {
    margin-right: 8px;
  }

  &:hover {
    background: transparent;
    color: #f8e531;
    border-color: #f8e531;
    transform: translateY(-3px);
    box-shadow: 0 12px 40px rgba(248, 229, 49, 0.15);
  }
`;

const Controls = styled.div`
  position: absolute;
  bottom: 2.5rem;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  gap: 16px;
  z-index: 10;
`;

const Dot = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${(props) =>
    props.active ? "#f8e531" : "rgba(255,255,255,0.3)"};
  border: 2px solid ${(props) => (props.active ? "#f8e531" : "transparent")};
  transition: all 0.3s;
  cursor: pointer;
  padding: 0;

  &:hover {
    transform: scale(1.2);
  }
`;

// Updated to use local images from public folder
const heroImages = [
  "/cover1.png",
  "/cover2.png",
  "/cover3.png",
  "/cover4.png",
  "/cover5.png",
  "/cover6.png",
  "/cover7.png",
];

function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const registerLink =
    "https://docs.google.com/forms/d/e/1FAIpQLSc5Jw0nEzb9aLGqKc-9H31kaYmi9xFigIfvNMkH4JXigooMEw/viewform";

  return (
    <HeroContainer>
      <SlidesWrapper activeIndex={activeIndex}>
        {heroImages.map((src, idx) => (
          <Slide key={idx} image={src}>
            <SlideContent>
              <h1>
                Every Step Celebrates
                <br />
                <span>FREEDOM</span>
              </h1>
              <CTAButton
                href={registerLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-running"></i> Register Now
              </CTAButton>
            </SlideContent>
          </Slide>
        ))}
      </SlidesWrapper>
      <Controls>
        {heroImages.map((_, idx) => (
          <Dot
            key={idx}
            active={idx === activeIndex}
            onClick={() => setActiveIndex(idx)}
          />
        ))}
      </Controls>
    </HeroContainer>
  );
}

export default HeroSection;
