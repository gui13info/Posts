import styled from 'styled-components';

export const ContainerEvent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    margin: 2rem auto 0;
    padding: 0 20px;

    section{
        width: 32rem;
        background-color: #196EAB;
        color: #E5E5EA;
        margin-bottom: 2rem;
        border-radius: 3rem;
        box-shadow: 0.2rem 0.2rem 0.4rem 0 rgba(0, 0, 0, 0.2), 
                    0.4rem 0.4rem 0.8rem 0 rgba(0, 0, 0, 0.2);

        
        form{
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;

            fieldset{
                display: flex;
                flex-direction: column;
                width: 90%;
                padding: 1rem;
                border: 0;
                
                legend{
                    font-size: 2.5rem;
                    letter-spacing: 0.05rem;
                    font-weight: bold;
                    text-align: center;
                    padding-top: 3rem;
                } //legend

                .form-only-item{
                    display: flex;
                    flex-direction: column;
                    padding: 1rem 1rem;
                    width: 100%;
                } //form-only-item

                .form-row-items{
                    display: flex;
                    flex-direction: column;
                    padding: 0 1rem 1rem;
                    justify-content: space-between;
                    align-items: center;
                    width: 100%;

                    .form-item{
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                        margin-bottom: 1rem;
                    } //form-item

                } //form-row-items

                label {
                    font-size: 1.6rem;
                    margin-bottom: 0.5rem;
                } // label

                input{
                    margin-top: 1rem;
                    width: 100%;
                    padding-left: 1rem;
                    height: 3.5rem;
                    border: none;
                    border-radius: 1.5rem;
                    outline: none;
                    &[type=text]:focus,
                    &[type=email]:focus{
                        border: 0.1rem solid var(--color-bg-stronger);
                        box-shadow: 0.2rem 0.2rem 0.4rem 0 rgba(0, 0, 0, 0.2), 
                                    0.4rem 0.4rem 0.8rem 0 rgba(0, 0, 0, 0.2);
                    }
                    &::placeholder {
                        font-family: 'Roboto', sans-serif;
                        font-size: 1.4rem;
                        letter-spacing: 0.1rem;
                        font-style: italic;
                        font-weight: lighter;
                        padding: 0.5rem 1rem;
                        color: var(--color-text-input);
                    }
                } //input

                textarea {
                    font-family: 'Roboto', sans-serif;
                    margin-top: 1rem;
                    padding: 2rem 1.5rem;
                    height: 8rem;
                    overflow: auto;
                    border: none;
                    border-radius: 1.5rem;
                    outline: none;
                    &:focus{
                        border: 0.1rem solid var(--color-bg-stronger);
                        box-shadow: 0.2rem 0.2rem 0.4rem 0 rgba(0, 0, 0, 0.2), 
                                    0.4rem 0.4rem 0.8rem 0 rgba(0, 0, 0, 0.2);
                    }
                    &::placeholder {
                        /* text-align: center; */
                        font-family: 'Roboto', sans-serif;
                        font-size: 1.4rem;
                        letter-spacing: 0.1rem;
                        font-style: italic;
                        font-weight: lighter;
                        /* padding: 0 1rem; */
                        color: var(--color-text-input);
                    }

                } //textarea

                select {
                    margin-top: 1rem;
                    height: 3.5rem;
                    border: none;
                    border-radius: 1.5rem;
                    outline: none;
                } //select

            } //fieldset

            .buttons{
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                padding: 2rem;

                button{
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    width: 10rem;
                    height: 3rem;
                    border-radius: 2rem;
                    font-size: 1.5rem;
                    text-transform: uppercase;
                    cursor: pointer;
                    transition: all 0.2s;
                }

                .limpar{
                    background: none;
                    border: 1px solid #CF1B1B;
                    color: #E5E5EA;
                    margin-bottom: 1rem;

                    :hover{
                        background-color: #CF1B1B;
                        color: #E5E5EA;
                    }                   
                }

                .criar{
                    background-color: #04D361;
                    border: 1px solid #04D361;
                    color: #E5E5EA;

                    :hover{
                        opacity: 0.7;
                    }
                }
            }

        } //form

    } //section
`;