const ClienteValidator = {
    nome: {
        required: "O campo Nome é Obrigatório",
        minLength: {
            value: 3,
            message: "Qtd mínima de caracteres não informado"
        },
        maxLength: {
            value: 10,
            message: "Qtd máxima de caracteres ultrapassada"
        },
        min: {
            value: 3,
            message: "O valor mínimo é 3"
        },
    },
    cpf: {
        required: "O campo CPF é Obrigatório",
    },
    email: {
        required: "O campo E-mail é Obrigatório",   
    },
    telefone: {
        required: "O campo Telefone é Obrigatório",
    },
    cep: {
        required: "O campo CEP é Obrigatório",
    },
    numero: {
        required: "O campo Numero é Obrigatório",
    },
    bairro: {
        required: "O campo Bairro é Obrigatório",
    },
}

export default ClienteValidator