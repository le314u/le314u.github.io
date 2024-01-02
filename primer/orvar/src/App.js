
import { useRef } from 'react';
import logo from './logo.svg';
import NavBar from './components/navBar/NavBar.js'
import Header from './components/header/Header.js'
import  Block from './components/block/Block.js'
import {List} from './components/list/List.js'
import Explanish from './components/explanish/Explanish.js'
import SetCards from './components/setCards/SetCards.js'
import ComboBox from './components/comboBox/ComboBox.js';
import DATA from './data.js'
import './App.css';





let Box = ({children})=>(<Block><Block>{children}</Block></Block>)
let Rule = ({ children }) => (<Block><Block emphasis={true}>{children}</Block> </Block>);
let Lista = ({ children, dataArray })=>(<Block><List label={children} array={dataArray}/></Block>);
let Card = ({src, children})=>(<Block><Explanish type='center' src={src} > {children}</Explanish></Block >);
let CardL = ({src, children})=>(<Block><Explanish type='left' src={src} > {children}</Explanish></Block >);
let CardR = ({src, children})=>(<Block><Explanish type='right' src={src} > {children}</Explanish></Block >);
function  card(name){  return "/primer/orvar/build/cards/"+name}

function goTo(id){
  const tag =  document.getElementById(id)
  tag.scrollIntoView({ behavior: 'smooth' });
}





