import React, { useState, useEffect } from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3rem;
  background: #000000;
  border-bottom: 1px solid rgba(248, 229, 49, 0.2);
  position: sticky;
  top: 0;
  z-index: 100;
  transition: all 0.3s ease;
  height: 90px;

  @media (max-width: 768px) {
    padding: 0 1.5rem;
    flex-wrap: wrap;
    height: auto;
    min-height: 75px;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 5px 0;

  img {
    height: 80px;
    width: auto;
    object-fit: contain;
    display: block;
  }

  @media (max-width: 768px) {
    img {
      height: 65px;
    }
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 2.5rem;
  height: 100%;

  @media (max-width: 768px) {
    gap: 1.2rem;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    height: auto;
    padding: 0.5rem 0;
  }
`;

const NavLink = styled.a`
  color: #d4e8e0;
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  transition: 0.2s;
  padding: 0.3rem 0;
  border-bottom: 2px solid transparent;
  letter-spacing: 0.3px;
  white-space: nowrap;

  &:hover {
    color: #f8e531;
    border-bottom-color: #f8e531;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const RegisterNavBtn = styled.a`
  background: #f8e531;
  color: #000000;
  padding: 0.6rem 2rem;
  border-radius: 50px;
  font-weight: 700;
  font-size: 0.95rem;
  text-decoration: none;
  transition: all 0.2s;
  letter-spacing: 0.5px;
  border: 2px solid transparent;
  white-space: nowrap;

  &:hover {
    background: transparent;
    color: #f8e531;
    border-color: #f8e531;
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    font-size: 0.85rem;
    padding: 0.4rem 1.2rem;
  }
`;

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <HeaderContainer scrolled={scrolled}>
      <LogoContainer>
        <img src="/AzadiRunLogo.png" alt="Azadi Run Logo" />
      </LogoContainer>
      <Nav>
        <NavLink href="#about">About</NavLink>
        <NavLink href="#tickets">Tickets</NavLink>
        <NavLink href="#gallery">Gallery</NavLink>
        <RegisterNavBtn
          href="https://docs.google.com/forms/d/e/1FAIpQLSc5Jw0nEzb9aLGqKc-9H31kaYmi9xFigIfvNMkH4JXigooMEw/viewform"
          target="_blank"
          rel="noopener noreferrer"
        >
          Register Now
        </RegisterNavBtn>
      </Nav>
    </HeaderContainer>
  );
}

export default Header;
