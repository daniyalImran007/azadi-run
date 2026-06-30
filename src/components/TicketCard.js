import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background: linear-gradient(145deg, #16271e, #0f1b15);
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(248, 229, 49, 0.1);
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${(props) => props.color || "#f8e531"};
    opacity: 0.8;
  }

  &::after {
    content: "";
    position: absolute;
    top: -50%;
    right: -50%;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle,
      ${(props) => props.color || "#f8e531"}10 0%,
      transparent 70%
    );
    opacity: 0;
    transition: opacity 0.4s;
  }

  &:hover {
    transform: translateY(-10px);
    border-color: ${(props) => props.color || "#f8e531"};
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);

    &::after {
      opacity: 1;
    }
  }
`;

const CardContent = styled.div`
  position: relative;
  z-index: 1;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const CardImage = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 1.5rem;
  border: 1px solid rgba(248, 229, 49, 0.15);
`;

const RegisterButton = styled.a`
  background: transparent;
  border: 2px solid ${(props) => props.color || "#f8e531"};
  color: white;
  padding: 0.9rem 0;
  font-weight: 700;
  border-radius: 60px;
  text-align: center;
  transition: all 0.3s;
  cursor: pointer;
  text-decoration: none;
  display: block;
  width: 100%;
  font-size: 1rem;
  letter-spacing: 0.5px;
  margin-top: auto;

  &:hover {
    background: ${(props) => props.color || "#f8e531"};
    color: #000000;
    border-color: ${(props) => props.color || "#f8e531"};
    box-shadow: 0 0 30px ${(props) => props.color || "#f8e531"}40;
    transform: scale(1.02);
  }
`;

function TicketCard({ image, btnText, link, color }) {
  return (
    <Card color={color}>
      <CardContent>
        <CardImage src={image} alt="Race" />
        <RegisterButton
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          color={color}
        >
          {btnText} <i className="fas fa-arrow-right"></i>
        </RegisterButton>
      </CardContent>
    </Card>
  );
}

export default TicketCard;
