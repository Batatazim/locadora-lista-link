import React, { useState } from 'react'
import { Button, Card, Container, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { Link, useNavigate, useParams } from 'react-router-dom'
import {FaCheck} from 'react-icons/fa'
import {AiOutlineRollback} from 'react-icons/ai'
import JogoValidator from '../validators/JogoValidator'
import JogoService from '../services/JogoService'
import { useEffect } from 'react'
import { mask } from 'remask'
import Swal from 'sweetalert2'

const Jogos = () => {

  const params = useParams()
  const navigate = useNavigate()
  const {register, handleSubmit, setValue, formState: {errors} } = useForm();

  function handleChange(event) {
      const mascara = event.target.getAttribute('mask')
      setValue(event.target.name, mask(event.target.value, mascara))
    }

  useEffect(()=>{
    if (params.id){
  const jogo = JogoService.get(params.id)
  console.log(jogo);

  for(let campo in jogo){
    setValue(campo, jogo[campo])
  }
 }
}, [])

  function salvar(dados) {
    Swal.fire({icon: 'success',text: 'Seu arquivo foi salvo'})
    if(params.id){
      JogoService.update(params.id, dados)
      navigate('/jogolista')
    }

    else{
    JogoService.create(dados)
    navigate('/jogolista')
    }
  }
  
  return (
    <div>
      <Container>
      <Card style={{ background:'gray' }}>
    <Card.Body>
    <Card.Title><h1>Cadastrar Jogo</h1></Card.Title>
    
    <Form>
    <Form.Group className="mb-3" controlId="nome">
           <Form.Label>Nome do jogo: </Form.Label>
           <Form.Control type="text" {...register("nome", JogoValidator.nome)} />
           {errors.nome && <span>{errors.nome.message}</span>}
         </Form.Group>

         <Form.Group className="mb-3" controlId="genero">
           <Form.Label>Gênero: </Form.Label>
           <Form.Control type="text"{...register("genero", JogoValidator.genero)}/>
             {errors.genero && <span>{errors.genero.message}</span>}
         </Form.Group>

         <Form.Group className="mb-3" controlId="distri">
           <Form.Label>Distribuidora: </Form.Label>
           <Form.Control type="text"{...register("distri", JogoValidator.distri)}  />
           {errors.distri && <span>{errors.distri.message}</span>}
         </Form.Group>

         <Form.Group className="mb-3" controlId="desenv">
           <Form.Label>Desenvolvedora: </Form.Label>
           <Form.Control type="text"{...register("desenv", JogoValidator.desenv)}/>
             {errors.desenv && <span>{errors.desenv.message}</span>}
         </Form.Group>

         <Form.Group className="mb-3" controlId="datalan">
           <Form.Label>Data de lançamento: </Form.Label>
           <Form.Control type="date"{...register("datalan", JogoValidator.datalan)} />
           {errors.datalan && <span>{errors.datalan.message}</span>}
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

export default Jogos