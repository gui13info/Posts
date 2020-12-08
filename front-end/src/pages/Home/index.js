import React from 'react';

import { ContainerHome } from './styles';

function Home(){
    return(
        <ContainerHome>
            <article>
                <h1>Bem-Vindo!</h1>
                <p>Sistema de Divugação de Eventos</p>

                <footer><p>Desenvolvedor @ <a href="https://github.com/gui13info" target='_blank' rel='noreferrer'>Guilherme Marques</a></p></footer>
            </article>
        </ContainerHome>
    );
}

export default Home;