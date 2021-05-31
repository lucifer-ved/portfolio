import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const IntroContainer = styled.div`
    background:transparent;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    margin-top : 10rem;

    animation: fadeIn 2s;
    opacity: 1;

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @media screen and (max-width: 600px){
        margin-top:4rem;
        padding:2rem;
    }
`;

export const IntroHeading = styled.div`
    color:#333 ;
    font-size:5rem;
    font-weight:700;
    text-align:center;
    align-items:center;
    
    @media screen and (max-width: 600px){
        margin-bottom:2rem;
    }

    animation-duration: 1.5s;
    animation-name: moveUp;

    @keyframes moveUp {
        from {
            opacity: 0;
            transform : translate(0em , 1em);
        }
        to {
            opacity: 1;
        }
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

    .captureClass{
        color:#c0c0c0;
        text-decoration : none;
        list-style : none;
        text-decoration:none;
        color:#c0c0c0;

        &:hover {
            color:#000;
            cursor : pointer;
            text-shadow: 0px 10px 2px #C0C0C0;
        }
    }

    @media screen and (max-width: 600px){
        font-size:2rem;
    }

    animation-duration: 1.5s;
    animation-name: moveUp;

    @keyframes moveUp {
        from {
            opacity: 0;
            transform : translate(0em , 1em);
        }
        to {
            opacity: 1;
        }
    }
`;


export const IntroLink = styled(Link)`
    color:#c0c0c0;
    text-decoration : none;
    list-style : none;

    a{
        text-decoration:none;
        color:#c0c0c0;

        &:hover {
            color:#000;
            cursor : pointer;
            text-shadow: 0px 10px 2px #C0C0C0;
        }
    }

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
    

    a{
        text-decoration:none !important;
        color:#333 !important;
    }

    #linkedinIcon{
        margin-left:20px;
    }

    @media screen and (max-width: 600px){
        margin-top:30px;
    }
`;