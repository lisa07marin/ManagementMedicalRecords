import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./menu.css";

const Menu = () => {

    return (
        <div className="container">

            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/">
                        <img src="https://i.pinimg.com/originals/c7/1d/74/c71d7463d86d2e93be773690f505058e.png" alt="" style={{ width: "50px", height: "auto" }} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/pacientes">Pacientes</Nav.Link>
                            <Nav.Link href="/tratamientos/nuevo">Tratamientos</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    )
}

export default Menu;