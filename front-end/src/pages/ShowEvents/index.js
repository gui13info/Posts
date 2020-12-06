import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { ContainerEvents } from './styles';

import api from '../../services/api';

function ShowEvents(){
    const [products, setProducts] = useState([]);

    useEffect(() => {
        api.get('/products').then((res) => {

            const docs = res.data;

            setProducts(docs);
            console.log(docs);
        });

    }, []);

    return(
        <ContainerEvents>
            {products.map(product => (
                <article key={product.id}>
                    <strong>{product.titulo}</strong>

                    <div className="data-hora">
                        <p>Data: {product.data}</p>
                        <p>Hora: {product.hora}</p>
                    </div>

                    <Link to={`/events-details/${product.id}`}>Detalhes</Link>
                </article>
            ))}
        </ContainerEvents>
    );
}

export default ShowEvents;