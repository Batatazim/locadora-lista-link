import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Card, Col, Container, Row, Table } from 'react-bootstrap'
import EquipamentoService from '../services/EquipamentoService'
import {BsTrash, BsPencil} from 'react-icons/bs'
import {AiOutlinePlus} from 'react-icons/ai'
import { Link, useNavigate, useParams } from 'react-router-dom'
import {AiOutlineRollback} from 'react-icons/ai'
import Swal from 'sweetalert2'

const EquipamentoLista = () => {

    const[equipamento, setEquipamento] = useState ([])

    useEffect(()=> {
        setEquipamento(EquipamentoService.getAll())
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
            EquipamentoService.delete(id),
            setEquipamento(EquipamentoService.getAll()),
          )
        }
      })
    }

    console.log(equipamento);
  return (
    <div><Container>
    <Card style={{ background:'gray' }}>
<Card.Body>
<h1>Equipamentos</h1>
    <Link className='btn btn-success' to={'/equipamento'}><AiOutlinePlus/> Novo</Link>
    <Table className="mt-3" striped bordered hover variant="dark">
     <thead>
    <tr>
        <th>Editar/Excluir</th>
        <th>Nome</th>
        <th>Tipo</th>
        <th>Valor</th>
    </tr>
    </thead>
    <tbody>
        {equipamento.map((item, i) => (
            <tr key={i}>
            <td>
            <Link to={'/equipamento/' + i}><BsPencil className='text-primary'/></Link>{"  "}
            <BsTrash onClick={() => apagar (i)} className='text-danger'/>
            </td>
            <td>{item.nome}</td>
            <td>{item.tipo}</td>
            <td>{item.valor}</td>
          </tr>
        ))}
    </tbody>
    </Table>
    <Link to={-1} className='btn btn-danger'><AiOutlineRollback/> Voltar</Link>
</Card.Body>
</Card>
    </Container></div>
  )
}

export default EquipamentoLista