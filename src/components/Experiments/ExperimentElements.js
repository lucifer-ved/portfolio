import styled from 'styled-components';

export const ExperimentContainer = styled.div`
    display:flex;
    flex-direction:column;
    height:100vh;

    
`;

export const QuotesContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    min-height:90vh;
    max-height:100vh;
    padding:5rem;

    @media screen and (max-width: 769px){
        padding:3rem;
        margin:auto;
        justify-content:center;
        text-align:center;
        align-items:center;
    }
`;

export const Quote = styled.h1`
    display:flex;
    justify-content:center;
    align-items:center;
    text-align:center;
    font-size:3rem;
    font-weight:400;
    flex-direction:column;

    opacity:1;
    animation: fade ease-in-out 6s;
    animation-fill-mode: forward;
    animation-play-state: running;
    animation-iteration-count: infinite;

    @keyframes fade {
        0% { opacity: 1 }
       20% { opacity: 0.8 } 
       40% { opacity: 0.6 }
       60% { opacity: 0.4 }
       80% { opacity: 0.2 }
       100% { opacity: 0 }
    }

    &:hover{
        animation-play-state: paused;
        text-shadow: 0px 10px 2px #C0C0C0;
    }

    @media screen and (max-width: 769px){
        font-size:2rem;
    }
`;

export const Author = styled.h3`
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:1.5rem;
    margin-top:0.3rem;
    font-weight:400;

    @media screen and (max-width: 769px){
        font-size:1rem;
    }
`;


export const DiffExperiments= styled.div`
    display:flex:
    flex:1;
    justify-content:center;
    align-items:center;
    text-align:center;

    position: relative;
    width: 400px;
    margin: 40px auto;
  
    height: auto;
    overflow: hidden;
    padding: 20px;
    background: $main-color;
    box-shadow: 0 3px 5px rgba(0,0,0,0.05);
`;

export const ExperimentsContainer= styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    flex-grow:1;
    min-height:40%;
`;