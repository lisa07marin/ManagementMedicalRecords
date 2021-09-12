import React from "react";
import { Button, Form, Input, InputGroup, Label } from "reactstrap";

const TreatmentForm = () => {

    return (
        <Form>
            <InputGroup style={{ margin: "10px" }}>
                <Label for="" style={{ marginRight: "10px" }}>Paciente:</Label>
                <Input type="text" />
            </InputGroup>
            <h5>TRATAMIENTO</h5>
            <InputGroup style={{ margin: "10px" }}>
                <Label for="" style={{ marginRight: "10px" }}>Fecha:</Label>
                <Input type="text" />
            </InputGroup>
            <InputGroup style={{ margin: "10px" }}>
                <Label for="" style={{ marginRight: "10px" }}>Tratamiento:</Label>
                <Input type="textarea" />
            </InputGroup>
            <InputGroup style={{ margin: "10px" }}>
                <Label for="" style={{ marginRight: "10px" }}>Importe:</Label>
                <Input type="textarea" />
            </InputGroup>
            <Button>Agregar tratamiento</Button>
        </Form>
    )
}

export default TreatmentForm;