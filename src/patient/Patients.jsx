import React from "react";
import { Card, Button } from "react-bootstrap";

const Patients = () => {
    const pacientes = [
        { fullname: "ANA LAURA" },
        { fullname: "ROBERTO" },
        { fullname: "PEPITO" },
        { fullname: "CESAR" },
        { fullname: "ANASTASIA" }
    ]
    return (
        <React.Fragment>
            <div className="buttons">
                <Button variant="secondary" href="/pacientes/nuevo">Agregar paciente</Button>
            </div>
            {pacientes.map(p => (
                <Card><Card.Body><i className="far fa-user" />  {p.fullname}</Card.Body></Card>
            ))}
        </React.Fragment>
    )
}

export default Patients;