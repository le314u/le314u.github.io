import React from 'react';

const habilidades = [
  "Quando Urza, Lorde Alto Artífice, entrar, crie uma ficha de criatura artefato incolor 0/0 do tipo Constructo com “Esta criatura recebe +1/+1 para cada artefato que você controla.”",
  "Vire um artefato desvirado que você controla: Adicione uma mana azul",
  "Pague 5 manas e Embaralhe seu grimório e exile o card do topo. Até o final do turno, você pode jogar aquele card sem pagar seu custo de mana."
]


const rules = [
  "O token criado pela primeira habilidade de Urza contará a si mesmo, então será pelo menos 1/1 \n"
  ,
  "Você pode virar qualquer artefato desvirado que você controla para pagar o custo da habilidade de mana, incluindo uma criatura artefato que você não tenha controlado continuamente desde o início do seu turno mais recente. Virar um Equipamento dessa forma não afetará suas habilidades ou a criatura equipada.\n"
  , 
  "Se você não jogar a carta exilada com a última habilidade de Urza, ela permanecerá exilada.\n"
  ,
  "A última habilidade de Urza não muda quando você pode jogar o card exilado. Por exemplo, se você exilar um card de feitiçaria, você pode conjurá-lo somente durante sua fase principal quando a pilha estiver vazia. Se você exilar um card de terreno, você pode jogá-lo somente durante sua fase principal e somente se você tiver um jogo de terreno disponível restante.\n"
  ,
  "Se um feitiço tiver{X}em seu custo de mana, você deve escolher 0 como o valor de X ao conjurá-lo sem pagar seu custo de mana."
  ,
  "Se você conjurar uma carta “sem pagar seu custo de mana”, você não pode escolher conjurá-la por nenhum custo alternativo. Você pode, no entanto, pagar custos adicionais. Se a carta tiver quaisquer custos adicionais obrigatórios, você deve pagá-los para conjurar a carta.\n"
  
]

const ends = [
  "Fazer tokens infinitos e jogar um turno extra. ( porem é necessário um turno a mais)"
  ,
  "Milar todos os oponentes ad infinitum e castar windfall  ( porem se o oponente é um gitrog ja sabemos o final da historia, ele irá rembaralhar o deck )"
  ,
  "Exilar uma criatura ou artefato [Resculpt] e depois manifestar a carta do topo ad infinitum [Reality Shift]"
  ,
  "Soft lock com [Hullbreaker Horror e Tidespout Tyrant] fazendo com que a assimetria prevaleça."
]

const intro = `
Diferente de Orvar, a maioria das cartas do Urza são poderosas, principalmente as cartas focadas em stax não simétricos e o fato de ser comboless ( não ter carta que estão em jogo exlusivamente para finalizar o jogo ). Com Urza você pode montar um deck que vai desde o jogo agressivo até o controle total da partida, dependendo do que você prefere. 
e para muitos jogadores, Urza representa uma época clássica do Magic, trazendo nostalgia e conexão com a história do jogo. Esta vertente do deck possui apenas três criaturas, sendo uma delas o próprio Urza, e as outras duas  [Hullbreaker Horror e Tidespout Tyrant] são tutoraveis por [Polymorph].
Para vencer, é preciso manter o controle do jogo até encontrar o momento certo de criar um board favorável para gerar mana infinita e, por fim, escolher a forma de finalização.`

const wins = [
  "Possa castar mais de uma spell por turno. [Rule of Law]"
  ,
  "Possa castar magicas sem pagar sem custo [Vexing Bauble e Void Mirror]"
  , 
  "Possa castar magicas do exilio ou zona de comando [Drannith Magistrate]"
  ,
  "Possa ativar habilidades de criaturas [Cursed Totem]"
  ,
  "Tenha mana infinita."
]

const loop = [
  "Isochron Scepter + Dramatic Reversal",
  "Basalt Monolith + Rings of Brighthearth",
  "Hullbreaker Horror ou Tidespout Tyrant e 2 artefatos custo zero"
]


