import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import EventDetails from "./components/EventDetails";
import TicketsSection from "./components/TicketsSection";
import GallerySection from "./components/GallerySection";
import Footer from "./components/Footer";
import GlobalStyles from "./styles/GlobalStyles";

const AppContainer = styled.div`
  max-width: 100%;
  margin: 0 auto;
  background: #000000;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <AppContainer>
        <Header />
        <HeroSection />
        <EventDetails />
        <TicketsSection />
        <GallerySection />
        <Footer />
      </AppContainer>
    </>
  );
}

export default App;
