import React from "react";
import styled from "styled-components";
import TicketCard from "./TicketCard";

const Section = styled.section`
  padding: 5rem 3rem;
  background: #0a120e;

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
  margin-bottom: 3.5rem;
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
  max-width: 600px;
  margin: 0 auto;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const tickets = [
  {
    id: 1,
    image: "/14kChallenge.png",
    btnText: "Register Now - 14K",
    color: "#f8e531",
  },
  {
    id: 2,
    image: "/5kFreedom.png",
    btnText: "Register Now - 5K",
    color: "#f8e531",
  },
  {
    id: 3,
    image: "/azadifunrun.png",
    btnText: "Register Now - Fun Run",
    color: "#f8e531",
  },
];

function TicketsSection() {
  const registerLink =
    "https://docs.google.com/forms/d/e/1FAIpQLSc5Jw0nEzb9aLGqKc-9H31kaYmi9xFigIfvNMkH4JXigooMEw/viewform";

  return (
    <Section id="tickets">
      <Container>
        <Header>
          <Badge>Choose Your Race</Badge>
          <Title>
            Find Your <span>Distance</span>
          </Title>
          <Subtitle>
            Select the race that matches your spirit and challenge yourself
          </Subtitle>
        </Header>
        <Grid>
          {tickets.map((ticket) => (
            <TicketCard key={ticket.id} {...ticket} link={registerLink} />
          ))}
        </Grid>
      </Container>
    </Section>
  );
}

export default TicketsSection;
