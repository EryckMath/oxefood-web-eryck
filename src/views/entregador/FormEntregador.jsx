import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import MenuSistema from "../../MenuSistema";

export default function FormEntregador() {

    const { state } = useLocation();
    const [IdEntregador, setIdEntregador] = useState();

    const [nome, setNome] = useState();
    const [cpf, setCpf] = useState();
    const [rg, setRG] = useState();
    const [dataNascimento, setDataNascimento] = useState();
    const [foneCelular, setFoneCelular] = useState();
    const [foneFixo, setFoneFixo] = useState();
    const [qtdEntregasRealizadas, setQtdEntregasRealizadas] = useState();
    const [valorPorFrete, setValorPorFrete] = useState();
    const [rua, setRua] = useState();
    const [numero, setNumero] = useState();
    const [bairro, setBairro] = useState();
    const [cidade, setCidade] = useState();
    const [cep, setCep] = useState();
    const [uf, setUf] = useState();
    const [complemento, setComplemento] = useState();

    useEffect(() => {
        if (state != null && state.id != null) {
            axios.get("http://localhost:8080/api/entregador/" + state.id)
                .then((response) => {
                    setIdEntregador(response.data.id)
                    setNome(response.data.nome)
                    setCpf(response.data.cpf)
                    setRG(response.data.rg)
                    setDataNascimento(response.data.dataNascimento)
                    setFoneCelular(response.data.foneCelular)
                    setFoneFixo(response.data.foneFixo)
                    setQtdEntregasRealizadas(response.data.qtdEntregasRealizadas)
                    setValorPorFrete(response.data.valorPorFrete)
                    setRua(response.data.rua)
                    setNumero(response.data.numero)
                    setBairro(response.data.bairro)
                    setCidade(response.data.cidade)
                    setCep(response.data.cep)
                    setUf(response.data.uf)
                    setComplemento(response.data.complemento)
                })
        }
    }, [state])


    function salvar() {

        let entregadorRequest = {
            nome: nome,
            cpf: cpf,
            rg: rg,
            dataNascimento: dataNascimento,
            foneCelular: foneCelular,
            foneFixo: foneFixo,
            qtdEntregasRealizadas: qtdEntregasRealizadas,
            valorPorFrete: valorPorFrete,
            rua: rua,
            numero: numero,
            bairro: bairro,
            cidade: cidade,
            cep: cep,
            uf: uf,
            complemento: complemento
        }

        if (IdEntregador != null) { //Alteração:
            axios.put("http://localhost:8080/api/entregador/" + IdEntregador, entregadorRequest)
                .then((response) => { console.log('Entregador alterado com sucesso.') })
                .catch((error) => { console.log('Erro ao alter um entregador.') })
        } else { //Cadastro:
            axios.post("http://localhost:8080/api/entregador", entregadorRequest)
                .then((response) => { console.log('Entregador cadastrado com sucesso.') })
                .catch((error) => { console.log('Erro ao incluir o entregador.') })
        }
    }

    return (

        <div>

            <MenuSistema />

            <div style={{ marginTop: '3%' }}>

                <Container textAlign='justified' >

                    {IdEntregador === undefined &&
                        <h2> <span style={{ color: 'darkgray' }}> Entregador &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro</h2>
                    }
                    {IdEntregador != undefined &&
                        <h2> <span style={{ color: 'darkgray' }}> Cliente &nbsp;<Icon name='angle double right' size="small" /> </span> Alteração</h2>
                    }

                    <Divider />

                    <div style={{ marginTop: '4%' }}>

                        <Form>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    width={10}
                                    label='Nome'
                                    maxLength="100"
                                    value={nome}
                                    onChange={e => setNome(e.target.value)}
                                />

                                <Form.Input
                                    required
                                    fluid
                                    width={6}
                                    label='CPF'>
                                    <InputMask
                                        required
                                        mask="999.999.999-99"
                                        value={cpf}
                                        onChange={e => setCpf(e.target.value)}
                                    />
                                </Form.Input>

                                <Form.Input
                                    required
                                    fluid
                                    width={6}
                                    label='RG'>
                                    <InputMask
                                        required
                                        mask="0.000.000"
                                        value={rg}
                                        onChange={e => setRG(e.target.value)}
                                    /></Form.Input>

                            </Form.Group>

                            <Form.Group>

                                <Form.Input
                                    fluid
                                    label='Data Nascimento'
                                    width={6}
                                >
                                    <InputMask
                                        mask="99/99/9999"
                                        maskChar={null}
                                        placeholder="Ex: 20/03/1985"
                                        value={dataNascimento}
                                        onChange={e => setDataNascimento(e.target.value)}
                                    /></Form.Input>

                                <Form.Input
                                    required
                                    fluid
                                    label='Fone Celular'
                                    width={8}
                                    value={foneCelular}
                                    onChange={e => setFoneCelular(e.target.value)} />

                                <Form.Input
                                    fluid
                                    label='Fone Fixo'
                                    width={8}
                                    value={foneFixo}
                                    onChange={e => setFoneFixo(e.target.value)} />

                                <Form.Input
                                    fluid
                                    label='QTD Entregas Realizadas'
                                    width={6}
                                    value={qtdEntregasRealizadas}
                                    onChange={e => setQtdEntregasRealizadas(e.target.value)}
                                />

                                <Form.Input
                                    fluid
                                    label='Valor por frete'
                                    width={6}
                                    value={valorPorFrete}
                                    onChange={e => setValorPorFrete(e.target.value)}
                                />

                            </Form.Group>

                            <Form.Group>

                                <Form.Input
                                    fluid
                                    width={10}
                                    label='Rua'
                                    maxLength="100"
                                    value={rua}
                                    onChange={e => setRua(e.target.value)}
                                />

                                <Form.Input
                                    fluid
                                    width={6}
                                    label='Número'
                                    value={numero}
                                    onChange={e => setNumero(e.target.value)}
                                />

                            </Form.Group>

                            <Form.Group>

                                <Form.Input
                                    fluid
                                    width={10}
                                    label='Bairro'
                                    maxLength="100"
                                    value={bairro}
                                    onChange={e => setBairro(e.target.value)}
                                />

                                <Form.Input
                                    fluid
                                    width={8}
                                    label='Cidade'
                                    value={cidade}
                                    onChange={e => setCidade(e.target.value)}
                                />

                                <Form.Input
                                    fluid
                                    width={4}
                                    label='CEP'
                                    value={cep}
                                    onChange={e => setCep(e.target.value)}
                                />

                            </Form.Group>

                            <Form.Group>

                                <Form.Input
                                    fluid
                                    width={16}
                                    label='UF'
                                    maxLength="100"
                                    value={uf}
                                    onChange={e => setUf(e.target.value)}
                                />

                            </Form.Group>

                            <Form.Group>

                                <Form.Input
                                    fluid
                                    width={16}
                                    label='Complemento'
                                    maxLength="100"
                                    value={complemento}
                                    onChange={e => setComplemento(e.target.value)}
                                />

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