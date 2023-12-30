import logo from './logo.svg';
import './App.css';
import NavBar from './components/navBar/NavBar.js'
import Header from './components/header/Header.js'
import  Block from './components/block/Block.js'
import {List} from './components/list/List.js'
import Explanish from './components/explanish/Explanish.js'
import SetCards from './components/setCards/SetCards.js'
import ComboBox from './components/combobOX/ComboBox.js';
import DATA from './data.js'


function teste(e){
  console.log("TRIGUER")
  console.log(e)
}



let Box = ({children})=>(<Block><Block>{children}</Block></Block>)
let Rule = ({ children }) => (<Block><Block emphasis={true}>{children}</Block> </Block>);
let Lista = ({ children, dataArray })=>(<Block><List label={children} array={dataArray}/></Block>);
let Card = ({src, children})=>(<Block><Explanish type='center' src={src} > {children}</Explanish></Block >);
let CardL = ({src, children})=>(<Block><Explanish type='left' src={src} > {children}</Explanish></Block >);
let CardR = ({src, children})=>(<Block><Explanish type='right' src={src} > {children}</Explanish></Block >);

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Header src="/banner.webp"/>
      <div className="App-Body">

        {/* <Block><List label="Custo" array={["{3}{U}"]}/></Block> */}
        {/* <Block><List label="Tipo" array={["Criatura Lendária — Metamorfo",]}/></Block> */}
        {/* <Block><List label="Poder " array={["3/3"]}/></Block> */}


        
        <Box>{DATA.howPlay}</Box>
        <Box>Notas sobre Orvar das Formas Infindáveis</Box>
        <Card src="/cards/Orvar_das_Formas_Infindaveis.jpg">{DATA.intro} {DATA.shell}</Card>
        <CardL src="/cards/Orvar_das_Formas_Infindaveis.jpg">{DATA.intro} {DATA.shell}</CardL>
        <CardR src="/cards/Orvar_das_Formas_Infindaveis.jpg">{DATA.intro} {DATA.shell}</CardR>
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
        <Block><List label="Porque jogar:" array={DATA.pros}/></Block>
        <Block><List label="Porque NÃO jogar:" array={DATA.contra}/></Block>
        

        <SetCards id="set3" array_src={ [
          "/cards/card.png","/cards/copy.jpg","/cards/card.png","/cards/copy.jpg", "/cards/card.png","/cards/copy.jpg","/cards/card.png","/cards/copy.jpg",
          "/cards/card.png","/cards/copy.jpg","/cards/card.png","/cards/copy.jpg", "/cards/card.png","/cards/copy.jpg","/cards/card.png","/cards/card.png"]}>
            Conjunto de Cartas do versos
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
        <Block ><Explanish type='center' src="/cards/Orvar_das_Formas_Infindaveis.jpg"> {intro} {shell}</Explanish> </Block >

        
        <Block ><Block>{shell}</Block></Block>

        <Block ><ComboBox triguer={teste} /></Block>



        <Block id="Topico1"><Block>Teste Titulo 1</Block></Block>
        <Block ><Block>{why_orvar}</Block></Block>
        <SetCards id="set1" array_src={ [
          "/cards/card.png","/cards/copy.jpg","/cards/card.png","/cards/copy.jpg"]}>
            Conjunto de Cartas do versos
        </SetCards>  
        <Block><List label="Permite brincar com as regras e mecanicas:" array={array_ul}/></Block>




        <Block id="Topico2" emphasis={true} ><Block>Teste Titulo 1</Block></Block>
        <Block ><Block>{why_orvar}</Block></Block>
        <SetCards id="set2" array_src={ [
          "/cards/card.png","/cards/copy.jpg","/cards/card.png","/cards/copy.jpg"]}>
            Conjunto de Cartas do versos
        </SetCards>  
        <Block><List label="Permite brincar com as regras e mecanicas:" array={array_ul}/></Block>





        <Block id="Topico3" ><Block emphasis={true}>{why_orvar}</Block></Block>
        <Block><Block emphasis={true}>{why_orvar}</Block></Block>
        <Block><Block emphasis={true}>{why_orvar}</Block></Block>
        <Block><Block emphasis={true}>{why_orvar}</Block></Block>
        <Block><List label="Permite brincar com as regras e mecanicas:" array={array_ul}/></Block>


        



        <Explanish id="Topico4" type='left' src="/cards/card.png"> 3Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus </Explanish>
        <Explanish type='right' src="/cards/card.png"> 3Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus </Explanish>
        <Block>{why_orvar}</Block>
        <Explanish type='left' src="/cards/card.png"> 3Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus </Explanish>
        <Explanish type='right' src="/cards/card.png"> 3Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus </Explanish>
        <SetCards id="set3" array_src={ [
          "/cards/card.png","/cards/copy.jpg","/cards/card.png","/cards/copy.jpg", "/cards/card.png","/cards/copy.jpg","/cards/card.png","/cards/copy.jpg",
          "/cards/card.png","/cards/copy.jpg","/cards/card.png","/cards/copy.jpg", "/cards/card.png","/cards/copy.jpg","/cards/card.png","/cards/card.png"]}>
            Conjunto de Cartas do versos
        </SetCards>  

         */}


      </div>
    </div>
  );
}

export default App;
