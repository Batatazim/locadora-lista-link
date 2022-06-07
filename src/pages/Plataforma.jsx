import React, { useState } from 'react'
import { Button, Card, Container, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { Link, useNavigate, useParams } from 'react-router-dom'
import {FaCheck} from 'react-icons/fa'
import {AiOutlineRollback} from 'react-icons/ai'
import PlataformaValidator from '../validators/PlataformaValidator'
import PlataformaService from '../services/PlataformaService'
import { useEffect } from 'react'
import { mask } from 'remask'
import Swal from 'sweetalert2'

const Plataforma = () => {
  
    const params = useParams()
    const navigate = useNavigate()
    const {register, handleSubmit, setValue, formState: {errors} } = useForm();

    function handleChange(event) {
        const mascara = event.target.getAttribute('mask')
        setValue(event.target.name, mask(event.target.value, mascara))
      }
  
    useEffect(()=>{
      if (params.id){
    const plataforma = PlataformaService.get(params.id)
    console.log(plataforma);
  
    for(let campo in plataforma){
      setValue(campo, plataforma[campo])
    }
   }
  }, [])
  
    function salvar(dados) {
      Swal.fire({icon: 'success',text: 'Seu arquivo foi salvo'})
      if(params.id){
        PlataformaService.update(params.id, dados) 
        navigate('/plataformalista')
      }
  
      else{
      PlataformaService.create(dados)
      navigate('/plataformalista')
      }
    }
  
    return (
    <div>
    <Container>
    <Card style={{ background:'gray' }}>
    <Card.Body>
    <Card.Title><h1>Cadastrar Plataforma</h1></Card.Title>
    
    <Form>
    <Form.Group className="mb-3" controlId="nome">
           <Form.Label>Nome da plataforma: </Form.Label>
           <Form.Control type="text" {...register("nome", PlataformaValidator.nome)} />
           {errors.nome && <span>{errors.nome.message}</span>}
         </Form.Group>

         <Form.Group className="mb-3" controlId="desenv">
           <Form.Label>Desenvolvedor: </Form.Label>
           <Form.Control type="text"{...register("desenv", PlataformaValidator.desenv)}/>
             {errors.desenv && <span>{errors.desenv.message}</span>}
         </Form.Group>

         <Form.Group className="mb-3" controlId="datalan">
           <Form.Label>Data de lançamento: </Form.Label>
           <Form.Control type="date"{...register("datalan", PlataformaValidator.datalan)} />
           {errors.datalan && <span>{errors.datalan.message}</span>}
         </Form.Group>

         <Form.Group className="mb-3" controlId="geracao">
           <Form.Label>Geração: </Form.Label>
           <Form.Control type="text"{...register("geracao", PlataformaValidator.geracao)}  />
           {errors.geracao && <span>{errors.geracao.message}</span>}
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

export default Plataforma