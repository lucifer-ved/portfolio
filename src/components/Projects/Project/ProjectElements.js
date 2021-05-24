import styled from 'styled-components';


export const ProjectContainer = styled.div`
    margin-top:2.5%;
    width:100%;
    padding:2rem;
    display:flex;
    flex-direction:row;

    &:nth-of-type(even){
        flex-direction:row-reverse;
    }

    @media screen and (max-width: 769px){
        width:90%;
        flex-direction:column;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        margin:1.5rem;

        &:nth-of-type(even){
            flex-direction:column;
        }
    }
`;


export const ProjectImage = styled.img`
    width:50%;
    height:40%;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    @media screen and (max-width: 769px){
        width:100%;
    }
`;

export const ProjectDetails = styled.div`
    padding:2rem;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    flex:1;

    @media screen and (max-width: 769px){
        width:90%;
        flex-direction:column;
    }
`;

export const ProjectTitle = styled.div`
    display:flex;
    font-size: 3rem;
    font-weight:700;
    align-items:center;
    justify-content:center;

    @media screen and (max-width: 769px){
        font-size: 1.5rem;
        align-items:center;
        text-align:center;
    }
`;

export const ProjectDescription = styled.div`
    display:flex;
    font-size: 1.2rem;
    font-weight:400;
    margin-top:2.5rem;
    flex-direction:column;
    align-items:center;

    @media screen and (max-width: 769px){
        font-size: 1rem;
        margin-top:1.5rem;
        align-items:center;
    }
`;

export const ProjectTechnologies = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    margin-top:1.5rem;
`;

export const Tech = styled.div`
    background:#3cf;
    font-size:0.8rem;
    padding:0.5rem;
    margin:0.5rem;
`;

export const SeeMoreButton = styled.button`
    margin-top:1.5rem;
    color: #333;
    background:#fff;
    cursor: pointer;
    display: flex;
    position: relative;
    border: 2px solid #F7CA18;
    width:120px;
    height:50px;
    transition: all 0.4s cubic-bezier(0.42, 0, 0.58, 1);
    0s;
    display:flex;
    text-align:center;
    justify-content:center;
    align-items:center;
    stretch:center;

    &:hover {
        color: #000 !important;
        background-color: transparent;
        text-shadow: nthree;
    }

    &:hover:before {
        left: 0%;
        right: auto;
        width: 100%;
    }

    &:before {
        display: block;
        position: absolute;
        top: 0px;
        right: 0px;
        height: 100%;
        width: 0px;
        z-index: -1;
        content: '';
        color: #000 !important;
        background: #F7CA18;
        transition: all 0.4s cubic-bezier(0.42, 0, 0.58, 1);
    0s;
    }
`;