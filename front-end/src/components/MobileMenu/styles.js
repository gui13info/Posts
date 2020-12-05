import styled from 'styled-components';

export const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .menu{
        background-color: #0E0A14ff;
        border-radius: 0 0 6rem 6rem;
        box-shadow: 0.2rem 0.2rem 0.4rem 0 rgba(0, 0, 0, 0.2), 
                    0.4rem 0.4rem 0.8rem 0 rgba(0, 0, 0, 0.2); 

        /* height: 30vh; */
        width: 100vw;

        position: fixed;
        z-index: 1;
        left: 0;
        top: 0;


        transition: 400ms;

        .btn-close{
            font-size: 2.5rem;
            
            color: #ffffff;
            float: right;
            cursor: pointer;
            margin: 2% 3% 0 0;
        }

        ul{
            width: 100%;
            float: left;
            text-align: center;
        }

        li{
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 1.5%;
            

            a{            
                display: flex;
                align-items: center;
                justify-content: center;

                font-size: 2rem;
                color: #fff;
                padding: 1.5% 3%;

                :hover{
                    border: 1px solid #F3570F;
                }

                .icon{
                    margin: 0 0.8rem 0 0;
                }
            }
        }

    }

    
`;