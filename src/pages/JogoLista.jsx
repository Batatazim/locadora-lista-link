import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Card, Col, Container, Row, Table } from 'react-bootstrap'
import JogoService from '../services/JogoService'
import {BsTrash, BsPencil} from 'react-icons/bs'
import {AiOutlinePlus} from 'react-icons/ai'
import { Link, useNavigate, useParams } from 'react-router-dom'
import {AiOutlineRollback} from 'react-icons/ai'
import Swal from 'sweetalert2'

const JogoLista = () => {

    const[jogo, setJogo] = useState ([])

    useEffect(()=> {
        setJogo(JogoService.getAll())
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
            JogoService.delete(id),
            setJogo(JogoService.getAll()),
          )
        }
      })
    }

    console.log(jogo);

    
  return (
    <div>
         <Container>
        <Card style={{ background:'gray' }}>
    <Card.Body>
    <h1>Jogos</h1>
        <Link className='btn btn-success' to={'/jogo'}><AiOutlinePlus/> Novo</Link>
        <Table className="mt-3" striped bordered hover variant="dark">
         <thead>
        <tr>
            <th>Editar/Excluir</th>
            <th>Nome</th>
            <th>Gênero</th>
            <th>Distribuidora</th>
            <th>Desenvolvedora</th>
            <th>Lançamento</th>
        </tr>
        </thead>
        <tbody>
            {jogo.map((item, i) => (
                <tr key={i}>
                <td>
                <Link to={'/jogo/' + i}><BsPencil className='text-primary'/></Link>{"  "}
                <BsTrash onClick={() => apagar (i)} className='text-danger'/>
                </td>
                <td>{item.nome}</td>
                <td>{item.genero}</td>
                <td>{item.distri}</td>
                <td>{item.desenv}</td>
                <td>{item.datalan}</td>
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

export default JogoLista