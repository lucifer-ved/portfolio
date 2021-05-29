import React from 'react';
import { IntroHeading, IntroContent, IntroContainer, IntroLink, SocialMediaContainer, SocialIcon} from './IntroElements';
import { SiGithub, SiLinkedin} from 'react-icons/si';
import Work from '../Work';
import Projects from '../Projects';
import Footer from '../Footer';

const Intro = () => {
    return (
        <IntroContainer>
            <IntroHeading>
                Hi ! I'm Ved.<br/>
                {/* <br/> */}
            </IntroHeading>
            <IntroContent>
                A <span>Software Developer</span> with an eye for design. <br/>
                I like to Create, <IntroLink>Capture</IntroLink> & <IntroLink to={`/Experiments`}>Experiment</IntroLink> with different things.
                <br/>
                <SocialMediaContainer>
                    <SocialIcon >
                        <a 
                            href="https://github.com/lucifer-ved"
                            target="_blank"
                            rel="noopener noreferrer">
                            <SiGithub id="githubIcon"/>
                        </a>
                    </SocialIcon>
                    <SocialIcon>
                        <a 
                            href="https://www.linkedin.com/in/vedantsolanki/"
                            target="_blank"
                            rel="noopener noreferrer">
                            <SiLinkedin id="linkedinIcon"/>
                        </a>
                    </SocialIcon>
                </SocialMediaContainer>
            </IntroContent>
            <Work />
            <Projects/>
            <Footer />
        </IntroContainer>
        
    )
}

export default Intro;
