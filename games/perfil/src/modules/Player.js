class Player{

    constructor(nome, pontos=0){
        this.nome = nome;
        this.pontos = pontos;
        this.color = randomRGB()
    }
    
    getCor(){
        return this.color;
    }
    
    getNome(){
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



function randomRGB() {
    // Gerar valores aleatórios para os componentes de cor (0 a 255)
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
  
    // Construir a string hexadecimal da cor
    var corHexadecimal = '#' + red.toString(16).padStart(2, '0') +
      green.toString(16).padStart(2, '0') +
      blue.toString(16).padStart(2, '0');
      
    return corHexadecimal;
  }

export default Player;