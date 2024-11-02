import buildCard from "../../modules/Card"
import Deck from "../../modules/Deck"
import Player from "../../modules/Player"
import Tabuleiro from "../../modules/Tabuleiro"

const card = new buildCard()

function handleAcertou(setCard,setQtd,tabuleiro){
    return ()=>{
        tabuleiro.acertou()
        setQtd(tabuleiro.getNumberTips())
        setCard(tabuleiro.getCard())
    }
}

function handleErrou(setCard,setQtd,tabuleiro){
    return ()=>{
        tabuleiro.errou()
        setQtd(tabuleiro.getNumberTips())
        setCard(tabuleiro.getCard())
    }
}

function getPlayers(){
    let players = []
    let nameKeys = Object.keys(sessionStorage)
    nameKeys.forEach((key, index, array) => {
        if(key.startsWith("name_")){
            players.push(
                new Player(sessionStorage.getItem(key)) 
            )
        }
    })
    return players;
}

function getDeck(cards){
    const deck = new Deck(cards)
    deck.shuffleDeck()
    return deck
}


const GAME = (data,setCard,setQtd)=>{
    let cards = data.map((value, index, array) => {
        return card.build(value.resposta,value.p1,value.p2,value.p3,value.p4,value.p5)
    })
    let deck =  getDeck(cards)
    let players = getPlayers();
    
    let maxPoints = sessionStorage.getItem("maxPoints");
    if (maxPoints === null) {
        maxPoints = 100; // Se for null, atribui 100
    }
    let tabuleiro = new Tabuleiro(players, deck, maxPoints);


    return {
        acertou: handleAcertou(setCard,setQtd,tabuleiro),
        errou: handleErrou(setCard,setQtd,tabuleiro),
        player: tabuleiro.currentPlayer.bind(tabuleiro),
        next: tabuleiro.nextDica.bind(tabuleiro),
        getCard: tabuleiro.getCard.bind(tabuleiro),
        readCard: tabuleiro.readCard.bind(tabuleiro),
        enabledTips: tabuleiro.getNumberTips.bind(tabuleiro),
        isWorking : tabuleiro.isWorking.bind(tabuleiro),
        tabuleiro:tabuleiro
    }

}


export default GAME;