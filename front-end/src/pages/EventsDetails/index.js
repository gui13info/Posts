import React, { useState, useEffect } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';

import { ContainerEvents } from './styles';
import UpdateEvent from '../../components/UpdadteEvent';
import api from '../../services/api';

import { AiOutlineArrowLeft } from 'react-icons/ai';
import { MdEdit, MdDelete } from 'react-icons/md';

function EventsDetails(){
    const [product, setProduct] = useState([]);
    const [show, setShow] = useState(false);
    const [event, setEvent] = useState(true);

    const history = useHistory();
    const { id } = useParams();
    
    useEffect(() => {

        api.get(`/products/${id}`).then((res) => {

            const docs = res.data;

            setProduct(docs);
        });

    }, []);

    function HandleDelete(){
        api.delete(`/products/${id}`, {
            id : id
        }).then(() => {
            alert('Evento deletado!');

            history.push('/show-events');
        }).catch(() => {
            alert('Erro ao deletar!');
        });
    }

    function HandleShow(){
        setShow(true);
        setEvent(false);
    }

    function HandleBack(){
        setShow(false);
        setEvent(true);
    }

    return(
        <ContainerEvents>

            {
                show && 

                <UpdateEvent 
                    titulo = { product.titulo }
                    descricao = { product.descricao }
                    email = { product.email }
                    telefone = { product.telefone }
                    data = { product.data }
                    hora = { product.hora }
                    local = { product.local }
                    endereco = { product.endereco }

                    BtnVoltar = { HandleBack }
                    id = { id }
                />
            }

            {
                event && 

                <div className="Event">
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
                        <p><strong>Endereço:</strong> {product.endereco}</p>
                    
                        <div className="acitions">
                            <i className='edit' onClick={ HandleShow }> <MdEdit /> </i>
                            <i className='delete' onClick={ HandleDelete }> <MdDelete /> </i>
                        </div>
                    </div>
                </div>
            }


            
        </ContainerEvents>
    );
}

export default EventsDetails;