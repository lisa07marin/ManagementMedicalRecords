import React, { useState } from "react";
import Select from "react-select";
import { Button, Label, Row } from "reactstrap";
import TreatmentForm from "./TreatmentForm";
import TreatmentsList from "./TreatmentsList";

const options = [
    { label: "AURORA", value: "1" },
    { label: "BENJAMIN", value: "2" },
    { label: "MONSERRAT", value: "3" },
]


const Treatment = () => {
    const [patient, setPatient] = useState();
    const [openForm, setOpenForm] = useState();

    return (
        <React.Fragment>
            <Row>
                <Label for="" style={{ marginRight: "10px" }}>Seleccione un paciente:</Label>
                <Select onChange={e => setPatient(e)} options={options} />
            </Row>
            <div className="buttons">
                <Button onClick={() => setOpenForm(!openForm)} disabled={!patient}>Agregar tratamiento</Button>
            </div>
            {openForm && <TreatmentForm patient={patient} />}
            {patient && <TreatmentsList patient={patient} />}
        </React.Fragment>
    )
}

export default Treatment;