function App() {
  const tag = useRef();

  function teste(e){
    console.log("TRIGUER")
    tag.current.style.display = 'none'
    console.log(e)
  }

  return (
    <div className="App">
      <NavBar/>
      <Header src="/primer/orvar/build/banner.webp"/>
      <div className="App-Body">
        {/* <Block><List label="Custo" array={["{3}{U}"]}/></Block> */}
        {/* <Block><List label="Tipo" array={["Criatura Lendária — Metamorfo",]}/></Block> */}
        {/* <Block><List label="Poder " array={["3/3"]}/></Block> */}
        <div ref={tag}>
          <ComboBox triguer={teste} name="Win" array={

            [{
              value:"value1",
              text:"text1"
            },{
              value:"value2",
              text:"text2"
            },{
              value:"value3",
              text:"text3"
            }]
          }/>
        </div>
        <Box>{DATA.howPlay}</Box>
        <Box>Notas sobre Orvar das Formas Infindáveis</Box>
        <Card src={card("Orvar_das_Formas_Infindaveis.jpg")}>{DATA.intro} {DATA.shell}</Card>
        {/* <CardL src={card("Orvar_das_Formas_Infindaveis.jpg")}>{DATA.intro} {DATA.shell}</CardL>
        <CardR src={card("Orvar_das_Formas_Infindaveis.jpg")}>{DATA.intro} {DATA.shell}</CardR> */}
        <Lista dataArray={DATA.habilidades}>Habilidades</Lista>
        <Rule>{DATA.rule_1}</Rule>
        <Rule>{DATA.rule_2}</Rule>
        <Rule>{DATA.rule_3}</Rule>
        <Rule>{DATA.rule_4}</Rule>
        <Rule>{DATA.rule_5}</Rule>
        <Rule>{DATA.rule_6}</Rule>
        <Rule>{DATA.rule_7}</Rule>
        <Rule>{DATA.rule_8}</Rule>
        <Rule>{DATA.rule_9}</Rule>
        <Rule>{DATA.rule_10}</Rule>
        <Rule>{DATA.rule_11}</Rule>
        <Rule>{DATA.rule_12}</Rule>
        <Rule>{DATA.rule_13}</Rule>
        <Rule>{DATA.rule_14}</Rule>
        <Rule>{DATA.rule_15}</Rule>
        <Rule>{DATA.rule_16}</Rule>
        <Rule>{DATA.rule_17}</Rule>
        <Rule>{DATA.rule_18}</Rule>
        <Rule>{DATA.rule_19}</Rule>
        <Rule>{DATA.rule_20}</Rule>
        <Rule>{DATA.rule_21}</Rule>
        <Block><List label="Porque jogar:" array={DATA.pros}/></Block>
        <Block><List label="Porque NÃO jogar:" array={DATA.contra}/></Block>
        
        
        <SetCards id="drawEngine" array_src={ [card("Arquimago_Emerito.jpg"),card("Cavernas_Cripticas.jpg"),card("Coliseu_dos_Cefalidas.jpg"),card("Contradicao_Arcana.jpg"),card("Determinacao_do_Aquateto.jpg"),card("Difusao_de_Cristal.jpg"),card("Enervar.jpg"),card("Esfera_do_Comandante.jpg"),card("Estudo_Ristico.jpg"),card("Fluxo_Termal.jpg"),card("Hipocampo_da_Arrebentacao.jpg"),card("Idolo_do_Oblivio.jpg"),card("Infundir.jpg"),card("Lanterna_Guia-almas.jpg"),card("Magibomba_de_Eter.jpg"),card("Miragem_Tremeluzente.jpg"),card("Remora_Mistica.jpg"),card("Sacudida.jpg"),card("Safanao.jpg"),card("Simpatia_Nefasta.jpg"),card("Zenite_do_Sol_Azul.jpg")]}>
            Compra
        </SetCards>  


        <SetCards id="tutorEngine" array_src={ [card("Zumbido_da_Invencao.jpg"),card("Tutor_Mistico.jpg"),card("Praia_Inundada.jpg"),card("Pergaminho_dos_Mercadores.jpg"),card("Magica_Estonteante.jpg"),card("Intuicao.jpg"),card("Busca-magica.jpg"),card("Baguncar_a_Mistura.jpg")]}>
            Tutores
        </SetCards>  

        <SetCards id="counter" array_src={ [card("Baguncar_a_Mistura.jpg"),card("Cancao_do_Cisne.jpg"),card("Contrabalancar.jpg"),card("Contradicao_Arcana.jpg"),card("Drenagem_de_Mana.jpg"),card("Eremita_Malevolente.jpg"),card("Explosao_Hidrica.jpg"),card("Forca_da_Negacao.jpg"),card("Forca_de_Vontade.jpg"),card("Oferta_Irrecusavel.jpg"),card("Pacto_de_Negacao.jpg"),card("Silfide_Magioclasta.jpg"),card("Tempestade_Atordoante.jpg"),card("Tutela_Feroz.jpg")]}>
            Counters
        </SetCards>  

        <SetCards id="redutor" array_src={ [card("Genio_Arrogante.jpg"),card("Ornato_de_Safira.jpg"),card("Silfide_Zombeteira.jpg")]}>
            Redutor
        </SetCards>  

        <SetCards id="backup" array_src={ [card("Arqueomante.jpg"),card("Cetro_Isocrono.jpg"),card("Recuperadora_de_Segredos.jpg"),card("Santuario_Mistico.jpg"),card("Vasculhador_de_Naufragios.jpg")]}>
            BackUp
        </SetCards>  



        {/*
        <Block emphasis={true}><Block>{why_orvar}</Block></Block>
        <Block><Block emphasis={true}>{why_orvar}</Block></Block>
        <Block ><Block>{why_orvar}</Block></Block> 
        */}
        

        {/* <ComboBox/>
        <ComboBox/>
        <Block> <ComboBox/> </Block>
        <Block> <ComboBox/> </Block>
        <Block> <ComboBox/> </Block> */}




{/* 


        <Block ><Block>Orvar das Formas Infindáveis</Block></Block>
        <Block ><Explanish type='center' src="/primer/orvar/build/cards/Orvar_das_Formas_Infindaveis.jpg"> {intro} {shell}</Explanish> </Block >

        
        <Block ><Block>{shell}</Block></Block>

        <Block ><ComboBox triguer={teste} /></Block>



        <Block id="Topico1"><Block>Teste Titulo 1</Block></Block>
        <Block ><Block>{why_orvar}</Block></Block>
        <SetCards id="set1" array_src={ [
          "/primer/orvar/build/cards/card.png","/primer/orvar/build/cards/copy.jpg","/primer/orvar/build/cards/card.png","/primer/orvar/build/cards/copy.jpg"]}>
            Conjunto de Cartas do versos
        </SetCards>  
        <Block><List label="Permite brincar com as regras e mecanicas:" array={array_ul}/></Block>




        <Block id="Topico2" emphasis={true} ><Block>Teste Titulo 1</Block></Block>
        <Block ><Block>{why_orvar}</Block></Block>
        <SetCards id="set2" array_src={ [
          "/primer/orvar/build/cards/card.png","/primer/orvar/build/cards/copy.jpg","/primer/orvar/build/cards/card.png","/primer/orvar/build/cards/copy.jpg"]}>
            Conjunto de Cartas do versos
        </SetCards>  
        <Block><List label="Permite brincar com as regras e mecanicas:" array={array_ul}/></Block>





        <Block id="Topico3" ><Block emphasis={true}>{why_orvar}</Block></Block>
        <Block><Block emphasis={true}>{why_orvar}</Block></Block>
        <Block><Block emphasis={true}>{why_orvar}</Block></Block>
        <Block><Block emphasis={true}>{why_orvar}</Block></Block>
        <Block><List label="Permite brincar com as regras e mecanicas:" array={array_ul}/></Block>


        



        <Explanish id="Topico4" type='left' src="/primer/orvar/build/cards/card.png"> 3Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus </Explanish>
        <Explanish type='right' src="/primer/orvar/build/cards/card.png"> 3Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus </Explanish>
        <Block>{why_orvar}</Block>
        <Explanish type='left' src="/primer/orvar/build/cards/card.png"> 3Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus </Explanish>
        <Explanish type='right' src="/primer/orvar/build/cards/card.png"> 3Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus </Explanish>
        <SetCards id="set3" array_src={ [
          "/primer/orvar/build/cards/card.png","/primer/orvar/build/cards/copy.jpg","/primer/orvar/build/cards/card.png","/primer/orvar/build/cards/copy.jpg", "/primer/orvar/build/cards/card.png","/primer/orvar/build/cards/copy.jpg","/primer/orvar/build/cards/card.png","/primer/orvar/build/cards/copy.jpg",
          "/primer/orvar/build/cards/card.png","/primer/orvar/build/cards/copy.jpg","/primer/orvar/build/cards/card.png","/primer/orvar/build/cards/copy.jpg", "/primer/orvar/build/cards/card.png","/primer/orvar/build/cards/copy.jpg","/primer/orvar/build/cards/card.png","/primer/orvar/build/cards/card.png"]}>
            Conjunto de Cartas do versos
        </SetCards>  

         */}


      </div>
    </div>
  );
}

export default App;
