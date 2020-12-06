import styled from 'styled-components';

export const ContainerEvents = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    margin: 2rem auto 0;
    padding: 0 20px;

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
        max-width: 70rem;
        margin: 1rem auto 0;
        padding: 20px;
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
`;