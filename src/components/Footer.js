import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background: #000000;
  padding: 3rem 3rem 2rem;
  border-top: 1px solid rgba(248, 229, 49, 0.1);

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
`;

const Brand = styled.div`
  .logo {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 0.5rem;

    img {
      height: 50px;
      width: auto;
      object-fit: contain;
    }

    @media (max-width: 768px) {
      justify-content: center;
    }
  }

  p {
    color: #8ba396;
    font-size: 0.95rem;
    line-height: 1.6;
    max-width: 350px;

    @media (max-width: 768px) {
      max-width: 100%;
    }
  }
`;

const Links = styled.div`
  h4 {
    color: white;
    font-size: 1rem;
    margin-bottom: 1rem;
    font-weight: 700;
  }

  a {
    display: block;
    color: #8ba396;
    text-decoration: none;
    margin: 0.5rem 0;
    transition: 0.2s;
    font-size: 0.95rem;

    &:hover {
      color: #f8e531;
    }
  }
`;

const Socials = styled.div`
  h4 {
    color: white;
    font-size: 1rem;
    margin-bottom: 1rem;
    font-weight: 700;
  }

  .social-icons {
    display: flex;
    gap: 1.2rem;
    flex-wrap: wrap;

    @media (max-width: 768px) {
      justify-content: center;
    }
  }

  a {
    color: #8ba396;
    font-size: 1.5rem;
    transition: 0.2s;

    &:hover {
      color: #f8e531;
      transform: translateY(-3px);
    }
  }
`;

const Bottom = styled.div`
  max-width: 1200px;
  margin: 2rem auto 0;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  text-align: center;
  color: #5a7a6a;
  font-size: 0.85rem;
`;

function Footer() {
  return (
    <FooterContainer>
      <Container>
        <Brand>
          <div className="logo">
            <img src="/AzadiRunLogo.png" alt="Azadi Run Logo" />
          </div>
          <p>
            Celebrating freedom, endurance, and unity through the spirit of
            running.
          </p>
        </Brand>
        <Links>
          <h4>Quick Links</h4>
          <a href="#about">About</a>
          <a href="#tickets">Tickets</a>
          <a href="#gallery">Gallery</a>
        </Links>
        <Socials>
          <h4>Connect With Us</h4>
          <div className="social-icons">
            <a
              href="https://www.instagram.com/azadirunpk?igsh=M2tlOGliMGpuMDI2"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.facebook.com/azadirunpk?mibextid=wwXIfr&rdid=mDMTtfOkupdLvuUe&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1BEPpJxhXY%2F%3Fmibextid%3DwwXIfr#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/azadi-run-5b3741418/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://www.tiktok.com/@azadirunpk?_r=1&_t=ZS-97eGLUs20U1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
            >
              <i className="fab fa-tiktok"></i>
            </a>
          </div>
        </Socials>
      </Container>
      <Bottom>
        © 2026 Azadi Run. All rights reserved. | Islamabad, Pakistan
      </Bottom>
    </FooterContainer>
  );
}

export default Footer;
