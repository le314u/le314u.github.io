const Card = require('./Card.js'); // Importa o arquivo exemplo.js

class Deck{
    constructor(cards){
        this.cards = {}
        this.indices = []
        cards.forEach((card) => {
            this.addCard(card)
        })
    }

    //Adiciona uma carta ao Deck
    addCard(card){
        this.cards[card.getId()] = card
        this.indices.push(card.getId())
    }

    //Remove uma carta do Deck
    removeCard(id){
        delete this.cards[id];
        const indexToRemove = this.indices.indexOf(id);
        // Se o índice for encontrado no array, remove o elemento
        if (indexToRemove !== -1) {
            this.indices.splice(indexToRemove, 1); // Removendo o elemento do array
        }
    }

    //Retorna uma carta de acordo com o ID
    getCard(){
        return this.cards[this.indices[0]]
    }

    //Embaralha o Deck
    shuffleDeck(){
        const funcaoComparacao = () => Math.random() - 0.5;
        // Embaralhar o array usando o método sort com a função de comparação
        this.indices.sort(funcaoComparacao);
    }
}


module.exports = Deck;