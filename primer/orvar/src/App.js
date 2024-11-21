// import Explanish from './components/explanish/Explanish.js'

import React,{ useRef,useState } from 'react';
import { Accordion , Divider, Segment ,ModalHeader, ModalDescription, ModalContent, ModalActions, Button,Confirm, Header, Image, Modal, } from 'semantic-ui-react'
import { NavBar } from './components/navBar'
import { Banner } from './components/banner'
import { Block } from './components/block'
import { Badget } from './components/badget'
import { List } from './components/list'
import { ComboBox } from './components/comboBox';
import { Card } from './components/card'
import { Section } from './components/section'
import { PopUp } from './components/popUp';
import Description from './components/description'
import DATA from './data.js'
import banner from './assets/banner.webp'
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import {ManaText} from './filters/mana.js'

let Box = ({children})=>(<Block>{children}</Block>)
// let Rule = ({ children}) => (<Block><Block emphasis={true}>{children}</Block> </Block>);
// let Lista = ({ children, dataArray })=>(<Block><List label={children} array={dataArray}/></Block>);
// let Card = ({src, children})=>(<Block><Explanish type='center' src={src} > {children}</Explanish></Block >);
// let CardL = ({src, children})=>(<Block><Explanish type='left' src={src} > {children}</Explanish></Block >);
// let CardR = ({src, children})=>(<Block><Explanish type='right' src={src} > {children}</Explanish></Block >);


