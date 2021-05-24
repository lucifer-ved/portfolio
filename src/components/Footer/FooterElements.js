import styled from 'styled-components';

export const FooterContainer = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    font-size:1rem;
    margin : 20px;

    @media screen and (max-width: 769px){
        flex-direction:column;
    }
`;

export const FooterText = styled.div`
    
`;