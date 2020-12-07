import styled from 'styled-components';

export const ContainerEvents = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    margin: 2rem auto 0;
    padding: 0 2rem;

    article{
        width: 30rem;

        background: #196EAB;

        border: 1px solid #196EAB;
        box-shadow: 0.2rem 0.2rem 0.4rem 0 rgba(0, 0, 0, 0.2), 
                    0.4rem 0.4rem 0.8rem 0 rgba(0, 0, 0, 0.2);

        border-radius: 0.5rem;
        padding: 2rem;
        margin-bottom: 2rem;
        color: #E5E5EA;
        
        strong{
            font-weight: bold;
            font-size: 2rem;
        }

        .data-hora{
            display: flex;
            align-items: center;
            flex-direction: row;

            margin-top: 2rem;

            p{
                font-size: 1.3rem;

                :first-child{
                    margin-right: 1rem;
                }
            } //p
        } //data-hora

        a{
            display: flex;
            justify-content: center;
            align-items: center;

            height: 4rem;

            border-radius: 0.5rem;
            border: 2px solid #F3570F;
            background: none;
            
            margin-top: 1.3rem;
            
            font-size: 1.5rem;
            font-weight: bold;
            color: #F3570F;
            transition: all 0.2s;

            :hover{
                background: #F3570F;
                color: #E5E5EA;
            }
        } //a
    }
    
    /* SMALL DEVICES - SMARTPHONE */

    @media(min-width: 600px){
        article{
            width: 35rem;
            height: 18rem;
            padding: 2rem 1.8rem;

            .data-hora{
                display: flex;
                align-items: center;
                flex-direction: row;

                margin-top: 2.5rem;

                p{
                    font-size: 1.3rem;

                    :first-child{
                        margin-right: 1rem;
                    }
                } //p
            } //data-hora

            a{
                margin-top: 1.8rem;
            }
        }
    }

    /* SMALL DEVICES - TABLETS */

    @media(min-width: 768px){
        article{
            width: 35rem;
            height: 18.5rem;

            strong{
                font-size: 2.2rem;
            }

            .data-hora{

                p{
                    font-size: 1.5rem;

                    :first-child{
                        margin-right: 1rem;
                    }
                } //p
            } //data-hora

            a{
                margin-top: 2rem;
            }
        }
    }

    /* MEDIUM DEVICES - TABLETS & DESKTOPS */

    @media(min-width: 992px){
        article{
            width: 38rem;
            height: 20rem;
            padding: 2rem;

            strong{
                font-size: 2.4rem;
            }

            .data-hora{

                margin-top: 2.8rem;

                p{
                    font-size: 1.6rem;

                    :first-child{
                        margin-right: 1rem;
                    }
                } //p
            } //data-hora

            a{
                font-size: 1.8rem;
                margin-top: 2.5rem;
            }
        }
    }

    /* LARGE DEVICES - WIDE SCREENS */

    @media(min-width: 1200px){
        article{
            width: 43rem;
            height: 22rem;
            padding: 2.5rem;

            strong{
                font-size: 2.5rem;
            }

            .data-hora{

                p{
                    font-size: 1.6rem;

                    :first-child{
                        margin-right: 1rem;
                    }
                } //p
            } //data-hora

            a{
                margin-top: 3rem;
            }
        }
    }
`;