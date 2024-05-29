
const array_ul = ["Singleton ( varias copias de uma permanente )", "Aura com shroud ( possivel anexar auras em criaturas com manto )", "Camada de copia e transformaçoes ( podendo ter varias copias da carta original mesmo que ela tenha sido alterada/transformada)", "Alterar ordem dos Triguers para tirar maior proveito", "Poder dar alvo em permanentes sem palavras chaves (trocar uma cor inexistente por outra cor aleatoria)"]

const pros = ["Possui alta redundância e cheio de loops.",
"Destacado em seu alto valor em jogos prolongados.",
"Prioriza o turno dos oponentes e trabalha muito bem em instant speed.",
"Não singleton ( varias copias de uma permanente ).",
"Aura com shroud ( possivel anexar auras em criaturas com manto ).",
"Camada de copia e transformaçoes ( podendo ter varias copias da carta original mesmo que ela tenha sido 'alterada/transformada').",
"Alterar ordem dos Triguers para tirar maior proveito.",
"Poder dar alvo em permanentes sem palavras chaves (trocar uma cor inexistente por outra cor aleatoria).",
"Mono Blue Ramp, é um deck de big mana sendo que land básica é uma das mais dificeis de tirar"]


const contra = ["Dependente do comandante",
"Requer calculos constantes",
"Muito dependente das janelas de oportunidade",
"Sofre para heate bears",
"Possui erro de tradução, 'other permanents' ",]


const why_orvar = "É um comandante exigente de aprender, desafiador de se jogar e requer que o piloto tenha conhecimento das listas de cEDH e dos padrões de jogo nos tornamos mais fortes quando adaptamos nosso deck a um meta conhecido. Não segue uma shell comum de cartas/loops, pois opera em um eixo completamente distinto, transformando instantâneos e feitiços baratos em rampas ou cópias de nossas poderosas permanentes, acontecendo praticamente em velocidade de instante Possui alta redundância e cheio de loops. Destacado em seu alto valor em jogos prolongados Prioriza o turno dos oponentes e trabalha muito bem em instant speed "
const intro = "Unico commander não singleton, comba em resposta, altamente consistente com backup de grayve, hard control (spellstuter e counterbalance), qualquer spell se torna um counter, não perde por mill (nexu) joga com o deck do oponente (clones), faz chain de tutores (tutor para tutor de tutor) altamente versatil, possui varias wins (deck over, batendo, softControl). "
const shell = "Não segue uma shell comum de cartas/loops, pois opera em um eixo completamente distinto, transformando instantâneos e feitiços baratos em rampas ou cópias de nossas poderosas permanentes, acontecendo praticamente em velocidade de instante"

