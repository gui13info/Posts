import styled from 'styled-components';

export const ContainerMenu = styled.div`
    display: none;

    @media(min-width: 1200px){
        display: flex;
        align-items: center;
        justify-content: center;

        width: 30rem;
        height: 100vh;
        margin-top: 12.5rem;
        background-color: red; 

        .menu{
        }
    } 
`;