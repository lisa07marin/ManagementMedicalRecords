import React from "react";
import { Button, Col, Form, Input, InputGroup, Label, Row, FormGroup } from "reactstrap";
import Datetime from 'react-datetime';
import "./patientForm.css"

const PatientForm = ({ onChange }) => {

    return (
        <Form className="patient-form">
            <h5>HISTORIA CLÍNICA</h5>
            <h6>DATOS DE AFILIACIÓN</h6>
            <Row>
                <Col sm="5">
                    <FormGroup>
                        <Label for="" >Apellido y Nombre:</Label>
                        <Input type="text" />
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        <Label for="" style={{ marginRight: "10px" }}>Fecha de nacimiento:</Label>
                        <Datetime />
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        <Label for="" style={{ marginRight: "10px" }}>DNI:</Label>
                        <Input type="number" />
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col sm="4">
                    <FormGroup>
                        <Label for="" style={{ marginRight: "10px" }}>Teléfono:</Label>
                        <Input type="number" />
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        <Label for="" style={{ marginRight: "10px" }}>Domicilio:</Label>
                        <Input type="text" />
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col sm="4">
                    <FormGroup>
                        <Label for="" style={{ marginRight: "10px" }}>Obra Social:</Label>
                        <Input type="text" />
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        <Label for="" style={{ marginRight: "10px" }}>N°:</Label>
                        <Input type="text" />
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <FormGroup>
                    <Label for="" style={{ marginRight: "10px" }}>Datos padre/madre o persona legalmente autorizada:</Label>
                    <Input type="text" />
                </FormGroup>
            </Row>
            <Row>
                <FormGroup>
                    <Label for="" style={{ marginRight: "10px" }}>MOTIVO DE CONSULTA:</Label>
                    <Input type="textarea" />
                </FormGroup>
            </Row>
            <h6>ANTECEDENTES CLÍNICOS Y HEREDO FAMILIARES</h6>
            <h6>ODONTOLÓGICOS:</h6>
            <Row>
                <FormGroup>
                    <Label for="" style={{ marginRight: "10px" }}>Ultimo tratamiento odontológico realizado:</Label>
                    <Input type="text" />
                </FormGroup>
            </Row>
            <Row>
                <Col>
                    <FormGroup>
                        <Label for="" style={{ marginRight: "10px" }}>Anestesia local:</Label>
                        <Input type="text" />
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        <Label for="" style={{ marginRight: "10px" }}>Cepillado:</Label>
                        <Input type="text" />
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        <Label for="" style={{ marginRight: "10px" }}>Sangrado de encías:</Label>
                        <Input type="text" />
                    </FormGroup>
                </Col>
            </Row>
            <h6>MÉDICOS:</h6>
            <Row>
                <Col>
                    <FormGroup>
                        <Label for="" style={{ marginRight: "10px" }}>Diabetes:</Label>
                        <Input type="text" />
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        <Label for="" style={{ marginRight: "10px" }}>HTA:</Label>
                        <Input type="text" />
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        <Label for="" style={{ marginRight: "10px" }}>Epilepsia:</Label>
                        <Input type="text" />
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        <Label for="" style={{ marginRight: "10px" }}>Epilepsia:</Label>
                        <Input type="text" />
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        <Label for="" style={{ marginRight: "10px" }}>Fiebre reumática:</Label>
                        <Input type="text" />
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        <Label for="" style={{ marginRight: "10px" }}>Asma:</Label>
                        <Input type="text" />
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col>
                    <FormGroup>
                        <Label for="" style={{ marginRight: "10px" }}>HIV:</Label>
                        <Input type="text" />
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        <Label for="" style={{ marginRight: "10px" }}>Hepatitis:</Label>
                        <Input type="text" />
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        <Label for="" style={{ marginRight: "10px" }}>Chagas:</Label>
                        <Input type="text" />
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        <Label for="" style={{ marginRight: "10px" }}>Cáncer:</Label>
                        <Input type="text" />
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col>
                    <FormGroup>
                        <Label for="" style={{ marginRight: "10px" }}>Marcapasos:</Label>
                        <Input type="text" />
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        <Label for="" style={{ marginRight: "10px" }}>Gastritis:</Label>
                        <Input type="text" />
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        <Label for="" style={{ marginRight: "10px" }}>Herpes:</Label>
                        <Input type="text" />
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col>
                    <FormGroup>
                        <Label for="" style={{ marginRight: "10px" }}>Enfermedades Renales:</Label>
                        <Input type="text" />
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        <Label for="" style={{ marginRight: "10px" }}>Operaciones:</Label>
                        <Input type="text" />
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <FormGroup>
                    <Label for="" style={{ marginRight: "10px" }}>Medicación:</Label>
                    <Input type="text" />
                </FormGroup>
            </Row>
            <Row>
                <FormGroup>
                    <Label for="" style={{ marginRight: "10px" }}>Alérgico a:</Label>
                    <Input type="text" />
                </FormGroup>
            </Row>
            <h6>ALTERACIONES HEMATOLÓGICAS:</h6>
            <Row>
                <Col>
                    <FormGroup>
                        <Label for="" style={{ marginRight: "10px" }}>Hemofilia:</Label>
                        <Input type="text" />
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        <Label for="" style={{ marginRight: "10px" }}>Alteraciones de la coagulación:</Label>
                        <Input type="text" />
                    </FormGroup>
                </Col>
            </Row>
            <h6>TÓXICOS:</h6>
            <Row>
                <Col>
                    <FormGroup>
                        <Label for="" style={{ marginRight: "10px" }}>Alcohol:</Label>
                        <Input type="text" />
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        <Label for="" style={{ marginRight: "10px" }}>Tabaco:</Label>
                        <Input type="text" />
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        <Label for="" style={{ marginRight: "10px" }}>Cigarrillos por día:</Label>
                        <Input type="text" />
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        <Label for="" style={{ marginRight: "10px" }}>Alcohol:</Label>
                        <Input type="text" />
                    </FormGroup>
                </Col>
            </Row>
            <h6>GINECO OBSTÉTRICOS:</h6>
            <Row>
                <Col>
                    <FormGroup>
                        <Label for="" style={{ marginRight: "10px" }}>Embarazos:</Label>
                        <Input type="text" />
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        <Label for="" style={{ marginRight: "10px" }}>Partos:</Label>
                        <Input type="text" />
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        <Label for="" style={{ marginRight: "10px" }}>Tipos:</Label>
                        <Input type="text" />
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        <Label for="" style={{ marginRight: "10px" }}>Abortos:</Label>
                        <Input type="text" />
                    </FormGroup>
                </Col>
            </Row>
            <h6 for="" style={{ marginRight: "10px" }}>MOMENTOS ALIMENTICIOS -momentos de azúcar-:</h6>
            <Input type="text" />

            <h6 for="" style={{ marginRight: "10px" }}>ANTECEDENTES FAMILIARES:</h6>
            <Input type="text" />
            
            <InputGroup>
                <Label for="" style={{ marginRight: "10px" }}>Estudios Médicos:</Label>
                <Input type="file" />
            </InputGroup>

            <div className="buttons">
                <Button href="/pacientes">Agregar paciente</Button>
            </div>
        </Form>
    )
}

export default PatientForm;
