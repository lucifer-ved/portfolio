import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ProjectDetailContainer =  styled.div`
    display:flex;
    // margin:5rem 3rem 0 3rem;
    flex-direction:column;
    width:70vw;
    text-align:center;
    justify-content:center;
    margin:4rem auto;

    @media screen and (max-width: 769px){
        
    }

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
`;

export const ProjectName = styled.h1`
    font-size:3.5rem;
    font-weight:700;
    display:flex;
    justify-content:center;

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

export const ProjectDescription= styled.div`
    font-size:1rem;
    font-weight:700;
    display:flex;
    justify-content:center;
    margin-top:1rem;

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

export const ProjectImage= styled.img`
    display: flex;
    align-items: center;
    justify-content: center;
    
    width: 70%;
    max-width: 100%; 
    height: auto; 
    margin:3rem auto; 

    @media screen and (max-width: 769px){
        width:100%;
        margin-top:4rem;
    }
`;

export const Hr = styled.hr`
    border: none;
    color: #bbb;
    width:15%;
    background-color: #bbb;
    height: 1px;
    margin:3rem auto;
`;

export const ProjectUrl = styled.a`
    display:flex;
    font-size:0.8rem;
    flex-direction:row;
    justify-content:center;
    text-align:center;
    text-decoration:none;
    line-height:1.2;
    margin:auto 10%;
`;

export const TheChallenges= styled.div`
    display:flex;
    font-size:1.2rem;
    flex-direction:column;
    text-align:left;
    line-height:1.2;
    margin:auto 10%;
`;

export const TheWhy= styled.div`
    display:flex;
    font-size:1.2rem;
    flex-direction:column;
    text-align:left;
    line-height:1.2;
    margin:auto 10%;
`;

export const WhatsNext= styled.div`
    display:flex;
    font-size:1.2rem;
    flex-direction:column;
    text-align:left;
    line-height:1.2;
    margin:auto 10%;
`;

export const Tech = styled.div`
    display:flex;
    font-size:1.2rem;
    flex-direction:row;
    line-height:1.2;
    margin:auto 10%;
    justify-content:center;
    
    a{
        text-decoration:none;
        background-color:#ffc738;
        border-radius:0.8rem;
        padding:0.8rem;
        color:#000;
        margin:1rem;
        text-align:center;

        &:hover{
            cursor:pointer;
        }
    }

    @media screen and (max-width: 600px){
        flex-direction:column;
    }
`;

export const SectionHeading = styled.h2`
    display:flex;
    justify-content:center;
    margin-top: 3rem;
    margin-bottom: 3rem;
    font-size:2.5rem;
    font-weight:700;
`;

export const ProjectLinkContainer = styled.div`
    display:flex;
    flex-direction:row;
    margin:5rem;

    .isActive{
        color:#000;
    }

    @media screen and (max-width: 1100px){
        flex-direction:column;
    }
`;

export const ProjectLink = styled(Link)`
    flex:1;
    font-size:1.2rem;
    justify-content:center;
    text-align:center;
    cursor:pointer;
    color:#C0C0C0;
    text-decoration:none;

    @media screen and (max-width: 1100px){
        margin:1rem;
    }
`;