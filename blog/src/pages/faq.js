import React, { useEffect } from "react"
import Accordion from 'react-bootstrap/Accordion';

import Tips from '@components/Tips/index.js'
import Footer from '@components/FooterBar/index.js';
import { AlertProvider, } from "@components/Alert/index.js";
import {Question} from '@components/Faq/index.js';
import Aos from "aos";

import Layout from '@layout/withFooter'
const IndexPage = () => {
	useEffect(()=>{
		Aos.init()
	})


	return (
		<>
		<Layout>

			<h1>      FAQ (ou Perguntas Frequentes)      </h1><br/>
			<Accordion defaultActiveKey="-1">
				<Question eventKey="0" title="O que é nada?">				Nada é exatamente isso: a ausência de algo, mas ainda assim, é tudo o que você está lendo agora.
				</Question>

				<Question eventKey="1" title="Nada é importante?">				Depende. Às vezes, nada é tudo o que você precisa, mas também pode não ser nada demais.
				</Question>

				<Question eventKey="2" title="Por que existe um FAQ sobre nada?">				Porque alguém perguntou, e aqui estamos, transformando nada em algo.
				</Question>

			</Accordion>

			<br/>
			
			
			Est exercitation eiusmod in dolor fugiat Lorem tempor velit minim nulla tempor id. Minim ut adipisicing nisi aute ad reprehenderit magna occaecat ut cupidatat nisi. Nisi laborum commodo amet dolor dolor irure occaecat Lorem incididunt enim amet. Qui labore Lorem exercitation do. Aute labore ea magna labore exercitation dolor occaecat duis. Incididunt elit eiusmod voluptate id ad esse.
			<Tips text = "oi"> ullamco non ipsum </Tips>
			Est exercitation eiusmod in dolor fugiat Lorem tempor velit minim nulla tempor id. Minim ut adipisicing nisi aute ad reprehenderit magna occaecat ut cupidatat nisi. Nisi laborum commodo amet dolor dolor irure occaecat Lorem incididunt enim amet. Qui labore Lorem exercitation do. Aute labore ea magna labore exercitation dolor occaecat duis. Incididunt elit eiusmod voluptate id ad esse.
			<Tips text = "oi"> ullamco non ipsum </Tips>


		

		</Layout>
		</>
	)
}




export const Head = () => (
	<>
		 <title>Perguntas Frequentes</title>
		 <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
	</>
)
export default IndexPage