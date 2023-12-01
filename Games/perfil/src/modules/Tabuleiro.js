import Card from'./Card.js';
import Deck from'./Deck.js';
import Player from'./Player.js';
import Ranking from'./Ranking.js';

class Tabuleiro{
    constructor(players,deck){
        this.maxPontos = 100;
        this.qtdPerguntas = 1;
        this.players = players;
        this.playerID = 0;
        this.deck_mont = deck
        this.deck_discard = new Deck([])
        this.card = deck.getCard()
    }

    //Retorna o Player atual
    currentPlayer(){
        return this.players[this.playerID]
    }
    //Retorna o numero de dicas disponiveis
    getNumberTips(){
        return this.qtdPerguntas
    }
    //Passa para a proxima Dica
    nextDica(){
        this.qtdPerguntas = this.qtdPerguntas+1;
    }

    //Le a pergunta atual da carta
    readCard(){
        return this.card.getPergunta(this.qtdPerguntas)
    }

    //Retorna a carta
    getCard(){
        return this.card
    }

    //Define a Quantidade Maxima de Pontos
    maxPontos(maxPontos){
        this.maxPontos = maxPontos;
    }

    //Passa para o proximo Jogador
    nextPlayer(){
        this.playerID = (this.playerID +1) %  this.players.length
    }

    //Pega a proxima carta
    nextCard(){
        console.log(this.qtdPerguntas)
        this.deck_mont.removeCard(this.card.getId())
        this.deck_discard.addCard(this.card)
        this.card = this.deck_mont.getCard()
        this.qtdPerguntas = 1
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
        this.nextCard()
    }

    //Procedimento caso tenha errado a pergunta
    errou(){
        this.nextPlayer()
        this.nextDica()
        if(this.qtdPerguntas > 5 ){
            this.qtdPerguntas = 1
            this.nextCard()
        }
    }
}

export default Tabuleiro
