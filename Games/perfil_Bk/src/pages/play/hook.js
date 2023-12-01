import Card from "../../modules/Card"
import Deck from "../../modules/Deck"
import Player from "../../modules/Player"
import Tabuleiro from "../../modules/Tabuleiro"
import Ranking from "../../modules/Ranking"

let cards = [
    new Card(1, "Harry Potter", "Gryffindor", "Usa óculos", "É o protagonista", "Tem uma cicatriz na testa", "É branco", "Apareceu em todos os filmes"),
    new Card(2, "Hermione Granger", "Gryffindor", "Inteligente e estudiosa", "É uma bruxa nascida trouxa", "Tem cabelos castanhos", "Parte do trio principal", "Aparência nos 8 filmes"),
    new Card(3, "Ron Weasley", "Gryffindor", "Amigo de Harry e Hermione", "Vem de uma família grande", "Ginger (cabelos ruivos)", "Joga xadrez de bruxo", "Foi um jogador de quadribol"),
    new Card(4, "Albus Dumbledore", "Gryffindor", "Diretor de Hogwarts", "Um dos bruxos mais poderosos", "Tem uma Fênix chamada Fawkes", "Barba longa e branca", "Líder da Ordem da Fênix"),
    new Card(5, "Severus Snape", "Slytherin", "Professor de Poções", "Membro da Ordem da Fênix", "Teve uma relação complexa com Harry", "Mantém uma expressão séria", "Morreu protegendo Hogwarts"),
    new Card(6, "Luna Lovegood", "Ravenclaw", "Vê criaturas mágicas", "É conhecida por suas excentricidades", "Usa um colar de dirigível de plumas", "Amiga de Harry", "Ajudou na Batalha de Hogwarts"),
    new Card(7, "Sirius Black", "Gryffindor", "Padrinho de Harry", "Animagus (cachorro negro)", "Preso em Azkaban injustamente", "Família dos Black", "Membro da Ordem da Fênix"),
    new Card(8, "Bellatrix Lestrange", "Slytherin", "Leal a Lord Voldemort", "Cometeu muitos crimes", "Irmã de Narcissa Malfoy", "Matou Sirius Black", "Lutou na Batalha de Hogwarts"),
    new Card(9, "Dobby", "Não aplicável", "Elfo doméstico", "Libertado por Harry", "Usa uma meia como símbolo de liberdade", "Ajuda Harry em vários momentos", "Morre protegendo amigos"),
    new Card(10, "Nymphadora Tonks", "Hufflepuff", "Metamorfomaga", "Auror", "Casou-se com Remus Lupin", "Mudou a aparência por diversão", "Membro da Ordem da Fênix"),
    new Card(11, "Ginny Weasley", "Gryffindor", "Jogadora de quadribol", "Namorada de Harry", "Irmã mais nova de Ron", "Teve um diário possuído por Voldemort", "Participou da Batalha de Hogwarts"),
    new Card(12, "Cedric Diggory", "Hufflepuff", "Campeão de Hogwarts no Torneio Tribruxo", "Bom jogador de quadribol", "Morreu no Cemitério de Little Hangleton", "Foi interpretado por Robert Pattinson", "Casa Hufflepuff"),
    new Card(13, "Remus Lupin", "Gryffindor", "Lobisomem", "Professor de Defesa Contra as Artes das Trevas", "Melhor amigo de Sirius Black", "Casou-se com Nymphadora Tonks", "Membro da Ordem da Fênix"),
    new Card(14, "Minerva McGonagall", "Gryffindor", "Professora de Transfiguração", "Diretora de Hogwarts", "Transforma-se em um gato", "Líder da Casa Gryffindor", "Membro da Ordem da Fênix"),
    new Card(15, "Draco Malfoy", "Slytherin", "Rival de Harry", "Vem de uma família de sangue puro", "Teve uma missão para matar Dumbledore", "Tornou-se mais tolerante após a guerra", "Casa Slytherin"),
    new Card(16, "Neville Longbottom", "Gryffindor", "Herói na Batalha de Hogwarts", "Matou a serpente Nagini", "Professor de Herbologia em Hogwarts", "Esqueceu Senha de Gryffindor", "Amigo leal de Harry"),
    new Card(17, "Fleur Delacour", "Beauxbatons Academy", "Participante no Torneio Tribruxo", "Casou-se com Bill Weasley", "Meio-Veela", "Bela e elegante", "Participou na Batalha de Hogwarts"),
    new Card(18, "Kingsley Shacklebolt", "Ministro da Magia", "Auror", "Participou na Batalha de Hogwarts", "Era leal a Dumbledore e Harry", "Habilidades em magia de proteção", "Ministro competente"),
    new Card(19, "Lily Potter", "Gryffindor", "Mãe de Harry", "Morreu protegendo Harry", "Casada com James Potter", "Habilidades em Poções", "Vista no espelho de Ojesed por Harry"),
    new Card(20, "James Potter", "Gryffindor", "Pai de Harry", "Morreu protegendo Harry", "Casado com Lily Potter", "Apanhador talentoso", "Animago em forma de cervo"),
    new Card(21, "Cho Chang", "Ravenclaw", "Jogadora de Quadribol", "Teve um relacionamento com Harry", "Participou no Torneio Tribruxo", "Bela e inteligente", "Casa Ravenclaw"),
    new Card(22, "Argus Filch", "Não aplicável", "Zelador em Hogwarts", "Detesta estudantes travessos", "Cuida de Mrs. Norris (gato)", "Sem habilidades mágicas", "Vigilante de Hogwarts"),
    new Card(23, "Frodo Baggins", "Hobbit", "Portador do Um Anel", "Amigo de Samwise Gamgee", "Deixou a Terra-média no final", "Protagonista da trilogia", "Partiu para o Oeste"),
    new Card(24, "Aragorn", "Homem", "Herdeiro de Isildur", "Futuro Rei de Gondor", "Amor de Arwen", "Lutou na Batalha do Pelennor Fields", "Comandou os exércitos da Terra-média"),
    new Card(25, "Gandalf", "Maia/Istar", "O Cinzento/O Branco", "Líder da Sociedade do Anel", "Istari enviado pelos Valar", "Maior feiticeiro da Terra-média", "Membro da Ordem dos Magos"),
    new Card(26, "Legolas", "Elfo", "Arqueiro habilidoso", "Príncipe da Floresta das Trevas", "Membro da Sociedade do Anel", "Amigo de Gimli", "Participou na Batalha do Abismo de Helm"),
    new Card(27, "Gimli", "Anão", "Guerrilheiro corajoso", "Amigo de Legolas", "Membro da Sociedade do Anel", "Participou na Batalha do Abismo de Helm", "Contou o número de orcs abatidos"),
    new Card(28, "Samwise Gamgee", "Hobbit", "Leal amigo de Frodo", "Participou da destruição do Um Anel", "Tornou-se prefeito de Hobbiton", "Voltou para casa com Frodo", "Corajoso e fiel"),
    new Card(29, "Arwen", "Elfa", "Filha de Elrond", "Amor de Aragorn", "Escolheu ser mortal por amor a Aragorn", "Possui a Estrela de Evenstar", "Participou da Batalha do Pelennor Fields"),
    new Card(30, "Faramir", "Homem de Gondor", "Irmão de Boromir", "Líder de Gondor após a Guerra do Anel", "Casou-se com Éowyn", "Mostrou compaixão por Frodo e Sam", "Comandante de Gondor"),
    new Card(31, "Galadriel", "Elfa", "Senhora de Lothlórien", "Possui o Anel de Nenya", "Ajudou Frodo e seus companheiros", "Poderosa e sábia", "Recusou a tentação do Um Anel"),
    new Card(32, "Boromir", "Homem de Gondor", "Irmão de Faramir", "Inicialmente cobiçou o Um Anel", "Morreu defendendo Merry e Pippin", "Arrependeu-se antes de morrer", "Membro da Sociedade do Anel"),
    new Card(33, "Sauron", "Maiar", "Senhor do Escuro", "Criador do Um Anel", "Buscou dominar a Terra-média", "Derrotado na Guerra do Anel", "Perdeu sua forma física"),
    new Card(34, "Elrond", "Elfo", "Senhor de Rivendell", "Pai de Arwen", "Membro do Conselho de Elrond", "Conselheiro de Frodo", "Detentor de Vilya, o Anel do Ar"),
    new Card(35, "Théoden", "Homem de Rohan", "Rei de Rohan", "Comandante em Helm's Deep", "Morreu na Batalha do Pelennor Fields", "Inspirou seu povo", "Foi corrompido por Saruman"),
    new Card(36, "Treebeard", "Ent", "Pastor dos Ents", "Guardião da Floresta de Fangorn", "Participou da destruição de Isengard", "Lento para ação, mas poderoso", "Irritou-se com Saruman"),
    new Card(37, "Bilbo Baggins", "Hobbit", "Portador do Um Anel por muitos anos", "Tio de Frodo", "Deixou a Terra-média no final", "Autor do Livro Vermelho", "Envelheceu lentamente devido ao Um Anel"),
    new Card(39, "Gollum/Smeagol", "Hobbit corrompido", "Antigo portador do Um Anel", "Dividido entre duas personalidades", "Guiou Frodo e Sam até Mordor", "Finalmente destruiu o Um Anel", "Trágico e complexo"),
    new Card(30, "Éowyn", "Mulher de Rohan", "Matou o Rei Bruxo de Angmar", "Disfarçou-se como homem para lutar", "Prima de Éomer", "Enamorada de Aragorn inicialmente", "Corajosa e destemida"),

]

let deck = new Deck(cards)

let players = [
    new Player("Michelly"),
    new Player("Lucas")
]

let tabuleiro = new Tabuleiro( players, deck)

function handleAcertou(setCard,setQtd){
    return ()=>{
        tabuleiro.acertou()
        setQtd(tabuleiro.getNumberTips())
        setCard(tabuleiro.getCard())
    }
}

function handleErrou(setCard,setQtd){
    return ()=>{
        tabuleiro.errou()
        console.log(tabuleiro.getCard())
        setQtd(tabuleiro.getNumberTips())
        setCard(tabuleiro.getCard())
    }
}

const GAME = (setCard,setQtd)=>{
    
    return {
        acertou: handleAcertou(setCard,setQtd),
        errou: handleErrou(setCard,setQtd),
        player: tabuleiro.currentPlayer.bind(tabuleiro),
        next: tabuleiro.nextDica.bind(tabuleiro),
        getCard: tabuleiro.getCard.bind(tabuleiro),
        readCard: tabuleiro.readCard.bind(tabuleiro),
        enabledTips: tabuleiro.getNumberTips.bind(tabuleiro)
    }

}


export default GAME;