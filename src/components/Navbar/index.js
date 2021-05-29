import React from 'react';
import { Nav, NavLink, NavLogo, Logo, NavLinkAlignRight } from './NavbarElements';
import Resume from '../../assets/vedant_solanki.pdf';

const NavBar = () => {

    function showContactOption(){
        try{
            const iframe = document.getElementsByTagName('iframe')[0];
            iframe.contentWindow.document.getElementsByClassName('launcher__bubble')[0].click();
        }catch(err){
            //console.log("Element Not Found Exception !")
        }
    }

    return (
        <Nav>
            <NavLink to="/"><span className="workLink">Work</span></NavLink>
            <NavLogo><Logo /></NavLogo>
            <NavLinkAlignRight>
                <NavLink to={Resume} target='_blank' rel='noopener noreferrer'>Resume</NavLink>
                <NavLink to="/GetInTouch" onClick={showContactOption}>Get In Touch</NavLink>
            </NavLinkAlignRight>
        </Nav>
    )
}

export default NavBar;
