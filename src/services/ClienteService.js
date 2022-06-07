class ClienteService {

    getAll(){
        const cliente = localStorage.getItem('cliente')
        return cliente ? JSON.parse (cliente) : []
    }

    get(id){
        const cliente = this.getAll()
        return cliente[id]
    }

    create(dados){
        const cliente = this.getAll()
        cliente.push(dados)
        localStorage.setItem('cliente', JSON.stringify(cliente))
    }

    update(id,dados){
        const cliente = this.getAll()
        cliente.splice(id, 1, dados)
        localStorage.setItem('cliente', JSON.stringify(cliente))
    }

    delete(id){
        const cliente = this.getAll()
        cliente.splice(id, 1)
        localStorage.setItem('cliente', JSON.stringify(cliente))
    }

}

export default new ClienteService()