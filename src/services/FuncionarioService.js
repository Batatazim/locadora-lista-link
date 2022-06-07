class FuncionarioService {

    getAll(){
        const funcionario = localStorage.getItem('funcionario')
        return funcionario ? JSON.parse (funcionario) : []
    }

    get(id){
        const funcionario = this.getAll()
        return funcionario[id]
    }

    create(dados){
        const funcionario = this.getAll()
        funcionario.push(dados)
        localStorage.setItem('funcionario', JSON.stringify(funcionario))
    }

    update(id,dados){
        const funcionario = this.getAll()
        funcionario.splice(id, 1, dados)
        localStorage.setItem('funcionario', JSON.stringify(funcionario))
    }

    delete(id){
        const funcionario = this.getAll()
        funcionario.splice(id, 1)
        localStorage.setItem('funcionario', JSON.stringify(funcionario))
    }

}

export default new FuncionarioService()