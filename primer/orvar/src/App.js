import React,{ useState } from 'react';
import { Divider, ModalContent, ModalActions, Button, Modal } from 'semantic-ui-react'
import { NavBar } from './components/navBar'
import { Banner } from './components/banner'
import { Block } from './components/block'
import { List, ListDot } from './components/list'
import { ComboBox } from './components/comboBox';
import { Card,Art } from './components/card'
import { Section } from './components/section'
import { ManaText } from './filters/mana.js'
import DATA from './data.js'
import './App.css';
import 'semantic-ui-css/semantic.min.css'

//Sections
import SectionCombos from './sections/Combos.js'
import SectionCards from './sections/Cards.js'
import SectionTutors from './sections/ChainTutors.js'
import SectionTricks from './sections/Tricks.js'


let Box = ({children})=>(<Block>{children}</Block>)

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

const SECTIONS = [
	{ value:"combos", text:"Combos" },
	{ value:"cards", text:"Cartas" },
	{ value:"chain", text:"Tutores" },
	{ value:"trick", text:"Truques" },
]


function App() {
	const [sectionVisible,setSectionVisible] = useState( '' )

	return (
		<div className="App">
			<div className="App-header">	<NavBar/>	<Banner/>	</div>
			<div className="App-Body">
				<Block>{DATA.howPlay}</Block>
				<Block>{DATA.intro} {DATA.shell}</Block>
				<Block>				<Card urlImg={Art.orvar}></Card>				</Block>
				<ModalRules><Button>Regras Orvar</Button></ModalRules>
				<List label="Habilidades:" array={DATA.habilidades}/>
				<Block>{DATA.explanishSkills}</Block>
				<List label="Porque jogar:" array={DATA.pros}/>
				<List label="Porque NÃO jogar:" array={DATA.contra}/>
				<Block>  {DATA.how_Play.map((c, i) => (    <ManaText key={i}>{c}</ManaText>  ))}</Block>
				
				<ComboBox launcher={setSectionVisible} defaultValue="TAG" array={SECTIONS}/>

				<Section value="combos" variable={sectionVisible} >
					<SectionCombos/>
				</Section>

				<Section value="cards" variable={sectionVisible} >
					<SectionCards/>
				</Section>

				<Section value="chain" variable={sectionVisible} >
					<SectionTutors/>
				</Section>

				<Section value="trick" variable={sectionVisible} >
					<SectionTricks/>
				</Section>
				
			{/* 
				<Block text><ManaText>
				{`
					13{u}
					>Wyzard ciclying	{2}
					>Spellseeker {2}{u}
					>Flux {u}
					>Cantrip e Mystical Tutor {u} {u}
					>ExtraTurn e BuyBack {3}{u}{u} e {u}+{2}
				`}
				</ManaText></Block>

				<Block text><ManaText>
				{`
					16{u}
					>Bagunçar mistura {1}{u}{u}
					>veldaken {3}
					>AetherMage {3}{u}{u}
					>Extra Turn {3}{u}{u}
				`}
				</ManaText></Block>

				<Block text><ManaText>
				{`
					8{u}
					>Bagunçar mistura {1}{u}{u}
					>Medalion de Saphire {2}
					>BuyBack {U}+{1}
					>Looping {u}
				`}
				</ManaText></Block>

				<Block text><ManaText>
				{`	9{u}			
					>Spell Seker {2}{u}
					>Flux {HT e Snap} {u}
					>HT {u}
					>Snap in Seker {Hiden String} {1}{u}
					>Hiden String {island} {u}{u}
					>Seker BuyBack {2}{u}
					>BuyBack in Seeker {Bagunçar mistura}    {2}{u}
					>Bagunçar mistura {1}{u}{u}
					>Medalion de Saphire {2}
					>BuyBack in Medalion {1}{u}
					>Looping {u}

				`}
				</ManaText></Block>

				<Block text><ManaText>
				{`	9{u}			
					>Spell Seker {2}{u}
					>Flux {HT e Snap} {u}
					>HT {u}
					>Snap in Seker {Hiden String} {1}{u}
					>Hiden String {island} {u}{u}
					>Seker BuyBack {2}{u}
					>BuyBack in Seeker {Bagunçar mistura}    {2}{u}
					>Bagunçar mistura {1}{u}{u}
					>Medalion de Saphire {2}
					>BuyBack in Medalion {1}{u}
					>Looping {u}
				`}
				</ManaText></Block>

				<Block text><ManaText>
				{`	8{u}			
					>Spell Seker {2}{u}
					>Flux {HT e Snap} {u}
					>HT {u}
					>Snap in Seker {Hiden String} {1}{u}
					>Hiden String {island} {u}{u}
					>Seker BuyBack {2}{u}
					>BuyBack in Seeker {cantrip}    {2}{u}
					>Cantrip in Seeker { Mystical Tutor} {u}{u}
					>Turnabout	{2}{u}{u}
					>Bagunçar mistura {1}{u}{u}
					>Medalion de Saphire {2}
					>BuyBack in Medalion {1}{u}					
					>Looping {u}
				`}
				</ManaText></Block>

				<Block text><ManaText>
				{`	8{u} + Mystical			
					>Spell Seker {2}{u}
					>Flux {HT e Snap} {u}
					>HT {u}
					>Snap in Seker {Hiden String} {1}{u}
					>Hiden String {HT in top} {u}{u}
					>Seker BuyBack {2}{u}
					>BuyBack in Seeker {HT}    {2}{u}
					>HT {u}
					>Loop {u}
				`}
				</ManaText></Block>

				<Block text><ManaText>
				{`	7{u}		VERIFICAR!!	
					>Spell Seker {2}{u}
					>Flux {HT e Snap} {u}
					>HT {u}
					>Snap in Seker {Hiden String} {1}{u}
					>Hiden String {island} {u}{u}
					>Seker {Reality Spasm }{2}{u}
					>Reality Spasm  in seek {2}{u}
					>Seker BuyBack {2}{u}
					>BuyBack in Seeker {cantrip}    {2}{u}
					>Cantrip in Seeker { Mystical Tutor} {u}{u}
					>Turnabout	{2}{u}{u}
					>BuyBack in Seeker {Bagunçar mistura}    {2}{u}
					>Bagunçar mistura {1}{u}{u}
					>Medalion de Saphire {2}
					>BuyBack in Medalion {1}{u}					
					>Looping {u}
				`}
				</ManaText></Block>

				<Block text><ManaText>
				{`
					3{u}+mystical
					> encantamento {U}
					> cantrip {u}
					> cantrip {u}				
					>Looping {u}
				`}
				</ManaText></Block>

				<Block text><ManaText>
				{`
					3{u}+mystical
					>HT {u}
					>cantrip tritao {u}
					>miragen {1}{u}
				`}
				</ManaText></Block>
				
				<Block text><ManaText>
				{`
					3{u}+mystical
					>HT {u}
					>cantrip tritao {u}
					>HT {u}
					>Target {u}
					>Draw  {u} 
				`}
				</ManaText></Block>
				
			*/
			}
				
			</div>
		</div>
	)
}
export default App;		