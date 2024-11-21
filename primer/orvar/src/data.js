
const why_orvar = "É um comandante exigente para aprender sobre, desafiador de se jogar e requer que o piloto tenha conhecimento das listas de cEDH e dos padrões de jogo nos tornamos mais fortes quando adaptamos nosso deck a um meta conhecido. Não segue uma shell comum de cartas/loops, pois opera em um eixo completamente distinto, transformando instantâneos e feitiços baratos em rampas ou cópias de nossas poderosas permanentes, acontecendo praticamente em velocidade de instante Possui alta redundância e cheio de loops. Destacado em seu alto valor em jogos prolongados Prioriza o turno dos oponentes e trabalha muito bem em instant speed "
const intro = "Unico commander não singleton, comba em resposta, altamente consistente com backup de grayve, hard control (spellstuter e counterbalance), qualquer spell se torna um counter, não perde por mill (nexu) joga com o deck do oponente (clones), faz chain de tutores (tutor para tutor de tutor) altamente versatil, possui varias wins (deck over, batendo, softControl). "
const shell = "Não segue uma shell comum de cartas/loops, pois opera em um eixo completamente distinto, transformando instantâneos e feitiços baratos em rampas ou cópias de nossas poderosas permanentes, acontecendo praticamente em velocidade de instante"
const how_Play = [
  "Toda vez que você conjura uma mágica que tem como alvo uma permanente que você controla, você cria uma ficha que é uma cópia daquela permanente. Isso permite que você com uma mana azul crie uma copia de uma permanente de cmc {16} porem dificilmente você irá rodar cartas de cmc {16} a grande maravilha de jogar com orvar é ter acesso a clones pois com {1}{u} ou {3}{u} é possivel tirar um valor absurdo baseado nas criaturas dos oponentes, porem atentesse a regra da lenda pois caso a criatura seja lendária você não poderá ter mais de uma copia da mesma carta.",
  "Uma cantrip é uma mágica ou feitiço de custo baixo que faz um 'truque' e se repõe ou seja você tendo N cartas na mão ao castar uma cantrip continua com N cartas e faz algo a mais como por exemplo Brainstorm que te da o conhecimento das proximas 2 cartas a serem compradas ou Peek que lhe permite visualizar a mão do oponente ou até mesmo Cerulean Wisps que desvira uma criatura e a transforma em azul.",
  "O coração deste deck não são as cantrips mas sim as cantrips que dão alvo em algum tipo de permanente que você controla porem se a cantrip é anulada a copia ainda acontece, o pior dos mundos é quando a permanente alvo é destruida, exilada ou volta para a mão,nesse cenário que carinhosamente chamaremos de PESADELO você perde a permanente o triguer e a spell.",
  "O grande valor de optar por copiar lands e não pedras de mana esta na dificuldade de se remover land basicas o que evita que você caia em um PESADELO pois se você gasta todos os seus recursos para copiar pedras de mana e é acometido por uma Fenda Ciclônica você dificilmente consegue voltar para o jogo pois os tokens que voltam para mão deixam de existir e você parte do ponto de partida com um pequeno detalhe, seu deck tem apenas parcela das cartas",
  "Um cemitério cheio e um deck quase vazio , eu disse quase e não completamente vaio, ainda é uma boa situação de jogo pois com Santuario Mistico qualquer cantrip que de alvo simula Tutor Místico com um adendo, o fato do triguer resolver antes da spell permite que a carta escolhida vá para mão ou seja [ #1 copia santuário #2 escolhe qual mágica volta para o topo #3 resolve a cantrip]."
]

const array_ul = [
  "Singleton ( varias copias de uma permanente )",
  "Aura com shroud ( possivel anexar auras em criaturas com manto )",
  "Camada de copia e transformaçoes ( podendo ter varias copias da carta original mesmo que ela tenha sido alterada/transformada)",
  "Alterar ordem dos Triguers para tirar maior proveito",
  "Poder dar alvo em permanentes sem palavras chaves (trocar uma cor inexistente por outra cor aleatoria)"
]

const pros = [
  "Possui alta redundância e repleto de linhas.",  
  "Destacado em seu alto valor em jogos prolongados.",
  "Prioriza o turno dos oponentes e trabalha muito bem em instant speed.",
  "Não singleton ( varias copias de uma permanente ).",
  "Aura com shroud ( possivel anexar auras em criaturas com manto ).",
  "Camada de copia e transformaçoes ( podendo ter varias copias da carta original mesmo que ela tenha sido 'alterada/transformada').",
  "Alterar ordem dos Triguers para tirar maior proveito.",
  "Poder dar alvo em permanentes sem palavras chaves (trocar uma cor inexistente por outra cor aleatoria).",
  "Mono Blue Ramp, é um deck de big mana sendo que land básica é uma das mais dificeis de tirar",
]

const contra = [
  "Dependente do comandante que geralmente cai na curva 4",
  "Requer calculos constantes",
  "Muito dependente das janelas de oportunidade",
  "Sofre para heate bears e Rule of Law",
  "Possui erro de tradução, 'other permanents' ",
]

