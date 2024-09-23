import React from 'react';
import { useRef,useState } from 'react';
import NavBar from './components/navBar/NavBar.js'
import Headerr from './components/header/Header.js'
import Block from './components/block/Block.js'
import Title from './components/title/Title.js'
import {List} from './components/list/List.js'
import {Ull} from './components/list/Ull.js'
import Explanish from './components/explanish/Explanish.js'
import DATA from './data.js'
import 'semantic-ui-css/semantic.min.css'
import './App.css';


import { Accordion, Divider,   Segment ,ModalHeader, ModalDescription, ModalContent, ModalActions, Button,Confirm, Header, Image, Modal, } from 'semantic-ui-react'
// import SetCards from './components/setCards/SetCards.js'
// import ComboBox from './components/comboBox/ComboBox.js';
// import logo from './logo.svg';


let Topics = ({array}) => ( <Block> <Ull array={array}/> </Block> )
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

const FormattedText = ({ text = ''}) => {
  const formattedText = text.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      {index < text.split('\n').length - 1 && <br/>}
    </React.Fragment>
  ));

  return <div>{formattedText}</div>;
};



function App() {
  let src_banner = "/primer/urza/build/banner.webp"
  let card = (name)=>{  return "/primer/urza/build/cards/"+name}
  function ModalRules(props) {
    const [open, setOpen] = useState(false)
    return (
      <Modal open={open}
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          trigger={props.children}
      >

        <ModalContent>
          <h1>{props.label}</h1>
          {DATA.rules.map((element, index) => (
              <React.Fragment key={index}>
                  <p>{element}</p>
                  <Divider clearing />
              </React.Fragment>
          ))}
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
  // <Headerr src="/primer/urza/build/banner.webp"/>

  return (
    <div className="App">
      <NavBar/>
      <Headerr src={src_banner} />
      <div className="App-Body">
        <Card src={card("urza.jpg")}/>

        <Block> <List label="Habilidades:" array={DATA.habilidades}/> </Block>

        <ModalRules label="Notas sobre Urza, Grão-lorde Artífice">
          <Button>Regras Urza</Button>
        </ModalRules><br/><br/>

        <Block>{DATA.intro}</Block>
     
        <Title>Para ganhar com urza você precisa garantir 5 coisas:</Title>
        <Topics array={DATA.wins} />
        
        <Title>Em condiçoes normais de temperatura pressão é necessário se preocupar apenas em ter mana infinita e para gerar mana infinita pode usar de 3 estratégias</Title>
        <Topics array={DATA.loop} />


        <Title>Depois de ter mana infinita é necessario fazer o tutorial ao invez de jogar no hard e descaralhar todo o rolê ou apenas dizer :"Combei com essas cartas... vi na net que com essas cartas comba" portanto com mana infinita o passo a passo para o sucesso é:    </Title>
        <Topics array={DATA.rightWay} />
        
        <Rule> 
          Há algumas palhaçadas legais para se fazer:com token infinitos é possivel fazer com que todo o seu deck seja manifestado
          Com infinitos cast de [An Offer You Can't Refuse] é possivel ter infinitos tesouros
          Com infinitos [swansong] é possivel ter infinitos tokens 2/2
          Com [Sensei's Divining Top] e [Dramatic Reversal] é possivel comprar o deck inteiro ja que colocar o tampo no topo é parte da resolução.
        </Rule>



</div>
    </div>



  );
}

export default App;
