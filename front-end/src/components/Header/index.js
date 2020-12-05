import React, { useState } from 'react';

import { ContainerHeader } from './styles';

import { BiMenu } from 'react-icons/bi';
import MobileMenu from '../MobileMenu';

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
                <p>
                    Softaliza
                    <i onClick={handleShow}> <BiMenu /> </i>
                </p>
            </header>
        </ContainerHeader>
    );
}

export default Header;