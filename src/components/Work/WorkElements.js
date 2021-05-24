import styled from 'styled-components';

export const WorkContainer  = styled.div`
    background:transparent;
    width:100%;
`;

export const WorkGrid = styled.div`
    margin-top:10rem;
    display:flex;
    height:100vh;
    justify-content: space-between;
    align-items:stretch;
    flex-direction:row;
    
    #girdItem1{
        background-color:#3ac;
        flex:1;
        transition: all 1.3s;
    }

    #girdItem2{
        background-color:#ffc738;
        flex:1;
        transition: all 1.3s 0.5s;
    }

    #girdItem3{
        background-color:#000;
        flex:1;
        transition: all 1.3s 1s;
    }

    @media screen and (max-width: 769px){
        flex-direction:column;
        height:200vh;
    }

`;

export const WorkGridItem = styled.div`
    display:flex;
    justify-content:center;
    padding: .5rem;

    animation-duration: 1.5s;
    animation-name: zoomOut;

    @keyframes zoomOut{
        from {
            opacity: 0;
            transform: scale(0.8);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }
    
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

    &:hover{
        
    }
`;