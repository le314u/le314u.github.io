class Player{

    constructor(nome, pontos=0){
        this.nome = nome;
        this.pontos = pontos;
    }
    
    getName(){
        return this.nome;
    }

    addPontos(ponto){
        this.pontos=this.pontos+ponto;
    }

    removePontos(pontos){
        let pontuacao = this.pontos - pontos
        this.pontos = pontuacao < 0 ? 0 : pontuacao
    }

    setPontos(pontos){
        this.pontos = pontos;
    }

    getPontos(){
        return this.pontos;
    }
}


module.exports = Player;