import styled from 'styled-components';

export const ContainerEvents = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    margin: 2rem auto 0;
    padding: 0 20px;

    article{
        width: 31rem;

        background: #196EAB;

        border: 1px solid #ddd;

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
    
`;