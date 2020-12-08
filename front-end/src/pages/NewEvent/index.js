import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';

import { ContainerEvent } from './styles';

function NewEvent(){
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [data, setData] = useState('');
    const [hora, setHora] = useState('');
    const [local, setLocal] = useState('');
    const [endereco, setEndereco] = useState('');
    const [modalidade, setModalidade] = useState([]);

    const history = useHistory();

    useEffect(() => {
        api.get('/local').then(res => {
            setModalidade(res.data);
        });

    }, [])

    function handleSubmit(event){
        event.preventDefault();

        api.post('/products', {
            titulo: titulo,
            descricao: descricao,
            email: email,
            telefone: telefone,
            data: data,
            hora: hora,
            local: local,
            endereco: endereco
        }).then(() => {
            alert('Evento cadastrado com sucesso!')

            history.push('/show-events');
        }).catch(() => {
            alert('Erro no cadastro!');
        });
    }

    function handleLimpar(){
        setTitulo('')
        setDescricao('')
        setEmail('')
        setTelefone('')
        setData('')
        setHora('')
        setLocal('')
        setEndereco('')
    }

    return(
        <ContainerEvent>

            <section>
                <form onSubmit={handleSubmit}>
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
                                    maxLength='11'
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
                        <button type='submit' className='limpar' onClick={handleLimpar}>Limpar</button>
                        <button type='submit' className='criar'>Criar</button>
                    </div>
                </form>
            </section>
        </ContainerEvent>
    );
}

export default NewEvent;