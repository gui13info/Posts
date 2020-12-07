import styled from 'styled-components';

export const ContainerDesktop = styled.div`    
        display: none;

    /* SMALL DEVICES - SMARTPHONE */

    @media(min-width: 600px){
            display: none;
    }

    /* SMALL DEVICES - TABLETS */

    @media(min-width: 768px){
        display: flex;
        align-items: center;
        justify-content: center;

        .menu{
                display: flex;
                align-items: center;
                justify-content: center;
                
                ul{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: row;
                }
            }
        
    }

    /* MEDIUM DEVICES - TABLETS & DESKTOPS */

    @media(min-width: 992px){
        display: flex;
        align-items: center;
        justify-content: center;

        .menu{
                display: flex;
                align-items: center;
                justify-content: center;
                
                ul{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: row;
                }
            }
    }

    /* LARGE DEVICES - WIDE SCREENS */

    @media(min-width: 1200px){
        display: flex;
        align-items: center;
        justify-content: center;

            .menu{
                display: flex;
                align-items: center;
                justify-content: center;
                
                ul{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: row;
                }
            }           
        
    }
`;