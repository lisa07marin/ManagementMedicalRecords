import React from "react";
import { Button, ButtonGroup } from "reactstrap";

const Menu = () => {

    return (
        <ButtonGroup vertical>
            <Button>Agregar paciente</Button>
            <Button>Listar pacientes</Button>
            <Button>Agregar tratamiento</Button>
            <Button>Listar tratamientos de un paciente</Button>
        </ButtonGroup>
    )
}

export default Menu;