// import Explanish from './components/explanish/Explanish.js'

import { useRef,useState } from 'react';
import {NavBar} from './components/navBar'
import {Banner} from './components/banner'
import banner from './assets/banner.webp'
import  {Block} from './components/block'
import {List} from './components/list'
import {ComboBox} from './components/comboBox';
import DATA from './data.js'
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import {Card} from './components/card'
import { Accordion, Divider,   Segment ,ModalHeader, ModalDescription, ModalContent, ModalActions, Button,Confirm, Header, Image, Modal, } from 'semantic-ui-react'
import Description from './components/description'
import { PopUp } from './components/popUp';

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
				<p>{DATA.rule_21}</p><Divider clearing />
				<p>{DATA.rule_22}</p><Divider clearing />
				<p>{DATA.rule_23}</p><Divider clearing />
				<p>{DATA.rule_24}</p><Divider clearing />
				<p>{DATA.rule_25}</p><Divider clearing />
				<p>{DATA.rule_26}</p><Divider clearing />
				<p>{DATA.rule_27}</p><Divider clearing />
				<p>{DATA.rule_28}</p>
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




function App() {

	return (
		<div className="App">
			<NavBar/>
			<Banner src={banner}/>
			<main>
				<div className="App-Body">
					<Box>{DATA.howPlay}</Box>
					<List label="Habilidades:" array={DATA.habilidades}/>
					<ModalRules>
						<Button>Regras Orvar</Button>
					</ModalRules>
					<Box>{DATA.intro} {DATA.shell}</Box>
					<List label="Porque jogar:" array={DATA.pros}/>
					<List label="Porque NÃO jogar:" array={DATA.contra}/>

					<ComboBox triguer={console.log} name="Chain de Tutor" array={ [{ value:"Intuition", text:"Intuition" },{ value:"Spellseeker", text:"Spellseeker" }] }/>
					<Box>
					<Card nameCard="oi" urlImg="https://cards.scryfall.io/large/front/7/4/741c479b-5e92-4837-9673-9bc72aa11d26.jpg"/>
					<Card nameCard="oi" urlImg="https://cards.scryfall.io/large/front/7/4/741c479b-5e92-4837-9673-9bc72aa11d26.jpg"/>
					</Box>
					<Description.Container nameCard={"nameCard"} urlImg="https://cards.scryfall.io/large/front/7/4/741c479b-5e92-4837-9673-9bc72aa11d26.jpg?1562637557">

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

					<PopUp visible={true}>
					<Description.Container nameCard={"nameCard"} urlImg="https://cards.scryfall.io/large/front/7/4/741c479b-5e92-4837-9673-9bc72aa11d26.jpg?1562637557">
					<Description.Text 
						trick="Dolor velit deserunt dolor aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetu aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis sir quis sin Commodo aliquip exercitation laboris est velit ut veniam consequat dolore ut qui. Ea ex velit commodo tempor voluptate exercitation nisi ea ipsum officia do est proident. Dolore id mollit excepteur tempor nostrud veniam Lorem ullamco minim irure. Quis aliqua exercitation ex esse ad et proident aliqua adipisicing officia aute labore. Minim cupidatat occaecat officia voluptate velit in minim Lorem consectetur quis Lorem.Eu officia ea duis exercitation magna commodo aliquip consequat dolor nulla reprehenderit laborum sunt anim. Ipsum voluptate eu sint commodo sit incididunt ut proident anim proident id magna. Nulla aliquip in ut amet tempor proident irure. Occaecat eiusmod culpa ullamco dolor elit aute dolor ullamco. Ut dolor ipsum voluptate anim anim non ullamco. Dolore mollit ullamco veniam quis incididunt est enim veniam anim eu qui ad deserunt. Eu dolor ipsum dolor velit deserunt dolor aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis si aliqua consectetu aliqua consectetur quis si aliqua consectetur quis si aliqua consectetur quis sir quis sin FIM"
					/>
</Description.Container>	
					</PopUp>	
			    
				</div>
			</main>
		</div>
	)
					
							
							
							
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
}
		export default App;
		