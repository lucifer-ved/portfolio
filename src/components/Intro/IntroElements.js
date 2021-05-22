import styled from 'styled-components';


export const IntroContainer = styled.div`
    background:transparent;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    height:100vh;
`;

export const IntroHeading = styled.div`
    color:#333 ;
    font-size:3rem;
    font-weight:700;
    text-align:center;
    align-items:center;

    @media screen and (max-width: 600px){
        font-size:2.5rem;
    }
`;

export const IntroContent = styled.div`
    color:#333 ;
    font-size:2.5rem;
    font-weight:700;
    margin-top:2%; 
    flex-wrap:wrap;
    max-width:70vw; 
    text-align:center;
    line-height:150%;

    @media screen and (max-width: 600px){
        font-size:2rem;
    }
`;


export const IntroLink = styled.span`
    color:#c0c0c0;
    &:hover {
        color:#000;
        cursor : pointer;
        text-shadow: 0px 10px 2px #C0C0C0;
    }
`;

export const SocialMediaContainer = styled.div`
    display:flex;
    flex-direction:row;
    justify-content: center;
`;

export const SocialIcon = styled.div`
    display:flex;
    margin-top:50px;
    color:#333;
    cursor:pointer;
    font-size:0.8em;

    #linkedinIcon{
        margin-left:20px;
    }

    @media screen and (max-width: 600px){
        margin-top:30px;
    }
`;