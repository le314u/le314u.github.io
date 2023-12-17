import Player from'./Player.js';
import Ranking from'./Ranking.js';

class Tabuleiro{
    constructor(players,maxPontos){
        this.maxPontos = maxPontos;
        this.players = players;
        this.playerID = 0;
        this.wheel = []
    }

    //Retorna o Player atual
    currentPlayer(){
        return this.players[this.playerID]
    }
    //Retorna o numero de players
    getNumberTips(){
        return this.players.length;
    }

    //Define a Quantidade Maxima de Pontos
    maxPontos(maxPontos){
        this.maxPontos = maxPontos;
    }

    //Passa para o proximo Jogador
    nextPlayer(){
        this.playerID = (this.playerID +1) %  this.players.length
    }


    //Possivel pontuação
    currentpoints(){
        return 6 - this.qtdPerguntas
    }

    //Procedimento caso tenha acertado a pergunta
    acertou(){
        let player = this.currentPlayer()
        player.addPontos( this.currentpoints() )
        this.nextPlayer()
    }

    //Procedimento caso tenha errado a pergunta
    errou(){
        this.nextPlayer()
        if(this.qtdPerguntas > 5 ){
            this.qtdPerguntas = 1
            this.nextCard()
        }
    }
}

export default Tabuleiro
