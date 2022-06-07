import React, { useState } from 'react'
import { Button, Card, Container, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { Link, useNavigate, useParams } from 'react-router-dom'
import {FaCheck} from 'react-icons/fa'
import {AiOutlineRollback} from 'react-icons/ai'
import EquipamentoValidator from '../validators/EquipamentoValidator'
import EquipamentoService from '../services/EquipamentoService'
import { useEffect } from 'react'
import { mask } from 'remask'
import Swal from 'sweetalert2'

const Equipamento = () => {

    const params = useParams()
    const navigate = useNavigate()
    const {register, handleSubmit, setValue, formState: {errors} } = useForm();
  
    function handleChange(event) {
        const mascara = event.target.getAttribute('mask')
        setValue(event.target.name, mask(event.target.value, mascara))
      }
  
    useEffect(()=>{
      if (params.id){
    const equipamento = EquipamentoService.get(params.id)
    console.log(equipamento);
  
    for(let campo in equipamento){
      setValue(campo, equipamento[campo])
    }
   }
  }, [])
  
    function salvar(dados) {
      Swal.fire({icon: 'success',text: 'Seu arquivo foi salvo'})
      if(params.id){
        EquipamentoService.update(params.id, dados)
        navigate('/equipamentolista') 
      }
  
      else{
      EquipamentoService.create(dados)
      navigate('/equipamentolista')
      }
    }

  return (
    <div>
        <Container>
      <Card style={{ background:'gray' }}>
    <Card.Body>
    <Card.Title><h1>Cadastrar Equipamento</h1></Card.Title>
    
    <Form>
    <Form.Group className="mb-3" controlId="nome">
           <Form.Label>Nome do Equipamento: </Form.Label>
           <Form.Control type="text" {...register("nome", EquipamentoValidator.nome)} />
           {errors.nome && <span>{errors.nome.message}</span>}
         </Form.Group>

         <Form.Group className="mb-3" controlId="tipo">
           <Form.Label>Tipo de Equipamento: </Form.Label>
           <Form.Control type="text"{...register("tipo", EquipamentoValidator.tipo)}/>
             {errors.tipo && <span>{errors.tipo.message}</span>}
         </Form.Group>

         <Form.Group className="mb-3" controlId="valor">
           <Form.Label>Valor do Equipamento: </Form.Label>
           <Form.Control type="text"{...register("valor", EquipamentoValidator.valor)}  />
           {errors.valor && <span>{errors.valor.message}</span>}
         </Form.Group>

         <div className="text-center">
             <Button onClick={handleSubmit(salvar)} className='btn btn-success'><FaCheck/> Salvar</Button>{" "}
             <Link to={-1} className='btn btn-danger'><AiOutlineRollback/> Voltar</Link>
         </div>
    </Form>
    </Card.Body>
    </Card>
      </Container>
    </div>
  )
}

export default Equipamento