import React, { useState, useEffect } from 'react';

import { ContainerEvents } from './styles';

import api from '../../services/api';

function ShowEvents(){
    const [products, setProducts] = useState([]);

    useEffect(() => {
        api.get('/products').then((res) => {

            const docs = res.data

            setProducts(docs);
            console.log(docs);
        });

    }, []);

    return(
        <ContainerEvents>
            Eventos
        </ContainerEvents>
    );
}

export default ShowEvents;