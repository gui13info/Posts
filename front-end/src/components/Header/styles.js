import styled from 'styled-components';

export const ContainerHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    header{
        display: flex;
        align-items: center;
        justify-content: center;

        width: 100vw;
        padding: 1.5rem 2rem;

        background-color: var(--color-primary);

        color: var(--color-white);
        font-weight: bold;
        font-size: 1.8rem;
        text-transform: uppercase;

        p{
            display: flex;
            justify-content: space-between;
            width: 100%;

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
`;