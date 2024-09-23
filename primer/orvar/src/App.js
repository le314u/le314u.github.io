
import { useRef,useState } from 'react';
import logo from './logo.svg';
import NavBar from './components/navBar/NavBar.js'
import Headerr from './components/header/Header.js'
import  Block from './components/block/Block.js'
import {List} from './components/list/List.js'
import Explanish from './components/explanish/Explanish.js'
import SetCards from './components/setCards/SetCards.js'
import ComboBox from './components/comboBox/ComboBox.js';
import DATA from './data.js'
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import card from './assets/cards/Orvar_das_Formas_Infindaveis.jpg'
import banner from './assets/banner.webp'
import { Accordion, Divider,   Segment ,ModalHeader, ModalDescription, ModalContent, ModalActions, Button,Confirm, Header, Image, Modal, } from 'semantic-ui-react'



let Box = ({children})=>(<Block>{children}</Block>)
let Rule = ({ children}) => (<Block><Block emphasis={true}>{children}</Block> </Block>);
let Lista = ({ children, dataArray })=>(<Block><List label={children} array={dataArray}/></Block>);
let Card = ({src, children})=>(<Block><Explanish type='center' src={src} > {children}</Explanish></Block >);
let CardL = ({src, children})=>(<Block><Explanish type='left' src={src} > {children}</Explanish></Block >);
let CardR = ({src, children})=>(<Block><Explanish type='right' src={src} > {children}</Explanish></Block >);


function goTo(id){
  const tag =  document.getElementById(id)
  tag.scrollIntoView({ behavior: 'smooth' });
}





