import styled from 'styled-components';

export const ContainerHome = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 80vh;

    article{
        width: 30rem;
        height: 15rem;
        padding: 2rem;

        background-color: #196EAB;
        box-shadow: 0.2rem 0.2rem 0.4rem 0 rgba(0, 0, 0, 0.2), 
                    0.4rem 0.4rem 0.8rem 0 rgba(0, 0, 0, 0.2); 
        border: 1px solid #1C93AD;
        border-radius: 0.5rem;
        color: var(--color-white);

        h1{
            font-size: 2rem;
            font-weight: bold;
            margin-bottom: 1.5rem;
        }

        p{
            font-size: 1.3rem;
            font-weight: 500;
        }

        footer{
            margin-top: 2.5rem;
            
            p{
                font-size: 1.2rem;
                font-weight: 500;

                a{
                    color: var(--color-white);
                }
            }
        }
        
    }//article

    /* SMALL DEVICES - SMARTPHONE */

    @media(min-width: 600px){
        article{
            width: 36rem;
            height: 18rem;
            padding: 3rem;

            h1{
                font-size: 2.3rem;
                margin-bottom: 1.8rem;
            }

            p{
                font-size: 1.3rem;
                font-weight: 500;
            }

            footer{
                margin-top: 2.8rem;
                
                p{
                    font-size: 1.3rem;
                    font-weight: 500;
                }
            }
        
        }//article
    }

    /* SMALL DEVICES - TABLETS */

    @media(min-width: 768px){
        article{
            height: 20rem;

            h1{
                margin-bottom: 2.3rem;
            }

            footer{
                margin-top: 3rem;
            }
        }
    }

    /* MEDIUM DEVICES - TABLETS & DESKTOPS */

    @media(min-width: 992px){
        article{
            height: 20rem;
        }
    }

    /* LARGE DEVICES - WIDE SCREENS */

    @media(min-width: 1200px){

        article{
            width: 40rem;
            height: 20rem;
            padding: 3rem;
        }
    }
`; 