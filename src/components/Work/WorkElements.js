import styled from 'styled-components';

export const WorkContainer  = styled.div`
    background:transparent;

    #girdItem1{
        background-color:#00aced;
        flex:1;
        display:flex;
        height:50vh;
    }
    
`;

export const WorkGrid = styled.div`
    display:flex;
    height:60vh;
    justify-content: space-between;
    align-items:stretch;
    flex-direction:row;
    

    #girdItem2{
        background-color:#ffc738;
        flex:1;
    }

    #girdItem3{
        background-color:#000;
        flex:1;
    }

    #girdItem4{
        background-color:#3ac;
        flex:1;
    }

    @media screen and (max-width: 769px){
        flex-direction:column;
        height:100vh;
    }

`;

export const WorkGridItem = styled.div`
    display:flex;
    justify-content:center;
    padding: .5rem;
`;


export const WorkLogo = styled.div`

`;

export const WorkName = styled.span`
    color : #fff;
    font-size:2.8rem;
    display:flex;
    justify-content:center;
    align-items:center;
    text-decoration:none;
    cursor:pointer;
    font-weight:700;
`;