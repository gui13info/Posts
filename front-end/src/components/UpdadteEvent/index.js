import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';

import { ContainerEvent } from './styles';

function UpdateEvent(props){
    const [titulo, setTitulo] = useState(props.titulo);
    const [descricao, setDescricao] = useState(props.descricao);
    const [email, setEmail] = useState(props.email);
    const [telefone, setTelefone] = useState(props.telefone);
    const [data, setData] = useState(props.data);
    const [hora, setHora] = useState(props.hora);
    const [local, setLocal] = useState(props.local);
    const [endereco, setEndereco] = useState(props.endereco);
    const [modalidade, setModalidade] = useState([]);

    const id = props.id;
    const history = useHistory();

    useEffect(() => {
        api.get('/local').then(res => {
            setModalidade(res.data);
        });

    }, [])

    function handleUpdate(event){
        event.preventDefault();

        api.put(`/products/${id}`, {
            titulo: titulo,
            descricao: descricao,
            email: email,
            telefone: telefone,
            data: data,
            hora: hora,
            local: local,
            endereco: endereco
        }).then(() => {
            alert('Evento atualizado com sucesso!')

            history.push('/show-events');
        }).catch(() => {
            alert('Erro na atualização!');
        });
    }

    return(
        <ContainerEvent>

            <section>
                <form onSubmit={handleUpdate}>
                    <fieldset>
                        <legend>Dados do Evento</legend>

                        <div className="form-only-item">
                            <label htmlFor="titulo">Título:</label>
                            <input 
                                type="text"
                                id='titulo'
                                name='titulo'
                                placeholder='Título do evento'
                                value={titulo}
                                onChange={({ target }) => setTitulo(target.value)}
                                required
                            />
                        </div>

                        <div className="form-only-item">
                            <label htmlFor="descricao">Descrição:</label>
                            <textarea 
                                type="text" 
                                id="descricao"
                                name="descricao" 
                                placeholder='Digite uma descrição'
                                value={descricao}
                                onChange={({ target }) => setDescricao(target.value)}
                                required
                            >        
                            </textarea>
                        </div>

                        <div className="form-row-items">
                            <div className="form-item">
                                <label htmlFor="email">Email:</label>
                                <input 
                                    type="email" 
                                    id="email"
                                    name="email"
                                    placeholder='Digite seu Email'
                                    value={email}
                                    onChange={({ target }) => setEmail(target.value)}
                                    required 
                                />
                            </div>
                            <div className="form-item">
                                <label htmlFor="tel">Telefone:</label>
                                <input 
                                    type="tel" 
                                    id="tel"
                                    name="tel"
                                    placeholder='Digite seu Telefone'
                                    value={telefone}
                                    onChange={({ target }) => setTelefone(target.value)}
                                    required 
                                />
                            </div>
                        </div>

                        <div className="form-row-items">
                            <div className="form-item">
                                <label htmlFor="data">Data:</label>
                                <input 
                                    type="date" 
                                    id="data"
                                    name="data"
                                    value={data}
                                    onChange={({ target }) => setData(target.value)}
                                    required 
                                />
                            </div>

                            <div className="form-item">
                                <label htmlFor="hora">Hora:</label>
                                <input 
                                    type="time" 
                                    id="hora"
                                    name="hora"
                                    value={hora}
                                    onChange={({ target }) => setHora(target.value)}
                                    required 
                                />
                            </div>
                        </div>

                        <div className="form-row-items">
                            <div className="form-item">
                                <label htmlFor="local">Local:</label>
                                <select 
                                    id="local"
                                    name="local"
                                    value={local}
                                    onChange={({ target }) => setLocal(target.value)} 
                                    required
                                >
                                    <option value='' disabled>Selecione</option>
                                    {modalidade.map(item => (
                                        <option key={item.id} value={item.nome}>{item.nome}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="form-item">
                                <label htmlFor="adress">Endereço:</label>
                                <input 
                                    type="adress" 
                                    id="adress"
                                    name="adress"
                                    placeholder='Digite seu Endereço'
                                    value={endereco}
                                    onChange={({ target }) => setEndereco(target.value)}
                                    required 
                                />
                            </div>
                        </div>

                    </fieldset>
                    

                    <div className="buttons">
                        <button type='submit' className='limpar' onClick={props.BtnVoltar}>Voltar</button>
                        <button type='submit' className='criar'>Atualizar</button>
                    </div>
                </form>
            </section>
        </ContainerEvent>
    );
}

export default UpdateEvent;