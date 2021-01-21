import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { IoMdMusicalNotes } from 'react-icons/io';
import { GiHamburgerMenu } from 'react-icons/gi';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

const Navbar = () => {
  const [isMobileMenuDisplayed, setIsMobileMenuDisplayed] = useState(false);

  const hamburgerMenuOnClick = () => {
    setIsMobileMenuDisplayed(!isMobileMenuDisplayed);
  };

  const mobileMenuItemOnClick = () => {
    setIsMobileMenuDisplayed(false);
  };

  return (
    <NavbarContainer data-testid="navbar" id="navbar">
      <LinkContainer
        to="/"
        onClick={mobileMenuItemOnClick}
        data-testid="homeButton"
        id="homeButton"
        title="Home Page Link"
      >
        <NavLinkIconContainer>
          <IoMdMusicalNotes />
        </NavLinkIconContainer>
        <NavLinkLabel>Home</NavLinkLabel>
      </LinkContainer>
      <DesktopNav />
      <HamburgerIcon
        onClick={hamburgerMenuOnClick}
        data-testid="mobileMenuToggleButton"
        id="mobileMenuToggleButton"
        title="Mobile Nav Toggle"
      />
      <MobileNav
        isMobileMenuDisplayed={isMobileMenuDisplayed}
        mobileMenuItemOnClick={mobileMenuItemOnClick}
      />
    </NavbarContainer>
  );
};

const NavbarContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100px;
  min-width: 100px;
  height: 100%;
  text-align: center;
  @media (max-width: 975px) {
    position: fixed;
    flex-direction: row;
    height: 80px;
    min-height: 80px;
    width: 100%;
  }
  @media (max-height: 620px) {
    position: fixed;
    flex-direction: row;
    height: 80px;
    min-height: 80px;
    width: 100%;
  }
  @media (max-width: 520px) {
    align-items: center;
  }
`;

const LinkContainer = styled(Link)`
  text-align: center;
  padding: 1rem;
  display: flex;
  margin-top: 0.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  color: #ffffffb6;
  text-decoration: none;
`;

const NavLinkLabel = styled.span`
  font-size: 1rem;
  visibility: hidden;
  @media (max-width: 520px) {
    display: none;
  }
`;

const NavLinkIconContainer = styled.div`
  display: block;
  font-size: 1.5rem;
  width: 100%;
  height: 100%;
  &:hover + ${NavLinkLabel} {
    visibility: visible;
  }
`;

const HamburgerIcon = styled(GiHamburgerMenu)`
  font-size: 1.5rem;
  padding: 1rem;
  display: block;
  &:hover {
    cursor: pointer;
  }
  @media (min-width: 521px) {
    display: none;
  }
`;

export default Navbar;
