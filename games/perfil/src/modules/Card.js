class Card{
    constructor(id, resposta, p1, p2, p3, p4, p5) {
        this.id = id;
        this.resposta = resposta;
        this.p1 = p1;
        this.p2 = p2;
        this.p3 = p3;
        this.p4 = p4;
        this.p5 = p5;
    }

    getPergunta(num) {
        switch (num) {
            case 1:
                return this.p1;
            case 2:
                return this.p2;
            case 3:
                return this.p3;
            case 4:
                return this.p4;
            case 5:
                return this.p5;
            default:
                return "Pergunta não encontrada";
        }
    }

    getResposta(){
        return this.resposta;
    }

    getId(){
        return this.id;
    }

}

class buildCard{
    constructor(){
        this.id = 0;
    }

    build( resposta, p1, p2, p3, p4, p5){
        this.id = this.id + 1

        const card = new Card(this.id, resposta, p1, p2, p3, p4, p5)
        return card
    }

}

export default buildCard;