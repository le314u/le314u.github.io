import buildCard from "../../modules/Card"
import Deck from "../../modules/Deck"
import Player from "../../modules/Player"
import Tabuleiro from "../../modules/Tabuleiro"
import Ranking from "../../modules/Ranking"

const card = new buildCard()


let cards = [
    card.build("Flexbox", "É um modelo de layout unidimensional.", "Permite que os elementos se organizem em relação a um eixo.", "É útil para criar layouts flexíveis e responsivos.", "Pode ser usado para alinhar elementos e distribuir espaço entre eles.", "É amplamente suportado pelos navegadores modernos."),
    card.build("Grid", "É um sistema de layout bidimensional.", "Permite a criação de layouts complexos com linhas e colunas.", "É especialmente útil para layouts de página.", "Oferece controle preciso sobre o posicionamento dos elementos.", "É suportado por muitos navegadores modernos."),
    card.build("Transições", "Permitem criar animações suaves entre estados de estilo.", "Podem ser aplicadas a várias propriedades CSS.", "Podem ser acionadas por eventos como hover ou clique.", "Oferecem controle sobre a duração e o timing da animação.", "São uma forma eficaz de melhorar a experiência do usuário."),
    card.build("Transformações", "Permitem modificar a aparência de um elemento no espaço 2D ou 3D.", "Incluem operações como rotação, escala e translação.", "São frequentemente usadas em conjunto com animações.", "Podem ser aplicadas a elementos individuais ou grupos.", "Adicionam dinamismo e interatividade ao design."),
    card.build("Media Queries", "Permitem aplicar estilos com base nas características do dispositivo.", "São usadas para criar layouts responsivos.", "Podem ser usadas para ajustar estilos para diferentes tamanhos de tela.", "Contribuem para uma experiência consistente em dispositivos variados.", "São fundamentais para o design web moderno."),
    card.build("Pseudo-classes", "Seletores que especificam um estado específico de um elemento.", "Exemplos incluem :hover, :active e :focus.", "Permitem estilizar elementos com base em interações do usuário.", "Adicionam estilos dinâmicos a elementos específicos.", "Melhoram a usabilidade e a acessibilidade."),
    card.build("Variáveis CSS", "Permitem armazenar valores para reutilização em um documento CSS.", "São definidas usando a sintaxe --nome-variavel.", "Podem ser aplicadas a propriedades em qualquer lugar do CSS.", "Facilitam a manutenção e a personalização do estilo.", "Contribuem para um código mais limpo e eficiente."),
    card.build("Sombras Box", "Adicionam sombras a elementos.", "Podem ser controladas em termos de cor, desfoque e posição.", "São frequentemente usadas para criar profundidade e destaque.", "São uma parte importante do design moderno.", "Podem ser aplicadas a qualquer elemento usando propriedades como box-shadow."),
    card.build("Gradientes", "Permitem a transição suave entre duas ou mais cores.", "Podem ser aplicados como plano de fundo de elementos.", "Incluem tipos como linear e radial gradients.", "Podem ser personalizados para criar efeitos visuais interessantes.", "Contribuem para designs atraentes e modernos."),
    card.build("Seletores Avançados", "Permitem seleções mais específicas de elementos.", "Incluem seletores como :not(), :nth-child(), e :nth-of-type().", "Aumentam a flexibilidade e o poder do CSS.", "Podem ser combinados para seleções mais complexas.", "São úteis para estilizar elementos de maneira precisa."),

    card.build( "Metáfora", "Figura de linguagem que utiliza uma palavra ou expressão com um significado diferente e semelhante por analogia.", "Exemplo: O céu está chorando.", "A chuva é comparada às lágrimas, sugerindo tristeza ou melancolia." ),
    card.build( "Metonímia", "Figura de linguagem em que uma palavra é usada no lugar de outra, estabelecendo uma relação de proximidade ou contiguidade.", "Exemplo: Gosto de ler Machado de Assis.", "O autor (Machado de Assis) é mencionado usando o nome de uma de suas obras, estabelecendo uma relação metonímica." ),
    card.build( "Assonância", "Repetição de sons vocálicos em uma sequência de palavras, conferindo musicalidade ao texto.", "Exemplo: O rato roeu a roupa do rei de Roma.", "A repetição do som do 'o' cria um efeito sonoro agradável." ),
    card.build( "Polissíndeto", "Repetição da conjunção (como 'e' ou 'ou') em uma sequência de termos, conferindo ênfase e ritmo.", "Exemplo: Ele estudava e trabalhava e escrevia e participava de projetos.", "A repetição da conjunção 'e' destaca cada uma das ações realizadas pelo sujeito." ),
    card.build( "Metalinguagem", "Uso da linguagem para falar sobre a própria linguagem, explicando ou comentando seu funcionamento.", "Exemplo: A palavra 'livro' tem cinco letras.", "A frase comenta sobre a palavra 'livro' usando a própria linguagem para descrevê-la." ),
    card.build( "Antítese", "Contraposição de ideias ou palavras de significado oposto, criando um efeito de contraste.", "Exemplo: O amor é fogo que arde sem se ver, é ferida que dói e não se sente.", "Contraste entre a ideia de amor como algo intenso, mas muitas vezes imperceptível." ),
    card.build( "Aliteração", "Repetição de sons consonantais no início de palavras próximas, conferindo sonoridade ao texto.", "Exemplo: O rato roeu a roupa do rei de Roma.", "A repetição do som do 'r' cria um efeito sonoro marcante." ),
    card.build( "Ironia", "Expressão de ideia oposta àquela que se quer dar a entender, geralmente com um tom de zombaria ou crítica.", "Exemplo: Que dia maravilhoso! (em um dia chuvoso e frio)", "A expressão 'dia maravilhoso' é usada ironicamente para descrever um dia desagradável." ),
    card.build( "Eufemismo", "Uso de expressões suaves ou atenuadas para abordar algo desagradável, rude ou ofensivo.", "Exemplo: Ele nos deixou (em vez de 'Ele morreu').", "O eufemismo suaviza a dureza da expressão referente à morte." ),
    card.build( "Hipérbole", "Exagero proposital na expressão de uma ideia, buscando ênfase ou efeito cômico.", "Exemplo: Estou morrendo de fome!", "A afirmação exagerada enfatiza a intensidade da fome de maneira não literal." ),
]

