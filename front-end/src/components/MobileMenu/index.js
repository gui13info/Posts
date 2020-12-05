import React from 'react';
import { Link } from 'react-router-dom';

import { MenuContainer } from './styles'

import { AiOutlineClose, AiOutlineHome } from 'react-icons/ai';
import { BsCardChecklist } from 'react-icons/bs';

function MobileMenu(props){
    return(
        <MenuContainer>
            <nav className="menu">
                <i className="btn-close" onClick={props.hide} > <AiOutlineClose /> </i>

                <ul>
                    <li> <Link to="/"> <AiOutlineHome className="icon"/> Home</Link> </li>
                    <li> <Link to="/show-events"> <BsCardChecklist className="icon"/> Ver Eventos</Link> </li>
                </ul>
            </nav>
        </MenuContainer>
    );
}

export default MobileMenu;