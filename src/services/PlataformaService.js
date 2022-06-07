class PlataformaService {

    getAll(){
        const plataforma = localStorage.getItem('plataforma')
        return plataforma ? JSON.parse (plataforma) : []
    }

    get(id){
        const plataforma = this.getAll()
        return plataforma[id]
    }

    create(dados){
        const plataforma = this.getAll()
        plataforma.push(dados)
        localStorage.setItem('plataforma', JSON.stringify(plataforma))
    }

    update(id,dados){
        const plataforma = this.getAll()
        plataforma.splice(id, 1, dados)
        localStorage.setItem('plataforma', JSON.stringify(plataforma))
    }

    delete(id){
        const plataforma = this.getAll()
        plataforma.splice(id, 1)
        localStorage.setItem('plataforma', JSON.stringify(plataforma))
    }

}

export default new PlataformaService()