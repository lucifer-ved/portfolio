import React from 'react';
import { IntroHeading, IntroContent, IntroContainer, IntroLink, SocialMediaContainer, SocialIcon } from './IntroElements';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import Work from '../Work';
import Projects from '../Projects';
import Footer from '../Footer';

const Intro = () => {
    // there must be some better way to do this !
    // every time any new project is added
    // localStorage.clear();

    return (
        <IntroContainer>
            <IntroHeading>
                Hi ! I'm Ved.<br />
                {/* <br/> */}
            </IntroHeading>
            <IntroContent>
                A <span>Tech Enthusiast</span> fueled by curiosity and innovation. <br />
                Passionate about Creating, <a className="captureClass" href='http://photographsbyved.netlify.app/' target="_blank" rel="noopener noreferrer">Capturing</a> & <IntroLink to={`/experiments`}>Experimenting</IntroLink> to bring ideas to life.
                <br />
                <SocialMediaContainer>
                    <SocialIcon >
                        <a
                            href="https://github.com/lucifer-ved"
                            target="_blank"
                            rel="noopener noreferrer">
                            <SiGithub id="githubIcon" />
                        </a>
                    </SocialIcon>
                    <SocialIcon>
                        <a
                            href="https://www.linkedin.com/in/vedantsolanki/"
                            target="_blank"
                            rel="noopener noreferrer">
                            <SiLinkedin id="linkedinIcon" />
                        </a>
                    </SocialIcon>
                </SocialMediaContainer>
            </IntroContent>
            <Work />
            <Projects />
            <Footer />
        </IntroContainer>

    )
}

export default Intro;
