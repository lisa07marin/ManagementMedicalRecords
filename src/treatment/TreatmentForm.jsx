import React from "react";
import { Button, Col, Form, Input, Label, Row, FormGroup } from "reactstrap";
import Datetime from "react-datetime";

const TreatmentForm = () => {

    return (
        <React.Fragment>
            <Form>
                <Row>
                    <Col sm="3">
                        <FormGroup style={{ margin: "10px" }}>
                            <Label for="" style={{ marginRight: "10px" }}>Fecha:</Label>
                            <Datetime />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup style={{ margin: "10px" }}>
                            <Label for="" style={{ marginRight: "10px" }}>Tratamiento:</Label>
                            <Input type="textarea" />
                        </FormGroup>
                    </Col>
                    <Col sm="2">
                        <FormGroup style={{ margin: "10px" }}>
                            <Label for="" style={{ marginRight: "10px" }}>Importe:</Label>
                            <Input type="number" />
                        </FormGroup>
                    </Col>
                </Row>
            </Form>
            <div className="buttons">
                <Button>Guardar</Button>
            </div>
        </React.Fragment>
    )
}

export default TreatmentForm;