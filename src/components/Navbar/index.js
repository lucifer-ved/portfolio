import React,{ Component} from 'react';
import { Nav, NavLink, NavLogo, Logo, NavLinkAlignRight } from './NavbarElements';
import Resume from '../../assets/vedantsolanki.pdf';

class NavBar extends Component{

    componentDidMount(){
        setInterval(function(){ 
            const iframe = document.getElementsByTagName('iframe')[0];  
            if(iframe && iframe.contentWindow!==undefined && iframe.contentWindow.document.getElementsByTagName('footer').length>0){  
                iframe.contentWindow.document.getElementsByTagName('footer')[0].innerHTML = "";
            }
        }, 100);
    }

    
    showContactOption = ()=>{
        try{
            const iframe = document.getElementsByTagName('iframe')[0];
            iframe.contentWindow.document.getElementsByClassName('launcher__bubble')[0].click();
            // must be some better way to do this
            setTimeout(function(){ iframe.contentWindow.document.getElementsByTagName('footer')[0].innerHTML = "";}, 100);

        }catch(err){
            //console.log("Element Not Found Exception !")
        }
    }

    render(){
        return (
            <Nav>
                <NavLink to="/"><span className="workLink">Work</span></NavLink>
                <NavLogo><Logo /></NavLogo>
                <NavLinkAlignRight>
                    <NavLink to={Resume} target='_blank' rel='noopener noreferrer'>Resume</NavLink>
                    <NavLink to="#" onClick={this.showContactOption}>Get In Touch</NavLink>
                </NavLinkAlignRight>
            </Nav>
        )
    }
}

export default NavBar;
