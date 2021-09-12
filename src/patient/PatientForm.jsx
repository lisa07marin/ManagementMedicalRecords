import React from "react";
import { Button, Form, Input, InputGroup, Label } from "reactstrap";

const PatientForm = () => {
    const datosPaciente = [
        { label: "Fecha de ingreso" },
        { label: "Apellido y Nombre" },
        { label: "Fecha de nacimiento" },
        { label: "Edad" },
        { label: "DNI" },
        { label: "Teléfono" },
        { label: "Domicilio" },
        { label: "Obra Social" },
        { label: "N°" },
        { label: "Datos padre/madre o persona legalmente autorizada", type: "textarea" },
        { label: "Motivo de consulta", type: "textarea" },
        { label: "Antecedentes clinicos y heredo familiares" },
        { label: "Odontológicos" },
        { label: "Ultimo tratamiento odontológico realizado" },
        { label: "Anestesia local" },
        { label: "Diabetes" },
        { label: "HTA" },
        { label: "Epilepsia" },
        { label: "Fiebre reumática" },
        { label: "Asma" },
        { label: "HIV" },
        { label: "Hepatitis" },
        { label: "Chagas" },
        { label: "Cáncer" },
        { label: "Marcapasos" },
        { label: "Gastritis" },
        { label: "Herpes" },
        { label: "Enfermedades renales" },
        { label: "Operaciones" },
        { label: "Medicación", type: "textarea" },
        { label: "Alérgico a" },
        { label: "Alteraciones hematológicas" },
        { label: "Hemofilia" },
        { label: "Alteraciones de la coagulación" },
        { label: "Toxicos" },
        { label: "Alcohol" },
        { label: "Tabaco" },
        { label: "Cigarrillos por dia" },
        { label: "Drogas" },
        { label: "Gineco obstétricos" },
        { label: "Embarazos" },
        { label: "Partos" },
        { label: "Tipos" },
        { label: "Abortos" },
        { label: "Habitos alimenticios - momentos de azucar-" },
        { label: "Antecedentes familiares", type: "textarea" },
        { label: "Diagnóstico del paciente", type: "textarea" },
        { label: "Pronóstico", type: "textarea" },
        { label: "Observaciones", type: "textarea" },
        { label: "Tratamiento propuesto", type: "textarea" },

    ]

    return (
        <Form>
            <h5>HISTORIA CLÍNICA</h5>
            {datosPaciente.map(d => (
                <InputGroup style={{ margin: "10px" }}>
                    <Label for="" style={{ marginRight: "10px" }}>{d.label}:</Label>
                    <Input type={d.type ? d.type : "text"} />
                </InputGroup>))}
            <InputGroup style={{ margin: "10px" }}>
                <Label for="" style={{ marginRight: "10px" }}>Estudios Médicos:</Label>
                <Input type="file" />
            </InputGroup>
            <Button>Agregar paciente</Button>
        </Form>



    )
}

export default PatientForm;