import React from 'react';
import { Nav, NavLink, NavLogo, Logo, NavLinkAlignRight,NavBarIcon } from './NavbarElements';

const NavBar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/work"><span className="workLink">Work</span></NavLink>
                <NavLogo><Logo /></NavLogo>
                <NavLinkAlignRight>
                    <NavLink to="/resume">Resume</NavLink>
                    <NavLink to="/contact">Get In Touch</NavLink>
                </NavLinkAlignRight>
            </Nav>
            <NavBarIcon>
                <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
            </NavBarIcon>
        </>
    )
}

export default NavBar;
