import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import MenuSistema from "../../MenuSistema";

export default function FormProduto() {
    const { state } = useLocation();
    const [idProduto, setIdProduto] = useState();

    const [titulo, setTitulo] = useState();
    const [codigo, setCodigo] = useState();
    const [descricao, setDescricao] = useState();
    const [valorUnit, setValorUnit] = useState();
    const [tempoEntregaMin, setTempoEntregaMin] = useState();
    const [tempoEntregaMax, setTempoEntregaMax] = useState();

    useEffect(() => {
        if (state != null && state.id != null) {
            axios.get("http://localhost:8080/api/produto/" + state.id)
                .then((response) => {
                    setIdProduto(response.data.id)
                    setTitulo(response.data.titulo)
                    setCodigo(response.data.codigo)
                    setDescricao(response.data.descricao)
                    setValorUnit(response.data.valorUnit)
                    setTempoEntregaMin(response.data.tempoEntregaMin)
                    setTempoEntregaMax(response.data.tempoEntregaMax)
                })
        }
    }, [state])


    function salvar() {

        let produtoRequest = {
            titulo: titulo,
            codigo: codigo,
            descricao: descricao,
            valorUnit: valorUnit,
            tempoEntregaMin: tempoEntregaMin,
            tempoEntregaMax: tempoEntregaMax
        }

        if (idProduto != null) { //Alteração:
            axios.put("http://localhost:8080/api/produto/" + idProduto, produtoRequest)
                .then((response) => { console.log('Produto alterado com sucesso.') })
                .catch((error) => { console.log('Erro ao alter um produto.') })
        } else { //Cadastro:
            axios.post("http://localhost:8080/api/produto", produtoRequest)
                .then((response) => { console.log('Produto cadastrado com sucesso.') })
                .catch((error) => { console.log('Erro ao incluir o produto.') })
        }
    }


    return (

        <div>

            <MenuSistema />

            <div style={{ marginTop: '3%' }}>

                <Container textAlign='justified' >

                    {idProduto === undefined &&
                        <h2> <span style={{ color: 'darkgray' }}> Produto &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro</h2>
                    }
                    {idProduto != undefined &&
                        <h2> <span style={{ color: 'darkgray' }}> Produto &nbsp;<Icon name='angle double right' size="small" /> </span> Alteração</h2>
                    }


                    <Divider />

                    <div style={{ marginTop: '4%' }}>

                        <Form>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    label='Título'
                                    width={50}
                                    maxLength="300"
                                    placeholder="Informe o título do produto"
                                    value={titulo}
                                    onChange={e => setTitulo(e.target.value)}
                                />

                                <Form.Input
                                    required
                                    width={10}
                                    fluid
                                    label='Código do produto'>
                                    <InputMask
                                        required
                                        mask=""
                                        placeholder="Informe o código do produto"
                                        value={codigo}
                                        onChange={e => setCodigo(e.target.value)}
                                    />
                                </Form.Input>

                            </Form.Group>

                            <Form.Group>

                                <Form.Input
                                    fluid
                                    label='Descrição'
                                    width={16}
                                    height={16}>
                                    <InputMask
                                        mask=""
                                        placeholder="Informe a descrição do produto"
                                        value={descricao}
                                        onChange={e => setDescricao(e.target.value)}
                                    />
                                </Form.Input>

                            </Form.Group>

                            <Form.Group>
                                <Form.Input
                                    required
                                    width={6}
                                    fluid
                                    label='Valor unitário'>
                                    <InputMask
                                        required
                                        mask=""
                                        placeholder=""
                                        value={valorUnit}
                                        onChange={e => setValorUnit(e.target.value)}
                                    />
                                </Form.Input>

                                <Form.Input
                                    width={6}
                                    fluid
                                    label='Tempo de Entrega Mínimo em Minutos'>
                                    <InputMask
                                        required
                                        mask=""
                                        placeholder="30"
                                        value={tempoEntregaMin}
                                        onChange={e => setTempoEntregaMin(e.target.value)}
                                    />
                                </Form.Input>

                                <Form.Input
                                    width={6}
                                    fluid
                                    label='Tempo de Entrega Máximo em Minutos'>
                                    <InputMask
                                        required
                                        mask=""
                                        placeholder="40"
                                        value={tempoEntregaMax}
                                        onChange={e => setTempoEntregaMax(e.target.value)}
                                    />
                                </Form.Input>

                            </Form.Group>


                        </Form>

                        <div style={{ marginTop: '4%' }}>

                            <Button
                                type="button"
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='orange'
                            >
                                <Icon name='reply' />
                                Voltar
                            </Button>

                            <Button
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='blue'
                                floated='right'
                                onClick={() => salvar()}
                            >
                                <Icon name='save' />
                                Salvar
                            </Button>

                        </div>

                    </div>

                </Container>
            </div>
        </div>

    );

}