function App() {
  const tag = useRef();
  const chainDisplay = useRef();
  let [tutors,setTutors] = useState();

  function changeContent(content){
    let ele = chainDisplay.current.getElementsByClassName('emphasis')[0]
    ele.innerHTML = content
  }

  function chainTutors(e){
    setTutors(e)
  }

  function ModalRules(props) {
    const [open, setOpen] = useState(false)
    return (
      <Modal open={open}
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          trigger={props.children}
      >
      
      <ModalContent>
          <h1> Notas sobre Orvar das Formas Infindáveis </h1>
          <p>{DATA.rule_1}</p><Divider clearing />
          <p>{DATA.rule_2}</p><Divider clearing />
          <p>{DATA.rule_3}</p><Divider clearing />
          <p>{DATA.rule_4}</p><Divider clearing />
          <p>{DATA.rule_5}</p><Divider clearing />
          <p>{DATA.rule_6}</p><Divider clearing />
          <p>{DATA.rule_7}</p><Divider clearing />
          <p>{DATA.rule_8}</p><Divider clearing />
          <p>{DATA.rule_9}</p><Divider clearing />
          <p>{DATA.rule_10}</p><Divider clearing />
          <p>{DATA.rule_11}</p><Divider clearing />
          <p>{DATA.rule_12}</p><Divider clearing />
          <p>{DATA.rule_13}</p><Divider clearing />
          <p>{DATA.rule_14}</p><Divider clearing />
          <p>{DATA.rule_15}</p><Divider clearing />
          <p>{DATA.rule_16}</p><Divider clearing />
          <p>{DATA.rule_17}</p><Divider clearing />
          <p>{DATA.rule_18}</p><Divider clearing />
          <p>{DATA.rule_19}</p><Divider clearing />
          <p>{DATA.rule_20}</p><Divider clearing />
          <p>{DATA.rule_21}</p>
      </ModalContent>
      
      <ModalActions>
        <Button
          color='blue'
          content=" OK"
          icon='checkmark'
          onClick={() => setOpen(false)}
        />
      </ModalActions>
    </Modal>
    )
  }



  return (
    <div className="App">
      <NavBar/>
      <Headerr src={banner}/>
      <div className="App-Body">
        <div ref={tag}> </div>


        <Card src={card}/>

        <Box>{DATA.intro} {DATA.shell}</Box>

     

        <Box>{DATA.howPlay}</Box>
              

        <Block><List label="Habilidades:" array={DATA.habilidades}/></Block>

        <ModalRules>
          <Button>Regras Orvar</Button>
        </ModalRules>
      

        <Block><List label="Porque jogar:" array={DATA.pros}/></Block>

        <Block><List label="Porque NÃO jogar:" array={DATA.contra}/></Block>        


        </div>
    </div>




    //     <SetCards id="drawEngine" array_src={ [card("Arquimago_Emerito.jpg"),card("Cavernas_Cripticas.jpg"),card("Coliseu_dos_Cefalidas.jpg"),card("Contradicao_Arcana.jpg"),card("Determinacao_do_Aquateto.jpg"),card("Difusao_de_Cristal.jpg"),card("Enervar.jpg"),card("Esfera_do_Comandante.jpg"),card("Estudo_Ristico.jpg"),card("Fluxo_Termal.jpg"),card("Hipocampo_da_Arrebentacao.jpg"),card("Idolo_do_Oblivio.jpg"),card("Infundir.jpg"),card("Lanterna_Guia-almas.jpg"),card("Magibomba_de_Eter.jpg"),card("Miragem_Tremeluzente.jpg"),card("Remora_Mistica.jpg"),card("Sacudida.jpg"),card("Safanao.jpg"),card("Simpatia_Nefasta.jpg"),card("Zenite_do_Sol_Azul.jpg")]}>
    //         Compra
    //     </SetCards>  


    //     <SetCards id="tutorEngine" array_src={ [card("Zumbido_da_Invencao.jpg"),card("Tutor_Mistico.jpg"),card("Praia_Inundada.jpg"),card("Pergaminho_dos_Mercadores.jpg"),card("Magica_Estonteante.jpg"),card("Intuicao.jpg"),card("Busca-magica.jpg"),card("Baguncar_a_Mistura.jpg")]}>
    //         Tutores
    //     </SetCards>  

    //     <SetCards id="counter" array_src={ [card("Baguncar_a_Mistura.jpg"),card("Cancao_do_Cisne.jpg"),card("Contrabalancar.jpg"),card("Contradicao_Arcana.jpg"),card("Drenagem_de_Mana.jpg"),card("Eremita_Malevolente.jpg"),card("Explosao_Hidrica.jpg"),card("Forca_da_Negacao.jpg"),card("Forca_de_Vontade.jpg"),card("Oferta_Irrecusavel.jpg"),card("Pacto_de_Negacao.jpg"),card("Silfide_Magioclasta.jpg"),card("Tempestade_Atordoante.jpg"),card("Tutela_Feroz.jpg")]}>
    //         Counters
    //     </SetCards>  

    //     <SetCards id="redutor" array_src={ [card("Genio_Arrogante.jpg"),card("Ornato_de_Safira.jpg"),card("Silfide_Zombeteira.jpg")]}>
    //         Redutor
    //     </SetCards>  

    //     <SetCards id="backup" array_src={ [card("Arqueomante.jpg"),card("Cetro_Isocrono.jpg"),card("Recuperadora_de_Segredos.jpg"),card("Santuario_Mistico.jpg"),card("Vasculhador_de_Naufragios.jpg")]}>
    //         BackUp
    //     </SetCards>  



 
    //     <ComboBox triguer={chainTutors} name="Chain de Tutor" array={
    //       [{ value:"Intuition", text:"Intuition" },{ value:"Spellseeker", text:"Spellseeker" },{ value:"Vedalken", text:"Vedalken Aethermage" },{ value:"Invention", text:"Whir of Invention" },{ value:"FetchLand", text:"FetchLand" },{ value:"Expedition", text:"Expedition Map" },{ value:"Merchant", text:"Merchant Scroll" },{ value:"Dizzy", text:"Dizzy Spell" },{ value:"Muddle", text:"Muddle the Mixture" }] }/>

    //     <div ref={chainDisplay}><Rule>
    //     {(() => {
    //     switch (tutors) {
    //       case 'Intuition':
    //         return (
    //           <SetCards roll={true} id="Intuition" array_src={[card("Pergaminho_dos_Mercadores.jpg")]}>
    //             {tutors}
    //           </SetCards>
    //         );
            
    //       case 'Spellseeker':
    //         return (<>
    //           <SetCards roll={true} id="Spellseeker_1" array_src={[card("Vedalken_Aethermage.jpg")]}> {tutors} </SetCards>
    //           <SetCards roll={true} id="Spellseeker_2" array_src={[card("Step_Through.jpg")]}> {tutors} </SetCards>
    //         </>);

    //       case 'Vedalken':
    //         return (<>
    //           <SetCards roll={true} id="Vedalken" array_src={[card("Step_Through.jpg")]}> {tutors} </SetCards>
    //         </>);

    //       case 'Invention':
    //         return (<>
    //           <SetCards roll={true} id="Invention" array_src={[card("Pergaminho_dos_Mercadores.jpg")]}> Whir of Invention </SetCards>
    //         </>);

    //       case 'FetchLand':
    //         return (<>
    //           <SetCards roll={true} id="FetchLand_1" array_src={[card("Intuicao.jpg")]}>{tutors}</SetCards>
    //           <SetCards roll={true} id="FetchLand_2" array_src={[card("Expedition_Map.jpg")]}>{tutors}</SetCards>
    //         </>);
          
    //       case 'Expedition':
    //         return (<>
    //           <SetCards roll={true} id="Expedition_1" array_src={[card("Zumbido_da_Invencao.jpg")]}> Expedition Map </SetCards>
    //           <SetCards roll={true} id="Expedition_2" array_src={[card("Magica_Estonteante.jpg")]}> Expedition Map </SetCards>
    //         </>);

    //       case 'Merchant':
    //         return (<>
    //           <SetCards roll={true} id="Merchant_1" array_src={[card("Baguncar_a_Mistura.jpg")]}> Merchant Scroll </SetCards>
    //           <SetCards roll={true} id="Merchant_2" array_src={[card("Busca-magica.jpg")]}> Merchant Scroll </SetCards>
    //         </>);
          
    //       case 'Dizzy':
    //         return (<>
    //           <SetCards roll={true} id="Dizzy_1" array_src={[card("Pergaminho_dos_Mercadores.jpg")]}> Dizzy Spell </SetCards>
    //           <SetCards roll={true} id="Dizzy_2" array_src={[card("Busca-magica.jpg")]}> Dizzy Spell </SetCards>
    //         </>);

    //       case 'Muddle':
    //         return (<>
    //           <SetCards roll={true} id="Dizzy_1" array_src={[card("Pergaminho_dos_Mercadores.jpg")]}> Muddle the Mixture </SetCards>
    //           <SetCards roll={true} id="Dizzy_2" array_src={[card("Busca-magica.jpg")]}> Muddle the Mixture </SetCards>
    //         </>);

    //       default:
    //         return null;
    //     }
    //   })()}</Rule></div >


      // </div>
    // </div>
  );
}

export default App;
