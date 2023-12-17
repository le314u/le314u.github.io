import Player from "../../modules/Player"
import Tabuleiro from "../../modules/Tabuleiro"
import Ranking from "../../modules/Ranking"



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


const GAME = (setCard,setQtd)=>{
    let players = getPlayers();
    let tabuleiro = new Tabuleiro(players,100);

    return {
        acertou: handleAcertou(setCard,setQtd,tabuleiro),
        errou: handleErrou(setCard,setQtd,tabuleiro),
        player: tabuleiro.currentPlayer.bind(tabuleiro),
        tabuleiro:tabuleiro
    }

}


export default GAME;