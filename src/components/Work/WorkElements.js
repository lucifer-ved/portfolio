import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const WorkContainer = styled.div`
    background:transparent;
    width:100%;
`;

export const WorkGrid = styled.div`
    margin-top:10rem;
    // display:flex;
    height:100vh;
    justify-content: space-between;
    align-items:stretch;
    flex-direction:row;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.5rem;


    #girdItem1{
        background-color:#fcbd32;
        flex:1;
        opacity:1;
        

        &:hover{
            #girdItemName1{
                // display:none;
                transform:scale(3);
                transition: all 0.5s ease-in 0.1s;
                opacity:0;
                
            }
            #gridItemContainer1{
                visibility:visible;
                transform:scale(1.5);
                transition: all 0.5s ease-in 0.1s;
                opacity:1;
            }

        }
    }


    #girdItem2{
        background-color:#e65b1c;
        flex:1;
        opacity:1;
        

        &:hover{
            #girdItemName2{
                // display:none;
                transform:scale(3);
                transition: all 0.5s ease-in 0.1s;
                opacity:0;
                
            }
            #gridItemContainer2{
                visibility:visible;
                transform:scale(1.5);
                transition: all 0.5s ease-in 0.1s;
                opacity:1;
            }

        }
    }
    
    
    #girdItem3{
        background-color:#1d1e1c;
        flex:1;
        opacity:1;
        

        &:hover{
            #girdItemName3{
                // display:none;
                transform:scale(3);
                transition: all 0.5s ease-in 0.1s;
                opacity:0;
                
            }
            #gridItemContainer3{
                visibility:visible;
                transform:scale(1.5);
                transition: all 0.5s ease-in 0.1s;
                opacity:1;
            }

        }
    }

    #girdItem4{
        background-color:#565fa4;
        flex:1;
        opacity:1;
        transform:scale(1);

        &:hover{
            #girdItemName4{
                // display:none;
                transform:scale(5);
                transition: all 0.5s ease-in 0.1s;
                opacity:0;
                
            }
            #gridItemContainer4{
                visibility:visible;
                transform:scale(1.5);
                transition: all 0.5s ease-in 0.1s;
                opacity:1;
            }

        }
    }

    #girdItem5{
        background-color:#739629;
        flex:1;
        opacity:1;

        &:hover{
            #girdItemName5{
                transform:scale(5);
                transition: all 0.5s ease-in 0.1s;
                opacity:0;

            }
            #gridItemContainer5{
                visibility:visible;
                transform:scale(1.5);
                transition: all 0.5s ease-in 0.1s;
                opacity:1;
            }

        }
    }

    #girdItem6{
        background-color:#1b5678;
        flex:1;
        opacity:1;
        transform:scale(1);

        &:hover{
            #girdItemName6{
                // display:none;
                transform:scale(5);
                transition: all 0.5s ease-in 0.1s;
                opacity:0;
                
            }
            #gridItemContainer6{
                visibility:visible;
                transform:scale(1.5);
                transition: all 0.5s ease-in 0.1s;
                opacity:1;
            }

        }
    }

    #gridItemContainer1,#gridItemContainer2,#gridItemContainer3,#gridItemContainer4,#gridItemContainer5,#gridItemContainer6{
        visibility:hidden;
        opacity:0;
        transform:scale(0.5);
        // display:none;
    }

    // @media screen and (max-width: 769px){
    //     flex-direction:column;
    //     height:200vh;
    // }

    @media screen and (max-width: 769px) {
    height: auto;
    grid-template-columns: 1fr; /* One column on mobile */
    grid-template-rows: 1fr; /* Ensures square aspect ratio */
    gap: 1rem;
    
    /* Make the items themselves square */
    #girdItem1, #girdItem2, #girdItem3, #girdItem4, #girdItem5, #girdItem6 {
        aspect-ratio: 1 / 1; /* This ensures the width and height are equal */
        width: 100%; /* Make the item take full width of the grid */
    }
}

`;

export const WorkGridItem = styled(Link)`
    display:flex;
    justify-content:center;
    padding: .5rem;
    text-decoration:none;
    flex-direction:column;
    justify-content:center;
    text-align:center;
    align-items:center;


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
`;

export const WorkGistContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin-top:-3rem;
    
`;


export const WorkTimeSpan = styled.div`
    color : #fff;
    font-size:1.5rem;
    display:flex;
    justify-content:center;
    align-items:center;
    text-decoration:none;
    cursor:pointer;
    font-weight:700;
`;

export const WorkFullName = styled.div`
    color : #fff;
    font-size:2rem;
    display:flex;
    justify-content:center;
    align-items:center;
    text-decoration:none;
    cursor:pointer;
    font-weight:700;
`;