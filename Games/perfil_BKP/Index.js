const Card = require('./modules/Card.js'); 
const Deck = require('./modules/Deck.js'); 
const Player = require('./modules/Player.js'); 
const Ranking = require('./modules/Ranking.js'); 
const Tabuleiro = require('./modules/Tabuleiro.js'); 

const p1 = new Player("Lucas")
const p2 = new Player("Michelly")
const p3 = new Player("Kelly")
const players = [p1,p2,p3]

const c1 = new Card(1, "Harry Potter", "O 'Menino Que Sobreviveu'", "Nasceu em 31 de julho de 1980", "Estudou na Escola de Magia e Bruxaria de Hogwarts", "Apanhador no time de quadribol da Grifinória", "Possui uma cicatriz em formato de raio na testa");
const c2 = new Card(2, "Hermione Granger", "Nascida trouxa, brilhante estudante", "Membro da Grifinória", "Uma das melhores bruxas de sua idade", "Tem um gato chamado Bichento", "É conhecida por sua determinação e inteligência");
const c3 = new Card(3, "Ronald Weasley", "Vindo de uma família grande e humilde", "Membro da Grifinória", "Jogador de xadrez de nível avançado", "Possui uma varinha de salgueiro", "Tem uma aranha de estimação chamada Aragogue");
const c4 = new Card(4, "Alvo Dumbledore", "Um dos bruxos mais poderosos de todos os tempos", "Diretor de Hogwarts", "Possui a Fênix Fawkes como animal de estimação", "Criou a Ordem da Fênix", "Teve a irmã Ariana Dumbledore");
const c5 = new Card(5, "Severo Snape", "Mestre em poções e ocultismo", "Membro da casa Sonserina", "Professor de Poções e posteriormente de Defesa Contra as Artes das Trevas", "Sempre protegeu Harry Potter, apesar das aparências", "Foi apaixonado por Lílian Potter");
const c6 = new Card(6, "Rúbeo Hagrid", "Guardião das Chaves e dos Terrenos de Hogwarts", "Fã de criaturas mágicas", "Meio-gigante", "Tem um amor por criaturas incomuns", "É próximo de Harry, Hermione e Rony");
const c7 = new Card(7, "Luna Lovegood", "Apaixonada por coisas estranhas e incomuns", "Membro da Corvinal", "Vêstrals são visíveis para ela", "Cria acessórios para radinhos dirigíveis", "Ajuda Harry a encontrar as relíquias da morte");
const c8 = new Card(8, "Sirius Black", "Padrinho de Harry Potter", "Fugitivo de Azkaban", "Membro da família Black", "Animago - assume a forma de um cão negro", "Tem uma história conturbada com a família");
const c9 = new Card(9, "Minerva McGonagall", "Professora de Transfiguração em Hogwarts", "Diretora da casa Grifinória", "Extremamente habilidosa em duelos", "Gata animaga, se transforma em uma gata", "É leal e comprometida com a escola");
const c10 = new Card(10, "Lord Voldemort", "Nascido como Tom Riddle", "Procurava imortalidade através das Horcruxes", "O bruxo das trevas mais poderoso", "Arqui-inimigo de Harry Potter", "Comandante do grupo Comensais da Morte");
const cards = [c1,c2,c3,c4,c5,c6,c7,c8,c9,c10]

const deck = new Deck(cards)

const game = new Tabuleiro(players, deck)

