import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const WorkDetailContainer= styled.div`
    display:flex;
    margin:5rem 3rem 0 3rem;
    flex-direction:column;
    // height:100vh;

    @media screen and (max-width: 769px){
        margin:5rem 3rem 0 3rem;
    }
`;

export const WorkName= styled.div`
    font-size:3.5rem;
    font-weight:700;
    display:flex;
    justify-content:center;

`;

export const WorkImage= styled.img`
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

export const WorkBasicDetails= styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    margin-right:3rem;
    margin-bottom:2rem;

    @media screen and (max-width: 769px){
        flex-direction:column;
        margin-right:0;
        &>div{
            margin-top:2rem;
        }
    }
`;

export const CompanyName= styled.div`
    display:flex;
    flex-direction:column;
    flex:1;
`;

export const TimePeriod= styled.div`
    display:flex;
    flex-direction:column;
    flex:1;
`;

export const Role= styled.div`
    display:flex;
    flex-direction:column;
    flex:1;
`;

export const Website = styled.div`
    display:flex;
    flex-direction:column;
    flex:1;
`;

export const DetailsHeading = styled.div`
    display:flex;
    justify-content:center;
    font-size:1rem;
    font-weight:900;
`;


export const DetailsValue = styled.div`
    display:flex;
    justify-content:center;
    font-size:1.2rem;
    margin-top:0.2rem;
`;

export const WebsiteValue = styled(Link)`
    display:flex;
    justify-content:center;
    font-size:1.2rem;
    margin-top:0.2rem;
`;

export const ThingsWorkedOn= styled.div`
    display:flex;
    justify-content:center;
`;

export const Challenges= styled.div`
    display:flex;
    justify-content:center;
`;

export const SectionHeading = styled.h2`
    display:flex;
    justify-content:center;
    margin-top: 3rem;
    margin-bottom: 3rem;
    font-size:2.5rem;
    font-weight:700;
`;

export const Hr = styled.hr`
    border: none;
    color: #bbb;
    width:15%;
    background-color: #bbb;
    height: 1px;
    margin:3rem auto;
`;

export const WorkLinkContainer = styled.div`
    display:flex;
    flex-direction:row;
    margin:5rem;
`;

export const WorkLink = styled.div`
    flex:1;
    font-size:1.2rem;
    justify-content:center;
    text-align:center;
    cursor:pointer;
    color:#C0C0C0;
`;