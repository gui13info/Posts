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
                width: auto; 
                height: 56px; 
                line-height: 56px; 
                float: right; 
                background: none; 
                display: block !important; 
                position: static;
                
                ul{

                    li{
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 1.4rem;
                        padding: 0 1rem;
                        float: left;
                        margin-right: 0.8rem;

                        :last-child{
                            margin-right: 0;
                        }

                        :hover{
                            border: 1px solid #F3570F;
                            border-radius: 2rem;
                            cursor: pointer;
                            opacity: 0.8;
                        }

                        a{
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            color: var(--color-white);

                            .icon{
                                margin: 0 0.6rem 0 0;
                            }

                        }
                    }
                }
            }
        
    }

    /* MEDIUM DEVICES - TABLETS & DESKTOPS */

    @media(min-width: 992px){
        .menu{
            ul{
                li{
                    font-size: 1.6rem;
                }
            }
        }
        
    }

    /* LARGE DEVICES - WIDE SCREENS */

    @media(min-width: 1200px){
        .menu{
            ul{
                li{
                    font-size: 1.8rem;
                }
            }
        }
    }
`;