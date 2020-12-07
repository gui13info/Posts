import React from 'react';
import { Link } from 'react-router-dom';

import { ContainerDesktop } from './styles';

import { AiOutlineHome } from 'react-icons/ai';
import { BsCardChecklist } from 'react-icons/bs';
import { VscNewFolder } from 'react-icons/vsc';

function MenuDesktop(){
    return(
        <ContainerDesktop>
            <nav className="menu">
                    <ul>
                        <li> <Link to="/"> <AiOutlineHome className="icon"/> Home</Link> </li>
                        <li> <Link to="/show-events"> <BsCardChecklist className="icon"/> Ver Eventos</Link> </li>
                        <li> <Link to="/new-event"> <VscNewFolder className="icon"/> Novo Evento</Link> </li>
                    </ul>
                </nav>
        </ContainerDesktop>
    );
}

export default MenuDesktop;