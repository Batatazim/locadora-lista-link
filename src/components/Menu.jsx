import React from 'react'
import { Container, Dropdown, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const Menu = () => {
  return (
    <div>

<Navbar bg="secondary" variant="dark" className='mb-4'>
    <Container>
    <Navbar.Brand href="index">Locadora Do tio zé</Navbar.Brand>
    <Nav className="me-auto">
      
      <NavDropdown  title="Cadastramentos" className="show" id="basic-nav-dropdown">
      <Link className="dropdown-item" to="/plataforma">Plataforma</Link>
      <Link className="dropdown-item" to="/jogo">Jogo</Link>
      <Link className="dropdown-item" to="/cliente">Cliente</Link>
      <Link className="dropdown-item" to="/funcionario">Funcionario</Link>
      <Link className="dropdown-item" to="/equipamento">Equipamento</Link>
      </NavDropdown>

      <NavDropdown  title="Listas" className="show" id="basic-nav-dropdown">
      <Link className="dropdown-item" to="/plataformalista">Plataforma Lista</Link>
      <Link className="dropdown-item" to="/jogolista">Jogo Lista</Link>
      <Link className="dropdown-item" to="/clientelista">Cliente Lista</Link>
      <Link className="dropdown-item" to="/funcionariolista">Funcionário Lista</Link>
      <Link className="dropdown-item" to="/equipamentolista">Equipamento Lista</Link>
      </NavDropdown>


    </Nav>
    </Container>
  </Navbar>

    </div>
  )
}

export default Menu