const habilidades = [
  "Morfoloide",
  "Toda vez que você conjurar uma mágica instantânea ou feitiço, se ela tiver como alvo uma ou mais permanentes que você controla, crie uma ficha que é uma cópia de uma dessas permanentes.",
  "Quando uma mágica ou habilidade controlada por um oponente fizer com que você descarte este card, crie uma ficha que é uma cópia da permanente alvo."
]

const explanishSkills = `
A habilidade de "Morfoloid" habilita o uso de cartas como Vermidério, Interrompedora Feérica e Golem, pois permite maximizar suas interações e efeitos em jogo;
A segunda habilidade diz que, sempre que você conjura uma mágica instantânea ou feitiço que tenha como alvo uma ou mais outras permanentes que você controla, você cria uma ficha que é uma cópia de uma dessas permanentes. Essa habilidade é incrivelmente poderosa, pois transforma qualquer cantrip de 1 mana em uma réplica de uma permanente já em jogo. Isso potencializa o seu campo de batalha rapidamente, permitindo um efeito de valor exponencial.
A ultima habilidade "Quando uma mágica ou habilidade controlada por um oponente fizer com que você descarte este card, crie uma ficha que é uma cópia da permanente alvo" é extremamente sinérgica em estratégias que exploram interações como Farol do Comando e Windfall (quando conjurada por um oponente).
`

const howPlay = (<div>Baseado em {(<a href='https://www.moxfield.com/decks/Y2cdFYZw_0-isKafmKXgNw/primer'> primers </a>)}  memoraveis. Aprendi o basico de como me portar jogando de orvar. O principal padrão de jogo do deck é descobrir como evitar tentativas de vitória por tempo suficiente para colocar Orvar em jogo e começar a agregar valor com um ou mais motores.
Primeiro passo é não perder. mas atentesse a parar apenas o que deve ser interrompido.
Segundo passo é obter o Santuário. castar Orvar e tirar o maior proveito disso possivel  (Copie terras e Compra cartas)
Terceiro passo é Copie mais terras. Compre mais cartas. e o melhor momento é na passagem para seu turno.
Por fim finalize o jogo em instant speed ou não...</div>)