function goTo(id){
	const tag =  document.getElementById(id)
	tag.scrollIntoView({ behavior: 'smooth' });
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
			{
				DATA.rules.map((rule, index) => (
					<React.Fragment key={index}>
						<p>{rule}</p>
						{index !== DATA.rules.length - 1 && <Divider clearing />}
					</React.Fragment>
				))
			}
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

function CardWithPopUp({nameCard,urlImg,text,badgets}){
	return (
		<PopUp trigger={
			<Card nameCard={nameCard} urlImg={urlImg}>{badgets}</Card>
		}>
			<Description.Container nameCard={nameCard} urlImg={urlImg}>
				<Description.Text trick={text} />
			</Description.Container>	
		</PopUp>
	)
}


function App() {
	const [sectionVisible,setSectionVisible] = useState( '' )

	return (
		<div className="App">
			<div className="App-header">	<NavBar/>	<Banner src={banner}/>	</div>
			<div className="App-Body">
				<Block>{DATA.howPlay}</Block>
				<Block>{DATA.intro} {DATA.shell}</Block>
				<ModalRules><Button>Regras Orvar</Button></ModalRules>
				<List label="Habilidades:" array={DATA.habilidades}/>
				<Block>{DATA.explanishSkills}</Block>
				<List label="Porque jogar:" array={DATA.pros}/>
				<List label="Porque NÃO jogar:" array={DATA.contra}/>
				<Block>  {DATA.how_Play.map((c, i) => (    <ManaText key={i}>{c}</ManaText>  ))}</Block>
				<h1>Cartas separadas por TAG</h1>
				<ComboBox launcher={setSectionVisible}
					defaultValue="TAG"
					array={[
						{ value:"Cards do tipo A", text:"Cards do tipo A" },
						{ value:"DrawGo", text:"DrawGo" },
						{ value:"Creature", text:"Creature" },
				]}/>

				<Block><Card 
					nameCard="FON"
					urlImg="https://cards.scryfall.io/large/front/5/3/5396b405-6fa0-43d7-a8f6-f64154e95e98.jpg?1698434610">
					<Badget color="rgb(255, 73, 73)" text="Target" position="rt"/>
					<Badget color="rgb(247, 255, 87)" text="Target" position="lb"/>
				</Card></Block>

				<hr></hr>

				<Section variable={sectionVisible} value='Cards do tipo A'>
					<CardWithPopUp 
						nameCard="FON"
						urlImg="https://cards.scryfall.io/large/front/8/4/84e70a5b-f846-45a3-808b-377da3165f2e.jpg?1681081752"
						text="Dolor velit deserunt dolor aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetu aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis sir quis sin Commodo aliquip exercitation laboris est velit ut veniam consequat dolore ut qui. Ea ex velit commodo tempor voluptate exercitation nisi ea ipsum officia do est proident. Dolore id mollit excepteur tempor nostrud veniam Lorem ullamco minim irure. Quis aliqua exercitation ex esse ad et proident aliqua adipisicing officia aute labore. Minim cupidatat occaecat officia voluptate velit in minim Lorem consectetur quis Lorem.Eu officia ea duis exercitation magna commodo aliquip consequat dolor nulla reprehenderit laborum sunt anim. Ipsum voluptate eu sint commodo sit incididunt ut proident anim proident id magna. Nulla aliquip in ut amet tempor proident irure. Occaecat eiusmod culpa ullamco dolor elit aute dolor ullamco. Ut dolor ipsum voluptate anim anim non ullamco. Dolore mollit ullamco veniam quis incididunt est enim veniam anim eu qui ad deserunt. Eu dolor ipsum dolor velit deserunt dolor aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetu aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis sir quis sin FIM"
					/>
				</Section>

				<Section variable={sectionVisible} value='Spellseeker'>
					<Card nameCard="FON" urlImg="https://cards.scryfall.io/large/front/5/3/5396b405-6fa0-43d7-a8f6-f64154e95e98.jpg?1698434610"/>
					<Card nameCard="FON" urlImg="https://cards.scryfall.io/large/front/8/4/84e70a5b-f846-45a3-808b-377da3165f2e.jpg?1681081752"/>
					<Card nameCard="FON" urlImg="https://cards.scryfall.io/large/front/0/d/0d840284-ce56-4e4f-822f-8b237a261d1e.jpg?1681411109"/>
					<Card nameCard="FON" urlImg="https://cards.scryfall.io/large/front/e/9/e9be371c-c688-44ad-ab71-bd4c9f242d58.jpg?1562201382"/>
				</Section>

				<Description.Container nameCard="Vial" urlImg="https://cards.scryfall.io/large/front/7/4/741c479b-5e92-4837-9673-9bc72aa11d26.jpg?1562637557">

					<Description.Text 
						title="O que a carta Faz?"
						trick="Lorem consectetur quis Lorem.Eu officia ea duis exercitation magna commodo aliquip consequat dolor nulla reprehenderit laborum sunt anim. Ipsum voluptate eu sint commodo sit incididunt ut proident anim proident id magna. Nulla aliquip in ut amet tempor proident irure. Occaecat eiusmod culpa ullamco dolor elit aute dolor ullamco. Ut dolor ipsum voluptate anim anim non ullamco. Dolore mollit ullamco veniam quis incididunt est enim veniam anim eu qui ad deserunt. Eu dolor ipsum dolor velit deserunt dolor aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetu aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis sir quis sin FIM"
					/>
					<Description.Text 
						title="Porque esta carta está no deck?"
						trick="Commodo orem.Eu officia ea duis exercitation magna commodo aliquip consequat dolor nulla reprehenderit laborum sunt anim. Ipsum voluptate eu sint commodo sit incididunt ut proident anim proident id magna. Nulla aliquip in ut amet tempor proident irure. Occaecat eiusmod culpa ullamco dolor elit aute dolor ullamco. Ut dolor ipsum voluptate anim anim non ullamco. Dolore mollit ullamco veniam quis incididunt est enim veniam anim eu qui ad deserunt. Eu dolor ipsum dolor velit deserunt dolor aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetu aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis sir quis sin FIM"
					/>
					<Description.Text 
						title="Tricks:"
						trick="Aliquip consequat dolor nulla reprehenderit laborum sunt anim. Ipsum voluptate eu sint commodo sit incididunt ut proident anim proident id magna. Nulla aliquip in ut amet tempor proident irure. Occaecat eiusmod culpa ullamco dolor elit aute dolor ullamco. Ut dolor ipsum voluptate anim anim non ullamco. Dolore mollit ullamco veniam quis incididunt est enim veniam anim eu qui ad deserunt. Eu dolor ipsum dolor velit deserunt dolor aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetu aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis sir quis sin FIM"
					/>
					<Description.Text 
						trick="Dolor velit deserunt dolor aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetu aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis sir quis sin Commodo aliquip exercitation laboris est velit ut veniam consequat dolore ut qui. Ea ex velit commodo tempor voluptate exercitation nisi ea ipsum officia do est proident. Dolore id mollit excepteur tempor nostrud veniam Lorem ullamco minim irure. Quis aliqua exercitation ex esse ad et proident aliqua adipisicing officia aute labore. Minim cupidatat occaecat officia voluptate velit in minim Lorem consectetur quis Lorem.Eu officia ea duis exercitation magna commodo aliquip consequat dolor nulla reprehenderit laborum sunt anim. Ipsum voluptate eu sint commodo sit incididunt ut proident anim proident id magna. Nulla aliquip in ut amet tempor proident irure. Occaecat eiusmod culpa ullamco dolor elit aute dolor ullamco. Ut dolor ipsum voluptate anim anim non ullamco. Dolore mollit ullamco veniam quis incididunt est enim veniam anim eu qui ad deserunt. Eu dolor ipsum dolor velit deserunt dolor aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetu aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis sir quis sin FIM"
					/>
				</Description.Container>	


				<Block>
					<CardWithPopUp 
							badgets={[ <Badget color="rgb(255, 73, 73)" text="Target" position="rt"/>, <Badget color="rgb(247, 255, 87)" text="Target" position="lb"/>]}
							nameCard="FON"
							urlImg="https://cards.scryfall.io/large/front/8/4/84e70a5b-f846-45a3-808b-377da3165f2e.jpg?1681081752"
							text="Dolor velit deserunt dolor aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetu aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis sir quis sin Commodo aliquip exercitation laboris est velit ut veniam consequat dolore ut qui. Ea ex velit commodo tempor voluptate exercitation nisi ea ipsum officia do est proident. Dolore id mollit excepteur tempor nostrud veniam Lorem ullamco minim irure. Quis aliqua exercitation ex esse ad et proident aliqua adipisicing officia aute labore. Minim cupidatat occaecat officia voluptate velit in minim Lorem consectetur quis Lorem.Eu officia ea duis exercitation magna commodo aliquip consequat dolor nulla reprehenderit laborum sunt anim. Ipsum voluptate eu sint commodo sit incididunt ut proident anim proident id magna. Nulla aliquip in ut amet tempor proident irure. Occaecat eiusmod culpa ullamco dolor elit aute dolor ullamco. Ut dolor ipsum voluptate anim anim non ullamco. Dolore mollit ullamco veniam quis incididunt est enim veniam anim eu qui ad deserunt. Eu dolor ipsum dolor velit deserunt dolor aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetu aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis sir quis sin FIM"
					/>
					<CardWithPopUp 
							badgets={[ <Badget color="gray" text="x2" position="rt"/>, <Badget color="gray" text="hold" position="lb"/>]}
							nameCard="FON"
							urlImg="https://cards.scryfall.io/large/front/8/4/84e70a5b-f846-45a3-808b-377da3165f2e.jpg?1681081752"
							text="Dolor velit deserunt dolor aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetu aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis sir quis sin Commodo aliquip exercitation laboris est velit ut veniam consequat dolore ut qui. Ea ex velit commodo tempor voluptate exercitation nisi ea ipsum officia do est proident. Dolore id mollit excepteur tempor nostrud veniam Lorem ullamco minim irure. Quis aliqua exercitation ex esse ad et proident aliqua adipisicing officia aute labore. Minim cupidatat occaecat officia voluptate velit in minim Lorem consectetur quis Lorem.Eu officia ea duis exercitation magna commodo aliquip consequat dolor nulla reprehenderit laborum sunt anim. Ipsum voluptate eu sint commodo sit incididunt ut proident anim proident id magna. Nulla aliquip in ut amet tempor proident irure. Occaecat eiusmod culpa ullamco dolor elit aute dolor ullamco. Ut dolor ipsum voluptate anim anim non ullamco. Dolore mollit ullamco veniam quis incididunt est enim veniam anim eu qui ad deserunt. Eu dolor ipsum dolor velit deserunt dolor aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetu aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis sir quis sin FIM"
					/>
					<CardWithPopUp 
							nameCard="FON"
							urlImg="https://cards.scryfall.io/large/front/8/4/84e70a5b-f846-45a3-808b-377da3165f2e.jpg?1681081752"
							text="Dolor velit deserunt dolor aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetu aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis sir quis sin Commodo aliquip exercitation laboris est velit ut veniam consequat dolore ut qui. Ea ex velit commodo tempor voluptate exercitation nisi ea ipsum officia do est proident. Dolore id mollit excepteur tempor nostrud veniam Lorem ullamco minim irure. Quis aliqua exercitation ex esse ad et proident aliqua adipisicing officia aute labore. Minim cupidatat occaecat officia voluptate velit in minim Lorem consectetur quis Lorem.Eu officia ea duis exercitation magna commodo aliquip consequat dolor nulla reprehenderit laborum sunt anim. Ipsum voluptate eu sint commodo sit incididunt ut proident anim proident id magna. Nulla aliquip in ut amet tempor proident irure. Occaecat eiusmod culpa ullamco dolor elit aute dolor ullamco. Ut dolor ipsum voluptate anim anim non ullamco. Dolore mollit ullamco veniam quis incididunt est enim veniam anim eu qui ad deserunt. Eu dolor ipsum dolor velit deserunt dolor aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetu aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis sir quis sin FIM"
					/>
					<CardWithPopUp 
							nameCard="FON"
							urlImg="https://cards.scryfall.io/large/front/8/4/84e70a5b-f846-45a3-808b-377da3165f2e.jpg?1681081752"
							text="Dolor velit deserunt dolor aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetu aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis sir quis sin Commodo aliquip exercitation laboris est velit ut veniam consequat dolore ut qui. Ea ex velit commodo tempor voluptate exercitation nisi ea ipsum officia do est proident. Dolore id mollit excepteur tempor nostrud veniam Lorem ullamco minim irure. Quis aliqua exercitation ex esse ad et proident aliqua adipisicing officia aute labore. Minim cupidatat occaecat officia voluptate velit in minim Lorem consectetur quis Lorem.Eu officia ea duis exercitation magna commodo aliquip consequat dolor nulla reprehenderit laborum sunt anim. Ipsum voluptate eu sint commodo sit incididunt ut proident anim proident id magna. Nulla aliquip in ut amet tempor proident irure. Occaecat eiusmod culpa ullamco dolor elit aute dolor ullamco. Ut dolor ipsum voluptate anim anim non ullamco. Dolore mollit ullamco veniam quis incididunt est enim veniam anim eu qui ad deserunt. Eu dolor ipsum dolor velit deserunt dolor aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetu aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis sir quis sin FIM"
					/>
					<CardWithPopUp 
							nameCard="FON"
							urlImg="https://cards.scryfall.io/large/front/8/4/84e70a5b-f846-45a3-808b-377da3165f2e.jpg?1681081752"
							text="Dolor velit deserunt dolor aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetu aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis sir quis sin Commodo aliquip exercitation laboris est velit ut veniam consequat dolore ut qui. Ea ex velit commodo tempor voluptate exercitation nisi ea ipsum officia do est proident. Dolore id mollit excepteur tempor nostrud veniam Lorem ullamco minim irure. Quis aliqua exercitation ex esse ad et proident aliqua adipisicing officia aute labore. Minim cupidatat occaecat officia voluptate velit in minim Lorem consectetur quis Lorem.Eu officia ea duis exercitation magna commodo aliquip consequat dolor nulla reprehenderit laborum sunt anim. Ipsum voluptate eu sint commodo sit incididunt ut proident anim proident id magna. Nulla aliquip in ut amet tempor proident irure. Occaecat eiusmod culpa ullamco dolor elit aute dolor ullamco. Ut dolor ipsum voluptate anim anim non ullamco. Dolore mollit ullamco veniam quis incididunt est enim veniam anim eu qui ad deserunt. Eu dolor ipsum dolor velit deserunt dolor aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetu aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis sir quis sin FIM"
					/>

				</Block>
			</div>
		</div>
	)
}

export default App;		