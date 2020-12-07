import styled from 'styled-components';

export const ContainerHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    header{
        display: flex;
        align-items: center;
        justify-content: space-between;

        width: 100vw;
        padding: 1.5rem 2rem;

        background-color: var(--color-primary);

        color: var(--color-white);
        font-weight: bold;
        font-size: 1.2rem;
        text-transform: uppercase;

        p{
            i{
                font-size: 2.5rem;
                cursor: pointer;
                transition: 0.2s;

                :hover{
                    opacity: 0.6;
                }
            }

        } //p

    } //header

    /* SMALL DEVICES - SMARTPHONE */

    @media(min-width: 600px){
        header{
            font-size: 1.3rem;
        }
    }

    /* SMALL DEVICES - TABLETS */

    @media(min-width: 768px){
        header{
            font-size: 1.5rem;

            p{
                display: none;
            }
        }
    }

    /* MEDIUM DEVICES - TABLETS & DESKTOPS */

    @media(min-width: 992px){
        header{
            font-size: 1.6rem;

            p{
                display: none;
            }
        }
    }

    /* LARGE DEVICES - WIDE SCREENS */

    @media(min-width: 1200px){
        header{
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 1.8rem;

            p{
                display: none;
            }
        }
    }
`;