const rules = [ 
  "A primeira habilidade desencadeada de Orvar é resolvida antes da mágica ou habilidade que a causou. (05/02/2021)\n",
  "Para a primeira habilidade desencadeada, a mágica instantânea ou feitiço pode ter como alvo outras coisas se também tiver como alvo uma ou mais permanentes que você controla; entretanto, a ficha que você cria pode copiar apenas as permanentes que você controla e que são alvos da mágica. Se a mágica tiver como alvo mais de uma permanente que você controla, você escolhe qual permanente a ficha está copiando ao criar a ficha. (05/02/2021)\n",
  "À medida que a primeira habilidade desencadeada tenta ser resolvida, a mágica que a desencadeou e os alvos daquela mágica são verificados novamente. Ignore qualquer alvo do feitiço que tenha deixado o campo de batalha nesse ponto. Se todas as permanentes que você controlava e que eram alvos tiverem deixado o campo de batalha nesse ponto, a habilidade desencadeada não fará nada e nenhuma ficha será criada. Se pelo menos uma permanente que você controla que seja alvo ainda estiver no campo de batalha, a habilidade desencadeada será resolvida, mesmo que aquela permanente seja agora um alvo ilegal para a mágica. (05/02/2021)\n",
  "Se a mágica em si tiver saído da pilha nesse ponto, use os alvos que ela tinha quando saiu da pilha para realizar o teste descrito acima. (05/02/2021)\n",
  "Para a segunda habilidade desencadeada, você pode escolher qualquer permanente como alvo, independentemente de quem a controla. (05/02/2021)\n",
  "A ficha copia exatamente o que está impresso na permanente e nada mais (a menos que a permanente seja uma ficha ou esteja copiando alguma outra coisa). Ele não copia se aquela permanente está virada ou desvirada, se ela tem algum marcador, se ela tem alguma Aura e/ou Equipamento anexado a ela, ou quaisquer efeitos que não sejam de cópia que tenham alterado seu poder, resistência, tipos, cor , e assim por diante. (05/02/2021)\n",
  "Se a permanente que está sendo copiada for ela própria uma ficha, a ficha criada pela última habilidade copia as características originais daquela ficha conforme declaradas pelo efeito que a criou. (05/02/2021)\n",
  "Se a permanente que está sendo copiada estiver copiando outra coisa, o token que você criar usará os valores copiáveis ​​daquela permanente. Na maioria dos casos, será uma cópia daquilo que a permanente está copiando. Se estiver copiando uma permanente ou card com {X}em seu custo de mana, X é 0. (05/02/2021)\n",
  "Se a permanente que está sendo copiada tiver{X}em seu custo de mana, X é 0. (05/02/2021)\n",
  "Quaisquer habilidades de entrada no campo de batalha da permanente copiada serão desencadeadas quando a ficha entrar no campo de batalha. Quaisquer habilidades “Conforme [esta permanente] entra no campo de batalha” ou “[Esta permanente] entra no campo de batalha com” da permanente copiada também funcionarão. (05/02/2021)\n",
  "Se uma mágica ou habilidade que um oponente controla permitir ou instruir você a escolher um card para descartar, e você descartar Orvar, sua última habilidade será desencadeada. (05/02/2021)\n",
  "Changeling é uma habilidade que define características. Ele funciona em todas as zonas, não apenas enquanto um card que o possui está no campo de batalha. (05/02/2021)\n",
  "O subtipo Shapeshifter que aparece na linha de tipo existe principalmente para reforçar o sabor. Uma carta de criatura com changeling é tanto um Elfo, um Anão, um Fractius, uma Cabra, um Covarde e um Zumbi quanto um Metamorfo. (05/02/2021)\n",
  "Se um efeito fizer com que uma criatura com changeling se torne um novo tipo de criatura, será apenas esse novo tipo de criatura. Ainda terá changeling; o efeito que faz com que todos os tipos de criatura sejam simplesmente substituídos. (05/02/2021)\n",
  "Se um efeito fizer com que uma criatura com changeling perca todas as habilidades, ela permanecerá com todos os tipos de criatura, mesmo que não tenha mais changeling. Isso ocorre porque o changeling se aplica antes do efeito que o remove. (05/02/2021)\n",
  "Se houver custos adicionais para conjurar uma mágica, ou se o custo para conjurar uma mágica for aumentado por um efeito (como aquele criado pela habilidade de Thalia, Guardiã de Thraben), aplique esses aumentos antes de aplicar reduções de custos. (04/11/2015)\n",
  "A redução de custos pode aplicar-se a custos alternativos, tais como custos de flashback.(04/11/2015)\n",
  "Se algum Clone de alguma forma entrar no campo de batalha ao mesmo tempo que outra criatura, Clone não poderá se tornar uma cópia daquela criatura. Você pode escolher apenas uma criatura que já esteja no campo de batalha. (01/07/2012)\n",
  "Se você colocar um card de Aura no campo de batalha com alguma habilidade como por exemplo a do Zur, você escolhe o que ele encantará ao entrar no campo de batalha. Uma Aura colocada no campo de batalha desta forma não tem como alvo nada (então ela poderia ser anexada a uma permanente do oponente com resistência à magia, por exemplo), mas a habilidade de encantar da Aura restringe aquilo a que ela pode ser anexada. Se a Aura não puder ser legalmente anexada a nada, ela permanecerá em seu grimório. (08/12/2022)\n",
  "Se uma Aura for colocada no campo de batalha sem ser conjurada, como por ser criada como uma ficha, o futuro controlador da Aura escolhe o que ela encantará ao entrar no campo de batalha. Uma Aura colocada no campo de batalha dessa forma não tem como alvo nada (então ela poderia ser anexada a uma permanente do oponente com resistência à magia, por exemplo), mas a habilidade de encantamento da Aura restringe ao que ela pode ser anexada. Se uma ficha de Aura não puder ser anexada legalmente a nada, ela não é criada.(17/04/2020)\n",
  "O custo de mana convertido de um card modal dupla face é baseado nas características da face que está sendo considerada. Na pilha e no campo de batalha, considere a face que está voltada para cima. Em todas as outras zonas, considere apenas a face frontal. Isso é diferente de como o custo de mana convertido de um card dupla face transformador é determinado. (25/09/2020)\n",
  "A redução de custos pode ser aplicada a custos alternativos, como custos de flashback.(04/11/2015)\n",
  "Se houver custos adicionais para conjurar uma magia, ou se o custo para conjurar uma magia for aumentado por um efeito (como o criado pela habilidade de Thalia, Guardiã de Thraben), aplique esses aumentos antes de aplicar as reduções de custo.(04/11/2015)\n",
  "O token copia exatamente o que foi impresso na permanente original e nada mais (a menos que a permanente esteja copiando outra coisa; veja abaixo). Ele não copia se a permanente está virada ou desvirada, se tem marcadores ou Auras e Equipamentos anexados a ela, ou quaisquer efeitos não copiados que mudaram seu poder, resistência, tipos, cor e assim por diante.(08/11/2016)\n",
  "Se a permanente copiada estiver copiando outra coisa (por exemplo, se a criatura copiada for um Clone), então a ficha entra no campo de batalha como qualquer coisa que a permanente copiou.(08/11/2016)\n",
  "Uma ficha que entra no campo de batalha como uma cópia de uma criatura virada para baixo é uma criatura 2/2 incolor virada para cima, sem nome, habilidades ou tipos de criatura.(25/02/2015)\n",
  "Se a criatura copiada tiver{X}em seu custo de mana, X é considerado zero.(25/02/2015)\n",
  "Se um efeito permitir que você jogue um terreno ou conjure uma mágica dentre um grupo de cards, você poderá jogar ou conjurar um card modal dupla face com qualquer face que atenda aos critérios daquele efeito. (25/09/2020)\n"
]

const DATA = { 
    array_ul,
    pros,
    contra,
    why_orvar,
    intro,
    shell,
    rules,
    howPlay,
    habilidades,   
    explanishSkills,
    how_Play,
}

export default DATA