import buildCard from "../../modules/Card"
import Deck from "../../modules/Deck"
import Player from "../../modules/Player"
import Tabuleiro from "../../modules/Tabuleiro"
import Ranking from "../../modules/Ranking"
import get from '../../modules/Ajax'


// Função assíncrona para usar await
const fetchData = async () => {
    try {
      const data = await get();
      return data
    } catch (error) {
      console.error('Erro ao obter dados:', error);
      return null
    }
  };
  
// Chama a função assíncrona
let data = await fetchData();
const card = new buildCard()
let cards = data.map((value, index, array) => {
    return card.build(value.resposta,value.p1,value.p2,value.p3,value.p4,value.p5)
})



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

function getDeck(){
    const deck = new Deck(cards)
    deck.shuffleDeck()
    return deck
}


const GAME = (setCard,setQtd)=>{
    let players = getPlayers();
    let deck =  getDeck()
    let tabuleiro = new Tabuleiro(players, deck, sessionStorage.getItem("maxPoints"))

    return {
        acertou: handleAcertou(setCard,setQtd,tabuleiro),
        errou: handleErrou(setCard,setQtd,tabuleiro),
        player: tabuleiro.currentPlayer.bind(tabuleiro),
        next: tabuleiro.nextDica.bind(tabuleiro),
        getCard: tabuleiro.getCard.bind(tabuleiro),
        readCard: tabuleiro.readCard.bind(tabuleiro),
        enabledTips: tabuleiro.getNumberTips.bind(tabuleiro),
        tabuleiro:tabuleiro
    }

}


export default GAME;