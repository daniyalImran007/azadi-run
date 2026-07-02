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
    height: 75px;
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
      height: 60px;
    }
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 2.5rem;
  height: 100%;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const NavLinksWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;

  @media (max-width: 768px) {
    display: ${(props) => (props.isOpen ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 75px;
    left: 0;
    right: 0;
    background: #000000;
    padding: 1.5rem;
    gap: 1.2rem;
    border-bottom: 1px solid rgba(248, 229, 49, 0.2);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.8);
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
    font-size: 1.1rem;
    padding: 0.5rem 0;
    width: 100%;
    text-align: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
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
    padding: 0.5rem 1.5rem;
  }
`;

// Desktop Register Button - stays in nav on desktop
const DesktopRegisterBtn = styled(RegisterNavBtn)`
  @media (max-width: 768px) {
    display: none;
  }
`;

// Mobile Register Button - shows on mobile
const MobileRegisterBtn = styled(RegisterNavBtn)`
  display: none;

  @media (max-width: 768px) {
    display: inline-block;
  }
`;

const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  flex-direction: column;
  gap: 5px;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    display: flex;
  }

  span {
    display: block;
    width: 28px;
    height: 3px;
    background: ${(props) => (props.isOpen ? "#f8e531" : "#ffffff")};
    border-radius: 3px;
    transition: all 0.3s ease;
    transform-origin: center;

    &:nth-child(1) {
      transform: ${(props) =>
        props.isOpen ? "rotate(45deg) translate(5px, 6px)" : "rotate(0)"};
    }

    &:nth-child(2) {
      opacity: ${(props) => (props.isOpen ? "0" : "1")};
    }

    &:nth-child(3) {
      transform: ${(props) =>
        props.isOpen ? "rotate(-45deg) translate(5px, -6px)" : "rotate(0)"};
    }
  }
`;

const MobileRight = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when a link is clicked
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest("header")) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMenuOpen]);

  return (
    <HeaderContainer scrolled={scrolled}>
      <LogoContainer>
        <img src="/AzadiRunLogo.png" alt="Azadi Run Logo" />
      </LogoContainer>
      <Nav>
        <NavLinksWrapper isOpen={isMenuOpen}>
          <NavLink href="#about" onClick={handleLinkClick}>
            About
          </NavLink>
          <NavLink href="#tickets" onClick={handleLinkClick}>
            Tickets
          </NavLink>
          <NavLink href="#gallery" onClick={handleLinkClick}>
            Vision
          </NavLink>
          {/* Desktop Register Button - only visible on desktop */}
          <DesktopRegisterBtn
            href="https://docs.google.com/forms/d/e/1FAIpQLSc5Jw0nEzb9aLGqKc-9H31kaYmi9xFigIfvNMkH4JXigooMEw/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
            Register Now
          </DesktopRegisterBtn>
        </NavLinksWrapper>
      </Nav>
      {/* Mobile Register Button + Hamburger - only visible on mobile */}
      <MobileRight>
        <MobileRegisterBtn
          href="https://docs.google.com/forms/d/e/1FAIpQLSc5Jw0nEzb9aLGqKc-9H31kaYmi9xFigIfvNMkH4JXigooMEw/viewform"
          target="_blank"
          rel="noopener noreferrer"
        >
          Register Now
        </MobileRegisterBtn>
        <HamburgerButton
          isOpen={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </HamburgerButton>
      </MobileRight>
    </HeaderContainer>
  );
}

export default Header;
