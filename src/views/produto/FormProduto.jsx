import React from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';

export default function FormCliente() {

    return (

        <div>

            <div style={{ marginTop: '3%' }}>

                <Container textAlign='justified' >

                    <h2> <span style={{ color: 'darkgray' }}> Produto &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

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