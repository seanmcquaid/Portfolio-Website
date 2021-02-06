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
    setIsMobileMenuDisplayed((prevState) => !prevState);
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
        <IoMdMusicalNotes />
      </LinkContainer>
      <DesktopNav />
      <MobileNav
        isMobileMenuDisplayed={isMobileMenuDisplayed}
        mobileMenuItemOnClick={mobileMenuItemOnClick}
      />
      <HamburgerIcon
        onClick={hamburgerMenuOnClick}
        data-testid="mobileMenuToggleButton"
        id="mobileMenuToggleButton"
        title="Mobile Nav Toggle"
      />
    </NavbarContainer>
  );
};

const NavbarContainer = styled.nav`
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100px;
  height: 100%;
  @media (max-width: 975px) {
    flex-direction: row;
    width: 100%;
    height: 80px;
    position: fixed;
  }
  @media (max-height: 620px) {
    flex-direction: row;
    width: 100%;
    height: 80px;
    position: fixed;
  }
`;

const LinkContainer = styled(Link)`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  color: #ffffffb6;
  text-decoration: none;
`;

const HamburgerIcon = styled(GiHamburgerMenu)`
  font-size: 1.5rem;
  padding: 1rem;
  &:hover {
    cursor: pointer;
  }
  @media (min-width: 975px) {
    display: none;
  }
  @media (max-height: 620px) {
    display: block;
  }
`;

export default Navbar;
