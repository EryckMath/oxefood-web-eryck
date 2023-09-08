import React from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';

export default function FormCliente() {

    return (

        <div>

            <div style={{ marginTop: '3%' }}>

                <Container textAlign='justified' >

                    <h2> <span style={{ color: 'darkgray' }}> Cliente &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

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
                                />

                                <Form.Input
                                    required
                                    fluid
                                    width={6}
                                    label='CPF'>
                                    <InputMask
                                        required
                                        mask="999.999.999-99"
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
                                    /></Form.Input>

                                <Form.Input
                                    required
                                    fluid
                                    label='Fone Celular'
                                    width={8} />

                                <Form.Input
                                    fluid
                                    label='Fone Fixo'
                                    width={8} />

                                <Form.Input
                                    fluid
                                    label='QTD Entregas Realizadas'
                                    width={6}
                                />

                                <Form.Input
                                    fluid
                                    label='Valor por frete'
                                    width={6}
                                />

                            </Form.Group>

                            <Form.Group>

                                <Form.Input
                                    fluid
                                    width={10}
                                    label='Rua'
                                    maxLength="100"
                                />

                                <Form.Input
                                    fluid
                                    width={6}
                                    label='Número' />

                            </Form.Group>

                            <Form.Group>

                                <Form.Input
                                    fluid
                                    width={10}
                                    label='Bairro'
                                    maxLength="100"
                                />

                                <Form.Input
                                    fluid
                                    width={8}
                                    label='Cidade' />

                                <Form.Input
                                    fluid
                                    width={4}
                                    label='CEP' />

                            </Form.Group>

                            <Form.Group>

                                <Form.Input
                                    fluid
                                    width={16}
                                    label='UF'
                                    maxLength="100"
                                />

                            </Form.Group>

                            <Form.Group>

                                <Form.Input
                                    fluid
                                    width={16}
                                    label='Complemento'
                                    maxLength="100"
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