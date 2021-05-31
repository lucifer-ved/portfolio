import styled from 'styled-components';
import { NavLink as Link} from 'react-router-dom';

export const Nav = styled.div`
    background:#fff;
    display:flex;
    justify-content:space-between;
    flex-direction: row;
    
    @media screen and (max-width: 600px){
        height:70px;
        width:100%;
        z-index:100;
        box-shadow: 1px 1px 4px 0 rgba(0,0,0,.1);
    }
`;

export const NavLink = styled(Link)`
    color : #333;
    font-size:0.9rem;
    display:flex;
    text-decoration:none;
    cursor:pointer;
    margin : 40px 40px 0 40px;

    a{
        text-decoration:none;
        color : #333 !important;
    }

    &:hover{
        color:black;
    }

    &:visited,&:focus{
        border:none;
    }

    @media screen and (max-width: 600px){
        // .workLink{
        //     display:none
        // }
        margin : 30px 40px 0 70px;
    }
`;

export const NavLinkAlignRight = styled.div`
    display:flex;
    justify-content:flex-end;

    @media screen and (max-width: 600px){
        // justify-content:space-between;
        justify-content:space-around;
        width:100%;
    }
`;

export const NavLogo = styled.div`
    display:block;
    background:white;
`;

export const Logo = styled.div`
    
`;


export const NavBarIcon = styled.div`

`;