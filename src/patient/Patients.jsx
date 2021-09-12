import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

const Patients = () => {
    const pacientes = [
        { fullname: "ANA LAURA" },
        { fullname: "ROBERTO" },
        { fullname: "PEPITO" },
        { fullname: "CESAR" },
        { fullname: "ANASTASIA" }
    ]
    return (
        <ListGroup flush>
            {pacientes.map(p => (
                <ListGroupItem><i className="far fa-user" />  {p.fullname}</ListGroupItem>
            ))}
        </ListGroup>
    )
}

export default Patients;