const rule_1 = "A primeira habilidade desencadeada de Orvar é resolvida antes da mágica ou habilidade que a causou. (05/02/2021)\n"
const rule_2 = "Para a primeira habilidade desencadeada, a mágica instantânea ou feitiço pode ter como alvo outras coisas se também tiver como alvo uma ou mais permanentes que você controla; entretanto, a ficha que você cria pode copiar apenas as permanentes que você controla e que são alvos da mágica. Se a mágica tiver como alvo mais de uma permanente que você controla, você escolhe qual permanente a ficha está copiando ao criar a ficha. (05/02/2021)\n"
const rule_3 = "À medida que a primeira habilidade desencadeada tenta ser resolvida, a mágica que a desencadeou e os alvos daquela mágica são verificados novamente. Ignore qualquer alvo do feitiço que tenha deixado o campo de batalha nesse ponto. Se todas as permanentes que você controlava e que eram alvos tiverem deixado o campo de batalha nesse ponto, a habilidade desencadeada não fará nada e nenhuma ficha será criada. Se pelo menos uma permanente que você controla que seja alvo ainda estiver no campo de batalha, a habilidade desencadeada será resolvida, mesmo que aquela permanente seja agora um alvo ilegal para a mágica. (05/02/2021)\n"
const rule_4 = "Se a mágica em si tiver saído da pilha nesse ponto, use os alvos que ela tinha quando saiu da pilha para realizar o teste descrito acima. (05/02/2021)\n"
const rule_5 = "Para a segunda habilidade desencadeada, você pode escolher qualquer permanente como alvo, independentemente de quem a controla. (05/02/2021)\n"
const rule_6 = "A ficha copia exatamente o que está impresso na permanente e nada mais (a menos que a permanente seja uma ficha ou esteja copiando alguma outra coisa). Ele não copia se aquela permanente está virada ou desvirada, se ela tem algum marcador, se ela tem alguma Aura e/ou Equipamento anexado a ela, ou quaisquer efeitos que não sejam de cópia que tenham alterado seu poder, resistência, tipos, cor , e assim por diante. (05/02/2021)\n"
const rule_7 = "Se a permanente que está sendo copiada for ela própria uma ficha, a ficha criada pela última habilidade copia as características originais daquela ficha conforme declaradas pelo efeito que a criou. (05/02/2021)\n"
const rule_8 = "Se a permanente que está sendo copiada estiver copiando outra coisa, o token que você criar usará os valores copiáveis ​​daquela permanente. Na maioria dos casos, será uma cópia daquilo que a permanente está copiando. Se estiver copiando uma permanente ou card com {X}em seu custo de mana, X é 0. (05/02/2021)\n"
const rule_9 = "Se a permanente que está sendo copiada tiver{X}em seu custo de mana, X é 0. (05/02/2021)\n"
const rule_10 = "Quaisquer habilidades de entrada no campo de batalha da permanente copiada serão desencadeadas quando a ficha entrar no campo de batalha. Quaisquer habilidades “Conforme [esta permanente] entra no campo de batalha” ou “[Esta permanente] entra no campo de batalha com” da permanente copiada também funcionarão. (05/02/2021)\n"
const rule_11 ="Se uma mágica ou habilidade que um oponente controla permitir ou instruir você a escolher um card para descartar, e você descartar Orvar, sua última habilidade será desencadeada. (05/02/2021)\n"
const rule_12 ="Changeling é uma habilidade que define características. Ele funciona em todas as zonas, não apenas enquanto um card que o possui está no campo de batalha. (05/02/2021)\n"
const rule_13 ="O subtipo Shapeshifter que aparece na linha de tipo existe principalmente para reforçar o sabor. Uma carta de criatura com changeling é tanto um Elfo, um Anão, um Fractius, uma Cabra, um Covarde e um Zumbi quanto um Metamorfo. (05/02/2021)\n"
const rule_14 ="Se um efeito fizer com que uma criatura com changeling se torne um novo tipo de criatura, será apenas esse novo tipo de criatura. Ainda terá changeling; o efeito que faz com que todos os tipos de criatura sejam simplesmente substituídos. (05/02/2021)\n"
const rule_15="Se um efeito fizer com que uma criatura com changeling perca todas as habilidades, ela permanecerá com todos os tipos de criatura, mesmo que não tenha mais changeling. Isso ocorre porque o changeling se aplica antes do efeito que o remove. (05/02/2021)\n"
const rule_16="Se houver custos adicionais para conjurar uma mágica, ou se o custo para conjurar uma mágica for aumentado por um efeito (como aquele criado pela habilidade de Thalia, Guardiã de Thraben), aplique esses aumentos antes de aplicar reduções de custos. (04/11/2015)\n"
const rule_17="A redução de custos pode aplicar-se a custos alternativos, tais como custos de flashback.(04/11/2015)\n"
const rule_18="Se algum Clone de alguma forma entrar no campo de batalha ao mesmo tempo que outra criatura, Clone não poderá se tornar uma cópia daquela criatura. Você pode escolher apenas uma criatura que já esteja no campo de batalha. (01/07/2012)\n"
const rule_19="Se você colocar um card de Aura no campo de batalha com alguma habilidade como por exemplo a do Zur, você escolhe o que ele encantará ao entrar no campo de batalha. Uma Aura colocada no campo de batalha desta forma não tem como alvo nada (então ela poderia ser anexada a uma permanente do oponente com resistência à magia, por exemplo), mas a habilidade de encantar da Aura restringe aquilo a que ela pode ser anexada. Se a Aura não puder ser legalmente anexada a nada, ela permanecerá em seu grimório. (2022-12-08)\n"
const rule_20="Se um efeito permitir que você jogue um terreno ou conjure uma mágica dentre um grupo de cards, você poderá jogar ou conjurar um card modal dupla face com qualquer face que atenda aos critérios daquele efeito. (2020-09-25)\n"
const rule_21="O custo de mana convertido de um card modal dupla face é baseado nas características da face que está sendo considerada. Na pilha e no campo de batalha, considere a face que está voltada para cima. Em todas as outras zonas, considere apenas a face frontal. Isso é diferente de como o custo de mana convertido de um card dupla face transformador é determinado. (2020-09-25)\n"


const panels = [
    {
      key: 'Rules',
      title: 'Regra 1',
      content: [
        rule_1,
        rule_2,
        rule_3,
        rule_4,
        rule_5,
        rule_6,
        rule_7,
        rule_8,
        rule_9,
        rule_10,
        rule_11,
        rule_12,
        rule_13,
        rule_14,
        rule_15,
        rule_16,
        rule_17,
        rule_18,
        rule_19,
        rule_20,
        rule_21
      ].join('\n')
    },
  ]
const howPlay = (<div>Baseado em {(<a href='https://www.moxfield.com/decks/Y2cdFYZw_0-isKafmKXgNw/primer'> primers </a>)}  memoraveis. Aprendi o basico de como me portar jogando de orvar. O principal padrão de jogo do deck é descobrir como evitar tentativas de vitória por tempo suficiente para colocar Orvar em jogo e começar a agregar valor com um ou mais motores.
Primeiro passo é não perder. mas atentesse a parar apenas o que deve ser interrompido.
Segundo passo é obter o Santuário. castar Orvar e tirar o maior proveito disso possivel  (Copie terras e Compra cartas)
Terceiro passo é Copie mais terras. Compre mais cartas. e o melhor momento é na passagem para seu turno.
Por fim finalize o jogo em instant speed ou não...</div>)

const habilidades = ["Morfoloide", "Toda vez que você conjurar uma mágica instantânea ou feitiço, se ela tiver como alvo uma ou mais permanentes que você controla, crie uma ficha que é uma cópia de uma dessas permanentes.", "Quando uma mágica ou habilidade controlada por um oponente fizer com que você descarte este card, crie uma ficha que é uma cópia da permanente alvo."]


const DATA = { 
    array_ul,
    pros,
    contra,
    why_orvar,
    intro,
    shell,
    rule_1,
    rule_2,
    rule_3,
    rule_4,
    rule_5,
    rule_6,
    rule_7,
    rule_8,
    rule_9,
    rule_10,
    rule_11,
    rule_12,
    rule_13,
    rule_14,
    rule_15,
    rule_16,
    rule_17,
    rule_18,
    rule_19,
    rule_20,
    rule_21,
    howPlay,
    habilidades,   
    panels,
}
export default DATA