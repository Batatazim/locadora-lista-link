import React, { useState } from 'react'
import { Button, Card, Container, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { Link, useNavigate, useParams } from 'react-router-dom'
import {FaCheck} from 'react-icons/fa'
import {AiOutlineRollback} from 'react-icons/ai'
import FuncionarioValidator from '../validators/FuncionarioValidator'
import FuncionarioService from '../services/FuncionarioService'
import { useEffect } from 'react'
import { mask } from 'remask'
import Swal from 'sweetalert2'

const Funcionario = () => {

    const params = useParams()
  const navigate = useNavigate()
  const {register, handleSubmit, setValue, formState: {errors} } = useForm();

  function handleChange(event) {
      const mascara = event.target.getAttribute('mask')
      setValue(event.target.name, mask(event.target.value, mascara))
    }

  useEffect(()=>{
    if (params.id){
  const funcionario = FuncionarioService.get(params.id)
  console.log(funcionario);

  for(let campo in funcionario){
    setValue(campo, funcionario[campo])
  }
 }
}, [])

  function salvar(dados) {
    Swal.fire({icon: 'success',text: 'Seu arquivo foi salvo'})
    if(params.id){
      FuncionarioService.update(params.id, dados) 
      navigate('/funcionariolista')
    }

    else{
    FuncionarioService.create(dados)
    navigate('/funcionariolista')
    }
  }

  return (
    <div>
         <Container>
      <Card style={{ background:'gray' }}>
    <Card.Body>
    <Card.Title><h1>Cadastrar Funcionário</h1></Card.Title>
    <Form>

         <Form.Group className="mb-3" controlId="nome">
           <Form.Label>Nome: </Form.Label>
           <Form.Control type="text" {...register("nome", FuncionarioValidator.nome)} />
           {errors.nome && <span>{errors.nome.message}</span>}
         </Form.Group>

         <Form.Group className="mb-3" controlId="cpf">
           <Form.Label>CPF: </Form.Label>
           <Form.Control placeholder="111.111.111-11" type="text"{...register("cpf", FuncionarioValidator.cpf)}
             mask="999.999.999-99" onChange={handleChange} 
             />
             {errors.telefone && <span>{errors.cpf.message}</span>}
         </Form.Group>

         <Form.Group className="mb-3" controlId="email">
           <Form.Label>E-mail: </Form.Label>
           <Form.Control placeholder="Exmplo@gmail.com" type="email"{...register("email", FuncionarioValidator.email)}  />
           {errors.email && <span>{errors.email.message}</span>}
         </Form.Group>

         <Form.Group className="mb-3" controlId="telefone">
           <Form.Label>Telefone: </Form.Label>
           <Form.Control placeholder="Exemplo: (11) 11111-1111" type="text"{...register("telefone", FuncionarioValidator.telefone)}  
           mask="(99) 99999-9999" onChange={handleChange}/>
           {errors.telefone && <span>{errors.telefone.message}</span>}
         </Form.Group>

         <Form.Group className="mb-3" controlId="cargo">
           <Form.Label>Cargo: </Form.Label>
           <Form.Control type="text"{...register("cargo", FuncionarioValidator.cargo)}/>
           {errors.cargo && <span>{errors.cargo.message}</span>}
         </Form.Group>

         <Form.Group className="mb-3" controlId="salario">
           <Form.Label>Salario: </Form.Label>
           <Form.Control type="text"{...register("salario", FuncionarioValidator.salario)}  />
           {errors.salario && <span>{errors.salario.message}</span>}
         </Form.Group>

         <Form.Group className="mb-3" controlId="cep">
           <Form.Label>CEP: </Form.Label>
           <Form.Control placeholder="Exemplo: 11111-111" type="text"{...register("cep", FuncionarioValidator.cep)}  
           mask="99999-999" onChange={handleChange}/>
           {errors.cep && <span>{errors.cep.message}</span>}
         </Form.Group>

         <Form.Group className="mb-3" controlId="numero">
           <Form.Label>Número: </Form.Label>
           <Form.Control type="text"{...register("numero", FuncionarioValidator.numero)}  
           mask="999" onChange={handleChange}/>
           {errors.numero && <span>{errors.numero.message}</span>}
         </Form.Group>

         <Form.Group className="mb-3" controlId="bairro">
           <Form.Label>Bairro: </Form.Label>
           <Form.Control type="text"{...register("bairro", FuncionarioValidator.bairro)}  />
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

export default Funcionario