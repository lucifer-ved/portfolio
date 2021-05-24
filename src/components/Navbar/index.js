import React from 'react';
import { Nav, NavLink, NavLogo, Logo, NavLinkAlignRight } from './NavbarElements';

const NavBar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/"><span className="workLink">Work</span></NavLink>
                <NavLogo><Logo /></NavLogo>
                <NavLinkAlignRight>
                    <NavLink to="/resume">Resume</NavLink>
                    <NavLink to="/GetInTouch">Get In Touch</NavLink>
                </NavLinkAlignRight>
            </Nav>
            
        </>
    )
}

export default NavBar;
