import React, { useState } from 'react';

import { ContainerHeader } from './styles';

import { BiMenu } from 'react-icons/bi';
import MobileMenu from '../MobileMenu';
import MenuDesktop from '../MenuDesktop';

function Header(){
    const [show, setShow] = useState(false);
    
    function handleShow() {
        setShow(true);
    }

    function handleHide(){
        setShow(false);
    }

    return(
        <ContainerHeader>
            {
                show && <MobileMenu hide = {handleHide} />
            }

            <header>
                <h1>Softaliza</h1>

                <p>
                    <i onClick={handleShow}> <BiMenu /> </i>
                </p>

                <MenuDesktop />
            </header>
        </ContainerHeader>
    );
}

export default Header;