class JogoService {

    getAll(){
        const jogo = localStorage.getItem('jogo')
        return jogo ? JSON.parse (jogo) : []
    }

    get(id){
        const jogo = this.getAll()
        return jogo[id]
    }

    create(dados){
        const jogo = this.getAll()
        jogo.push(dados)
        localStorage.setItem('jogo', JSON.stringify(jogo))
    }

    update(id,dados){
        const jogo = this.getAll()
        jogo.splice(id, 1, dados)
        localStorage.setItem('jogo', JSON.stringify(jogo))
    }

    delete(id){
        const jogo = this.getAll()
        jogo.splice(id, 1)
        localStorage.setItem('jogo', JSON.stringify(jogo))
    }

}

export default new JogoService()