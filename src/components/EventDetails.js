import React from "react";
import styled from "styled-components";

const Section = styled.section`
  padding: 5rem 3rem;
  background: linear-gradient(180deg, #0f1b15 0%, #0a120e 100%);
  border-bottom: 1px solid rgba(248, 229, 49, 0.1);
  text-align: center;

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
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
  margin-bottom: 1.5rem;
`;

const Title = styled.h2`
  font-size: 3rem;
  font-weight: 800;
  color: white;
  margin-bottom: 1.5rem;
  letter-spacing: -0.5px;

  span {
    color: #f8e531;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  font-size: 1.15rem;
  max-width: 800px;
  margin: 0 auto 2.5rem;
  color: #b8d0c5;
  line-height: 1.8;
`;

function EventDetails() {
  return (
    <Section id="about">
      <Container>
        <Badge>More Than a Race</Badge>
        <Title>
          <span>A celebration of freedom,</span> fitness and the spirit of
          Pakistan.
        </Title>
        <Description>
          Welcome to Azadi Run - the premier celebration of spirit, endurance,
          and unity. Whether you are chasing a new personal best or simply
          celebrating the joy of running on Independence Day, this event is
          designed for every pace and every runner. Join us for an unforgettable
          experience that combines athletic achievement with the spirit of
          freedom.
        </Description>
      </Container>
    </Section>
  );
}

export default EventDetails;
