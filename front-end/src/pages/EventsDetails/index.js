import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import { ContainerEvents } from './styles';
import api from '../../services/api';

import { AiOutlineArrowLeft } from 'react-icons/ai';
import { MdEdit, MdDelete } from 'react-icons/md';

function EventsDetails(){
    const [product, setProduct] = useState([]);

    const { id } = useParams();
    
    useEffect(() => {

        api.get(`/products/${id}`).then((res) => {

            const docs = res.data;

            setProduct(docs);
            console.log(docs);
        });

    }, []);

    return(
        <ContainerEvents>
            <Link to='/show-events'> <AiOutlineArrowLeft className='icon' /> Voltar </Link>

            <div className="InfoEvents">
                <h1> {product.titulo} </h1>
                <h2><strong>Descrição:</strong> {product.descricao} </h2>

                <div className="contato">
                    <p><strong>Email:</strong> {product.email}</p>
                    <p><strong>Telefone:</strong> {product.telefone}</p>
                </div>

                <div className="data-hora">
                    <p><strong>Data:</strong> {product.data}</p>
                    <p><strong>Hora:</strong> {product.hora}</p>
                </div>

                <p><strong>Local:</strong> {product.local}</p>
                <p><strong>Endreco:</strong> {product.endereco}</p>
            
                <div className="acitions">
                    <i className='edit'> <MdEdit /> </i>
                    <i className='delete'> <MdDelete /> </i>
                </div>
            </div>
        </ContainerEvents>
    );
}

export default EventsDetails;