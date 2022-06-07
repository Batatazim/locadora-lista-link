import React, { useState } from 'react'
import { Button, Card, Container, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { Link, useNavigate, useParams } from 'react-router-dom'
import {FaCheck} from 'react-icons/fa'
import {AiOutlineRollback} from 'react-icons/ai'
import ClienteValidator from '../validators/ClienteValidator'
import ClienteService from '../services/ClienteService'
import { useEffect } from 'react'
import { mask } from 'remask'
import Swal from 'sweetalert2'

const Cliente = () => {

  const params = useParams()
  const navigate = useNavigate()
  const {register, handleSubmit, setValue, formState: {errors} } = useForm();

  function handleChange(event) {
      const mascara = event.target.getAttribute('mask')
      setValue(event.target.name, mask(event.target.value, mascara))
    }

  useEffect(()=>{
    if (params.id){
  const cliente = ClienteService.get(params.id)
  console.log(cliente);

  for(let campo in cliente){
    setValue(campo, cliente[campo])
  }
 }
}, [])

  function salvar(dados) {
    Swal.fire({icon: 'success',text: 'Seu arquivo foi salvo'})
    if(params.id){
      ClienteService.update(params.id, dados)
       navigate('/clientelista') 
    }

    else{
    ClienteService.create(dados)
    navigate('/clientelista')
    }
  }

  return (
    <div>
        <Container>
      <Card style={{ background:'gray' }}>
    <Card.Body>
    <Card.Title><h1>Cadastrar Cliente</h1></Card.Title>
    <Form>

         <Form.Group className="mb-3" controlId="nome">
           <Form.Label>Nome: </Form.Label>
           <Form.Control type="text" {...register("nome", ClienteValidator.nome)} />
           {errors.nome && <span>{errors.nome.message}</span>}
         </Form.Group>

         <Form.Group className="mb-3" controlId="cpf">
           <Form.Label>CPF: </Form.Label>
           <Form.Control placeholder="111.111.111-11" type="text"{...register("cpf", ClienteValidator.cpf)}
             mask="999.999.999-99" onChange={handleChange} 
             />
             {errors.telefone && <span>{errors.cpf.message}</span>}
         </Form.Group>

         <Form.Group className="mb-3" controlId="email">
           <Form.Label>E-mail: </Form.Label>
           <Form.Control placeholder="Exmplo@gmail.com" type="email"{...register("email", ClienteValidator.email)}  />
           {errors.email && <span>{errors.email.message}</span>}
         </Form.Group>

         <Form.Group className="mb-3" controlId="telefone">
           <Form.Label>Telefone: </Form.Label>
           <Form.Control placeholder="Exemplo: (11) 11111-1111" type="text"{...register("telefone", ClienteValidator.telefone)}  
           mask="(99) 99999-9999" onChange={handleChange}/>
           {errors.telefone && <span>{errors.telefone.message}</span>}
         </Form.Group>

         <Form.Group className="mb-3" controlId="cep">
           <Form.Label>CEP: </Form.Label>
           <Form.Control placeholder="Exemplo: 11111-111" type="text"{...register("cep", ClienteValidator.cep)}  
           mask="99999-999" onChange={handleChange}/>
           {errors.cep && <span>{errors.cep.message}</span>}
         </Form.Group>

         <Form.Group className="mb-3" controlId="numero">
           <Form.Label>Número: </Form.Label>
           <Form.Control type="text"{...register("numero", ClienteValidator.numero)}  
           mask="999" onChange={handleChange}/>
           {errors.numero && <span>{errors.numero.message}</span>}
         </Form.Group>

         <Form.Group className="mb-3" controlId="bairro">
           <Form.Label>Bairro: </Form.Label>
           <Form.Control type="text"{...register("bairro", ClienteValidator.bairro)}  />
           {errors.bairro && <span>{errors.bairro.message}</span>}
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

export default Cliente