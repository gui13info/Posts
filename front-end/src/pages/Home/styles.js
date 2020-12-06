import styled from 'styled-components';

export const ContainerHome = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 80vh;

    article{
        width: 30rem;
        padding: 2rem;

        background-color: #4bb3bc;
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
        
    }//article
`; 