const rightWay = [
  "Usar a habilidade do urza ad infinitum sendo a condição de parada não ter mais cards no deck",
  "Sem cartas no deck é necessário jogar nexo do destino para garantir que o deck continue com 1 carta e não perder por deck over",
  "Castar [Borne Upon a Wind] ou caso ja tenha em campo apenas ativar [Emergence Zone] isso garante que você não fique travado na pilha.",
  "Nesse ponto ao castar uma mágia ela vai para o cemitério e para voltar do cemitério para o deck é possivel faze-lo de 3 formas [elixir da imortalidade] [relogio da meia noite] [echo of eons], porem para que [relogio da meia noite] funciona como previsto é necessário algum tipo de bounce para que ele não seja exilado e para que [echo of eons] não lhe mate é necessário ter no minmo 7 cartas no cemitério.",
  "Há algumas cartas que são peças chaves para a recursão do deck pois caso tudo esteja perdido no cemitério [Codex Shredder] consegue dar uma reviravolta "
]



const all=`

Diferente de Orvar, a maioria das cartas do Urza são poderosas, principalmente as cartas focadas em stax não simétricos e o fato de ser comboless ( não ter carta que estão em jogo exlusivamente para finalizar o jogo ). Com Urza você pode montar um deck que vai desde o jogo agressivo até o controle total da partida, dependendo do que você prefere.
e para muitos jogadores, Urza representa uma época clássica do Magic, trazendo nostalgia e conexão com a história do jogo.

Esta vertente do deck possui apenas três criaturas, sendo uma delas o próprio Urza, e as outras duas  [Hullbreaker Horror e Tidespout Tyrant] são tutoraveis por [Polymorph].
Para vencer, é preciso manter o controle do jogo até encontrar o momento certo de criar um board favorável para gerar mana infinita e, por fim, escolher a forma de finalização.


Existem várias maneiras de concluir o jogo:

Fazer tokens infinitos e jogar um turno extra. ( porem é necessário um turno a mais)
Milar todos os oponentes ad infinitum e castar windfall  ( porem se o oponente é um gitrog ja sabemos o final da historia, ele irá rembaralhar o deck )
Exilar uma criatura ou artefato [Resculpt] e depois manifestar a carta do topo ad infinitum [Reality Shift]
Soft lock com [Hullbreaker Horror e Tidespout Tyrant] fazendo com que a assimetria prevaleça.



Para ganhar com urza você precisa garantir 5 coisas:

  Possa castar mais de uma spell por turno. [Rule of Law]
  Possa castar magicas sem pagar sem custo [Vexing Bauble e Void Mirror]
  Possa castar magicas do exilio ou zona de comando [Drannith Magistrate]
  Possa ativar habilidades de criaturas [Cursed Totem]
  Tenha mana infinita.

  Em condiçoes normais de temperatura pressão é necessário se preocupar apenas em ter mana infinita.



Para gerar mana infinita pode usar de 3 estratégias

Isochron Scepter + Dramatic Reversal
Basalt Monolith + Rings of Brighthearth
Hullbreaker Horror ou Tidespout Tyrant e 2 artefatos custo zero


Já com mana infinita o passo a passo para o sucesso é:

  Usar a habilidade do urza ad infinitum
  Condição de parada é não ter mais cards no deck
  Sem cartas no deck é necessário jogar  nexo do destino para garantir que o deck continue com 1 carta e não perder por deck over
  Então castar [Borne Upon a Wind] ou caso ja tenha em campo apenas ativar [Emergence Zone] isso garante que você não fique travado na pilha.
  Nesse ponto ao castar uma mágia ela vai para o cemitério e para voltar do cemitério para o deck é possivel faze-lo de 3 formas [elixir da imortalidade] [relogio da meia noite] [echo of eons], porem para que [relogio da meia noite] funciona como previsto é necessário algum tipo de bounce para que ele não seja exilado e para que [echo of eons] não lhe mate é necessário ter no minmo 7 cartas no cemitério.

Há algumas cartas que são peças chaves para a recursão do deck pois caso tudo esteja perdido no cemitério [Codex Shredder] consegue dar uma reviravolta 

Há algumas palhaçadas legais para se fazer:

Com token infinitos é possivel fazer com que todo o seu deck esteja manifestado
Com infinitos cast de [An Offer You Can't Refuse] é possivel er infinitos tesouros
Com infinitos [swansong] é possivel ter infinitos tokens 2/2
Com [Sensei's Divining Top] e [Dramatic Reversal] é possivel comprar o deck inteiro ja que colocar o tampo no topo é parte da resolução.

`
const DATA = {
    habilidades,  
    wins, 
    rules,
    wins,
    ends,
    loop,
    rightWay,
    all,
    intro,
}
export default DATA