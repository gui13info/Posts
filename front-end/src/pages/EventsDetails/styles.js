import styled from 'styled-components';

export const ContainerEvents = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    margin: 2rem auto 0;
    padding: 0 1.5rem;

    a{
        display: flex;
        align-items: center;
        justify-content: center;

        font-size: 1.6rem;
        font-weight: bold;
        color: #ec4223;
        margin-right: auto;
        transition: all 0.2s;

        .icon{
            margin-right: 0.5rem;
        }

        :hover{
            opacity: 0.5;
        }
    }

    .InfoEvents{
        width: 30rem;
        margin: 1rem auto 1.5rem;
        padding: 1.5rem;
        background: #196EAB;
        color: #E5E5EA;
        border-radius: 5px;
        border: 1px solid #DDD;

        h1{
            font-size: 3.2rem;
            text-align: center;
        }

        h2{
            font-size: 1.6rem;
            font-weight: 500;
            line-height: 2.4rem;
            margin-top: 1.4rem;
        }

        p{
            font-weight: 400;
            font-size: 1.2rem;
            margin-top: 1.5rem;
        }

        .acitions{
            display: flex;
            flex-direction: column;

            i{
                display: flex;
                align-items: center;
                justify-content: center;

                width: 4rem;
                height: 3rem;
                border-radius: 0.5rem;
                margin-left: auto;
                font-size: 2rem;
                cursor: pointer;
                transition: all 0.2s;

                :first-child{
                    margin-bottom: 0.5rem;
                }

                :hover{
                    opacity: 0.5;
                }
            }

            .edit{
                background-color: #04D361;
                border: 1px solid #04D361;
            }

            .delete{
                background-color: #CF1B1B;
                border: 1px solid #CF1B1B;
            }
        }
    } //InfoEvents

    /* SMALL DEVICES - SMARTPHONE */

    @media(min-width: 600px){
        .InfoEvents{
            width: 34rem;

            h2{
                font-size: 1.8rem;
            }

            p{
                font-size: 1.4rem;
            }
        }
    }

    /* SMALL DEVICES - TABLETS */

    @media(min-width: 768px){
        .InfoEvents{
            width: 40rem;

            h1{
                font-size: 3.2rem;
                text-align: center;
            }

            h2{
                font-size: 1.8rem;
            }

            p{
                font-size: 1.6rem;
            }

            .contato{
                display: flex;
                align-items: center;
                justify-content: space-between;
                flex-direction: row;
            }

            .data-hora{
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: row;

                p{
                    display: flex;
                    flex-direction: column;
                    margin-right: auto;
                }
            }

            .acitions{

                i{
                    width: 4.4rem;
                    height: 3.3rem;

                    :first-child{
                        margin-bottom: 0.7rem;
                    }

                    :hover{
                        opacity: 0.5;
                    }
                }
            }
        } //InfoEvents
    }

    /* MEDIUM DEVICES - TABLETS & DESKTOPS */

    @media(min-width: 992px){
        .InfoEvents{
            width: 44rem;

            .contato{
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: row;

                p{
                    display: flex;
                    flex-direction: column;
                    margin-right: auto;
                }
            }

            .data-hora{
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: row;

                p{
                    margin-right: auto;

                    :last-child{
                        margin-left: 3.5rem;
                    }
                }
            }

            .acitions{
                align-items: center;
                justify-content: center;
                flex-direction: row-reverse;
                padding: 2rem;

                i{
                    width: 10rem;
                    height: 4rem;
                    border-radius: 6rem;
                    margin: 0;
                    font-size: 2rem;

                    :first-child{
                        margin: 0;
                    }

                    :last-child{
                        margin: 0 1rem 0 0;
                    }

                    :hover{
                        opacity: 0.5;
                    }
                }
            }
        } //InfoEvents
    }

    /* LARGE DEVICES - WIDE SCREENS */

    @media(min-width: 1200px){
        .InfoEvents{
            width: 50rem;           

            .acitions{
                align-items: center;
                justify-content: center;
                flex-direction: row-reverse;
                padding: 2rem;

                i{
                    width: 12rem;
                    height: 4rem;
                    border-radius: 6rem;
                    margin: 0;
                    font-size: 2rem;

                    :first-child{
                        margin: 0;
                    }

                    :last-child{
                        margin: 0 1rem 0 0;
                    }

                    :hover{
                        opacity: 0.5;
                    }
                }
            }
        } //InfoEvents
    }
`;