let cards_ERROR = [
    card.build("Harry Potter", "Gryffindor", "Usa óculos", "É o protagonista", "Tem uma cicatriz na testa", "É branco", "Apareceu em todos os filmes"),
    card.build("Hermione Granger", "Gryffindor", "Inteligente e estudiosa", "É uma bruxa nascida trouxa", "Tem cabelos castanhos", "Parte do trio principal", "Aparência nos 8 filmes"),
    card.build("Ron Weasley", "Gryffindor", "Amigo de Harry e Hermione", "Vem de uma família grande", "Ginger (cabelos ruivos)", "Joga xadrez de bruxo", "Foi um jogador de quadribol"),
    card.build("Albus Dumbledore", "Gryffindor", "Diretor de Hogwarts", "Um dos bruxos mais poderosos", "Tem uma Fênix chamada Fawkes", "Barba longa e branca", "Líder da Ordem da Fênix"),
    card.build("Severus Snape", "Slytherin", "Professor de Poções", "Membro da Ordem da Fênix", "Teve uma relação complexa com Harry", "Mantém uma expressão séria", "Morreu protegendo Hogwarts"),
    card.build("Luna Lovegood", "Ravenclaw", "Vê criaturas mágicas", "É conhecida por suas excentricidades", "Usa um colar de dirigível de plumas", "Amiga de Harry", "Ajudou na Batalha de Hogwarts"),
    card.build("Sirius Black", "Gryffindor", "Padrinho de Harry", "Animagus (cachorro negro)", "Preso em Azkaban injustamente", "Família dos Black", "Membro da Ordem da Fênix"),
    card.build("Bellatrix Lestrange", "Slytherin", "Leal a Lord Voldemort", "Cometeu muitos crimes", "Irmã de Narcissa Malfoy", "Matou Sirius Black", "Lutou na Batalha de Hogwarts"),
    card.build("Dobby", "Não aplicável", "Elfo doméstico", "Libertado por Harry", "Usa uma meia como símbolo de liberdade", "Ajuda Harry em vários momentos", "Morre protegendo amigos"),
    card.build("Nymphadora Tonks", "Hufflepuff", "Metamorfomaga", "Auror", "Casou-se com Remus Lupin", "Mudou a aparência por diversão", "Membro da Ordem da Fênix"),
    card.build("Ginny Weasley", "Gryffindor", "Jogadora de quadribol", "Namorada de Harry", "Irmã mais nova de Ron", "Teve um diário possuído por Voldemort", "Participou da Batalha de Hogwarts"),
    card.build("Cedric Diggory", "Hufflepuff", "Campeão de Hogwarts no Torneio Tribruxo", "Bom jogador de quadribol", "Morreu no Cemitério de Little Hangleton", "Foi interpretado por Robert Pattinson", "Casa Hufflepuff"),
    card.build("Remus Lupin", "Gryffindor", "Lobisomem", "Professor de Defesa Contra as Artes das Trevas", "Melhor amigo de Sirius Black", "Casou-se com Nymphadora Tonks", "Membro da Ordem da Fênix"),
    card.build("Minerva McGonagall", "Gryffindor", "Professora de Transfiguração", "Diretora de Hogwarts", "Transforma-se em um gato", "Líder da Casa Gryffindor", "Membro da Ordem da Fênix"),
    card.build("Draco Malfoy", "Slytherin", "Rival de Harry", "Vem de uma família de sangue puro", "Teve uma missão para matar Dumbledore", "Tornou-se mais tolerante após a guerra", "Casa Slytherin"),
    card.build("Neville Longbottom", "Gryffindor", "Herói na Batalha de Hogwarts", "Matou a serpente Nagini", "Professor de Herbologia em Hogwarts", "Esqueceu Senha de Gryffindor", "Amigo leal de Harry"),
    card.build("Fleur Delacour", "Beauxbatons Academy", "Participante no Torneio Tribruxo", "Casou-se com Bill Weasley", "Meio-Veela", "Bela e elegante", "Participou na Batalha de Hogwarts"),
    card.build("Kingsley Shacklebolt", "Ministro da Magia", "Auror", "Participou na Batalha de Hogwarts", "Era leal a Dumbledore e Harry", "Habilidades em magia de proteção", "Ministro competente"),
    card.build("Lily Potter", "Gryffindor", "Mãe de Harry", "Morreu protegendo Harry", "Casada com James Potter", "Habilidades em Poções", "Vista no espelho de Ojesed por Harry"),
    card.build("James Potter", "Gryffindor", "Pai de Harry", "Morreu protegendo Harry", "Casado com Lily Potter", "Apanhador talentoso", "Animago em forma de cervo"),
    card.build("Cho Chang", "Ravenclaw", "Jogadora de Quadribol", "Teve um relacionamento com Harry", "Participou no Torneio Tribruxo", "Bela e inteligente", "Casa Ravenclaw"),
    card.build("Argus Filch", "Não aplicável", "Zelador em Hogwarts", "Detesta estudantes travessos", "Cuida de Mrs. Norris (gato)", "Sem habilidades mágicas", "Vigilante de Hogwarts"),
    card.build("Frodo Baggins", "Hobbit", "Portador do Um Anel", "Amigo de Samwise Gamgee", "Deixou a Terra-média no final", "Protagonista da trilogia", "Partiu para o Oeste"),
    card.build("Aragorn", "Homem", "Herdeiro de Isildur", "Futuro Rei de Gondor", "Amor de Arwen", "Lutou na Batalha do Pelennor Fields", "Comandou os exércitos da Terra-média"),
    card.build("Gandalf", "Maia/Istar", "O Cinzento/O Branco", "Líder da Sociedade do Anel", "Istari enviado pelos Valar", "Maior feiticeiro da Terra-média", "Membro da Ordem dos Magos"),
    card.build("Legolas", "Elfo", "Arqueiro habilidoso", "Príncipe da Floresta das Trevas", "Membro da Sociedade do Anel", "Amigo de Gimli", "Participou na Batalha do Abismo de Helm"),
    card.build("Gimli", "Anão", "Guerrilheiro corajoso", "Amigo de Legolas", "Membro da Sociedade do Anel", "Participou na Batalha do Abismo de Helm", "Contou o número de orcs abatidos"),
    card.build("Samwise Gamgee", "Hobbit", "Leal amigo de Frodo", "Participou da destruição do Um Anel", "Tornou-se prefeito de Hobbiton", "Voltou para casa com Frodo", "Corajoso e fiel"),
    card.build("Arwen", "Elfa", "Filha de Elrond", "Amor de Aragorn", "Escolheu ser mortal por amor a Aragorn", "Possui a Estrela de Evenstar", "Participou da Batalha do Pelennor Fields"),
    card.build("Faramir", "Homem de Gondor", "Irmão de Boromir", "Líder de Gondor após a Guerra do Anel", "Casou-se com Éowyn", "Mostrou compaixão por Frodo e Sam", "Comandante de Gondor"),
    card.build("Galadriel", "Elfa", "Senhora de Lothlórien", "Possui o Anel de Nenya", "Ajudou Frodo e seus companheiros", "Poderosa e sábia", "Recusou a tentação do Um Anel"),
    card.build("Boromir", "Homem de Gondor", "Irmão de Faramir", "Inicialmente cobiçou o Um Anel", "Morreu defendendo Merry e Pippin", "Arrependeu-se antes de morrer", "Membro da Sociedade do Anel"),
    card.build("Sauron", "Maiar", "Senhor do Escuro", "Criador do Um Anel", "Buscou dominar a Terra-média", "Derrotado na Guerra do Anel", "Perdeu sua forma física"),
    card.build("Elrond", "Elfo", "Senhor de Rivendell", "Pai de Arwen", "Membro do Conselho de Elrond", "Conselheiro de Frodo", "Detentor de Vilya, o Anel do Ar"),
    card.build("Théoden", "Homem de Rohan", "Rei de Rohan", "Comandante em Helm's Deep", "Morreu na Batalha do Pelennor Fields", "Inspirou seu povo", "Foi corrompido por Saruman"),
    card.build("Treebeard", "Ent", "Pastor dos Ents", "Guardião da Floresta de Fangorn", "Participou da destruição de Isengard", "Lento para ação, mas poderoso", "Irritou-se com Saruman"),
    card.build("Bilbo Baggins", "Hobbit", "Portador do Um Anel por muitos anos", "Tio de Frodo", "Deixou a Terra-média no final", "Autor do Livro Vermelho", "Envelheceu lentamente devido ao Um Anel"),
    card.build("Gollum/Smeagol", "Hobbit corrompido", "Antigo portador do Um Anel", "Dividido entre duas personalidades", "Guiou Frodo e Sam até Mordor", "Finalmente destruiu o Um Anel", "Trágico e complexo"),
    card.build("Éowyn", "Mulher de Rohan", "Matou o Rei Bruxo de Angmar", "Disfarçou-se como homem para lutar", "Prima de Éomer", "Enamorada de Aragorn inicialmente", "Corajosa e destemida"),
]



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



function getPlayer(){
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
    let tabuleiro = new Tabuleiro( getPlayer(), getDeck(), sessionStorage.getItem("maxPoints"))

    return {
        acertou: handleAcertou(setCard,setQtd,tabuleiro),
        errou: handleErrou(setCard,setQtd,tabuleiro),
        player: tabuleiro.currentPlayer.bind(tabuleiro),
        next: tabuleiro.nextDica.bind(tabuleiro),
        getCard: tabuleiro.getCard.bind(tabuleiro),
        readCard: tabuleiro.readCard.bind(tabuleiro),
        enabledTips: tabuleiro.getNumberTips.bind(tabuleiro)
    }

}


export default GAME;