const banners = [{
    title:"Le314u",
    text:"Olá! Meu nome é Lucas Mateus vulgarmente conhecido como piu, uma pessoa com uma paixão diversificada por conhecimento e experiências. Formado em Licenciatura em Educação Física e Bacharel em Ciências da Computação e uma paixão por Jiujitsu, Magic e Jogos no geral, minha jornada tem sido marcada por uma mistura única de disciplinas."
},{
    title:"Thanks",
    text:"Quero expressar minha gratidão por ter dedicado um tempo para visitar o meu perfil. Fiquei muito contente em saber do seu interesse. Se houver qualquer informação adicional que você gostaria de obter ou se tiver alguma pergunta, sinta-se à vontade para entrar em contato. lucas314u@gmail.com   "
}]

let games = {cards:[
    {
        title:"Telma",
        subtitle:"Jogo de memoria",
        href:"games/telma/dist/index.html"
    },{
        title:"Who is Spy",
        subtitle:"Jogo de Blefe",
        href:"games/spy/dist/index.html"
    },{
        title:"Perfil",
        subtitle:"Jogo de Flash cards",
        href:"games/perfil/dist/index.html"
    },{
        title:"Card game",
        subtitle:"Jogo baseado em couple",
        href:"https://github.com/le314u/CardGame"
    }
]}
const cards = {
    games:games,
}

const contents = [{
    imageUrl:"/public/img/projetos/tcc.gif",
    title:"TCC",
    href:"https://github.com/le314u/TCC",
    text:"Ferramenta de visão computacional para a análise do movimento de barra fixa voltada para testes de aptidão física",
    imageAlt:"Imagem falha"
},{
    imageUrl:"/public/img/projetos/proxy.gif",
    title:"proxyCardMTG",
    href:"https://github.com/le314u/proxyCardMTG",
    text:"Cria um pdf para impressão de proxys apartir da url de um deck postado no site 'ligamagic'",
    imageAlt:"Imagem falha"
},{
    imageUrl:"/public/img/projetos/layout.gif",
    title:'layoutImg',
    href:"https://github.com/le314u/layoutImg",
    text:"Junta duas Imagens em uma unica imagem, otimo para criação de fotos padronizadas e emissão de certificado em png",
    imageAlt:"Imagem falha"
},{
    imageUrl:"/public/img/projetos/juros.gif",
    title:"Financial-Transaction-Manager",
    href:"https://github.com/le314u/financialTransactionManager",
    text:"Facilitar o cadastramento de movimentação de cheques em eventos no google agenda",
    imageAlt:"Imagem falha"
},{
    imageUrl:"/public/img/projetos/academico.png",
    title:"Meus trabalhos academicos",
    href:"https://github.com/le314u/Academico/tree/master/IFMG",
    text:"Trabalhos realizados durante a graduação em Ciencia da Computação pelo IFMG - Campus Formiga",
    imageAlt:"Imagem falha"
},]


const title = {
    title:"GitHub",
    subtitle:(<a href='https://github.com/le314u?tab=repositories'>https://github.com/le314u?tab=repositories</a>)
}

const data = {
    cards:cards,
    banners:banners,
    title:title,
    contents:contents,
}

  export default data