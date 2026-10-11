import React from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';
// Resume is hidden until the PDF is updated: restore this import, FiZap,
// NavButton and the button below.
// import Resume from '../../assets/vedantsolanki.pdf';
import {
  Nav,
  NavInner,
  NavBrand,
  BrandIconChip,
  BrandName,
  BrandFirst,
  BrandLast,
  NavMenu,
  NavAnchor,
  NavActions,
  ThemeToggleButton
} from './NavbarElements';

const NavBar = () => {
  return (
    <Nav>
      <NavInner>
        <NavBrand href="#hello" className="no-hover">
          <BrandIconChip>
            <span>VS</span>
          </BrandIconChip>
          <BrandName>
            <BrandFirst>Vedant</BrandFirst>
            <BrandLast>Solanki</BrandLast>
          </BrandName>
        </NavBrand>

        <NavMenu>
          <NavAnchor href="#hello" className="nav-link no-hover" data-target="hello">Hello</NavAnchor>
          <NavAnchor href="#results" className="nav-link no-hover" data-target="results">Building</NavAnchor>
          <NavAnchor href="#evidence" className="nav-link no-hover" data-target="evidence">Experience</NavAnchor>
          <NavAnchor href="#learning" className="nav-link no-hover" data-target="learning">Learning</NavAnchor>
          <NavAnchor href="#contact" className="nav-link no-hover" data-target="contact">Contact</NavAnchor>
        </NavMenu>

        <NavActions>
          {/* <NavButton href={Resume} target="_blank" rel="noopener noreferrer" className="neu-sm no-hover">
            <FiZap style={{ marginRight: '0.45rem' }} /> Resume
          </NavButton> */}

          <ThemeToggleButton
            id="theme-toggle"
            className="neu-sm no-hover"
            aria-label="Toggle theme"
          >
            <span className="theme-icon-light"><FiSun /></span>
            <span className="theme-icon-dark" style={{ display: 'none' }}><FiMoon /></span>
          </ThemeToggleButton>
        </NavActions>
      </NavInner>
    </Nav>
  );
};

export default NavBar;
