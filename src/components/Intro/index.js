import React from 'react';
import { IntroHeading, IntroContent, IntroContainer, IntroLink, SocialMediaContainer, SocialIcon} from './IntroElements';
import { SiGithub, SiLinkedin} from 'react-icons/si'
const Intro = () => {
    return (
        <IntroContainer>
            <IntroHeading>
                Hi ! I'm Ved.<br/>
            </IntroHeading>
            <IntroContent>
                A <span>Software Developer</span> with an eye for design. <br/>
                I love to Create, <IntroLink>Capture</IntroLink> & <IntroLink>Experiment</IntroLink> with different things.
                <br/>
                <SocialMediaContainer>
                    <SocialIcon >
                        <SiGithub id="githubIcon"/>
                    </SocialIcon>
                    <SocialIcon >
                        <SiLinkedin id="linkedinIcon"/>
                    </SocialIcon>
                </SocialMediaContainer>
            </IntroContent>
        </IntroContainer>
    )
}

export default Intro;
