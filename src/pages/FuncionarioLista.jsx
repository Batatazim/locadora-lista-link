import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Card, Col, Container, Row, Table } from 'react-bootstrap'
import FuncionarioService from '../services/FuncionarioService'
import {BsTrash, BsPencil} from 'react-icons/bs'
import {AiOutlinePlus} from 'react-icons/ai'
import { Link, useNavigate, useParams } from 'react-router-dom'
import {AiOutlineRollback} from 'react-icons/ai'
import Swal from 'sweetalert2'

const FuncionarioLista = () => {
    
    const[funcionario, setFuncionario] = useState ([])

    useEffect(()=> {
        setFuncionario(FuncionarioService.getAll())
    }, [])

    function apagar(id) {
      Swal.fire({
        title: 'Quer deletar a parada?',
        text: "Tu pode se arrepender meu nobre!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim, quero deletar!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Deletado!',
            'O seu arquivo foi deletado.',
            'success',
            FuncionarioService.delete(id),
            setFuncionario(FuncionarioService.getAll()),
          )
        }
      })
    }

    console.log(funcionario);
  return (
    <div>
        <Container>
        <Card style={{ background:'gray' }}>
    <Card.Body>
    <h1>Funcionários</h1>
        <Link className='btn btn-success' to={'/funcionario'}><AiOutlinePlus/> Novo</Link>
        <Table className="mt-3" striped bordered hover variant="dark">
         <thead>
        <tr>
            <th>Editar/Excluir</th>
            <th>Nome</th>
            <th>CPF</th>
            <th>E-mail</th>
            <th>Telefone</th>
            <th>Cargo</th>
            <th>Salario</th>
            <th>Cep</th>
            <th>Número</th>
            <th>Bairro</th>
        </tr>
        </thead>
        <tbody>
            {funcionario.map((item, i) => (
                <tr key={i}>
                <td>
                <Link to={'/funcionario/' + i}><BsPencil className='text-primary'/></Link>{"  "}
                <BsTrash onClick={() => apagar (i)} className='text-danger'/>
                </td>
                <td>{item.nome}</td>
                <td>{item.cpf}</td>
                <td>{item.email}</td>
                <td>{item.telefone}</td>
                <td>{item.cargo}</td>
                <td>{item.salario}</td>
                <td>{item.cep}</td>
                <td>{item.numero}</td>
                <td>{item.bairro}</td>
              </tr>
            ))}
        </tbody>
        </Table>
        <Link to={-1} className='btn btn-danger'><AiOutlineRollback/> Voltar</Link>
    </Card.Body>
    </Card>
        </Container>
    </div>
  )
}

export default FuncionarioLista