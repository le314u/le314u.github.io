import Player from './Player.js'; 

class Ranking{

  constructor(players){
      this.players = players
      this.playersID = []
      for (let player in players) {
        this.playersID.push( player.getId() )
      }          
  }

  order(){
      const funcaoComparacao = (x,y) => x.getPontos() - y.getPontos();
      // Embaralhar o array usando o método sort com a função de comparação
      this.playersID.sort(funcaoComparacao);
  }

  getOrder(){
    return this.playersID
  }

}

export default Ranking;