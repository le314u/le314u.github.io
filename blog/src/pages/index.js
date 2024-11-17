import React, { useEffect } from "react"
import Accordion from 'react-bootstrap/Accordion';

import { graphql, useStaticQuery } from "gatsby"
import Tips from '@components/Tips/index.js'
import NavBar from '@components/NavBar/index.js'
import Footer from '@components/FooterBar/index.js';
import CodeBlock from '@components/CodeBlock/index.js';
import { AlertProvider, } from "@components/Alert/index.js";
import  {ListCard,Card} from "@components/Card/index";

import Aos from "aos";
const spaceNavBar = {
  paddingTop:'60px',
};


const IndexPage = () => {
  useEffect(()=>{
    Aos.init()
  })

const data = useStaticQuery(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "data" } }) {
        edges {
          node {
            relativePath,
            prettySize,
            extension,
            birthTime,
            publicURL
          }
        }
      }
    }
`)

const javascriptCode = `  const greeting = 'Hello, World!';
  console.log(greeting);
`;

const pythonCode = `  greeting = 'Hello, World!'
  print(greeting)
`;

function myGraph(){
  return (<div>
  <h1>Meus Posts</h1>
  <ul>
    {data.allFile.edges.map(({ node }) => (
      <li key={node.relativePath}>
        <a href={node.publicURL}>
          <strong>{node.relativePath}</strong> - {node.prettySize} - {node.extension} - {node.birthTime}
        </a>
      </li>
    ))}
  </ul>
</div>)
}


const FAQ = (  <>
<h1>      FAQ      </h1>
  <Accordion defaultActiveKey="-1">
  <Accordion.Item eventKey="0">
    <Accordion.Header>Accordion Item #1</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat. Duis aute irure dolor in
      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
      culpa qui officia deserunt mollit anim id est laborum.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Accordion Item #2</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat. Duis aute irure dolor in
      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
      culpa qui officia deserunt mollit anim id est laborum.
    </Accordion.Body>
  </Accordion.Item>
  </Accordion>
</>
)

  return (
    <>
    <AlertProvider>

      <NavBar/>
      Est exercitation eiusmod in dolor fugiat Lorem tempor velit minim nulla tempor id. Minim ut adipisicing nisi aute ad reprehenderit magna occaecat ut cupidatat nisi. Nisi laborum commodo amet dolor dolor irure occaecat Lorem incididunt enim amet. Qui labore Lorem exercitation do. Aute labore ea magna labore exercitation dolor occaecat duis. Incididunt elit eiusmod voluptate id ad esse. Est exercitation eiusmod in dolor fugiat Lorem tempor velit minim nulla tempor id. Minim ut adipisicing nisi aute ad reprehenderit magna occaecat ut cupidatat nisi. Nisi laborum commodo amet dolor dolor irure occaecat Lorem incididunt enim amet. Qui labore Lorem exercitation do. Aute labore ea magna labore exercitation dolor occaecat duis. Incididunt elit eiusmod voluptate id ad esse. Est exercitation eiusmod in dolor fugiat Lorem tempor velit minim nulla tempor id. Minim ut adipisicing nisi aute ad reprehenderit magna occaecat ut cupidatat nisi. Nisi laborum commodo amet dolor dolor irure occaecat Lorem incididunt enim amet. Qui labore Lorem exercitation do. Aute labore ea magna labore exercitation dolor occaecat duis. Incididunt elit eiusmod voluptate id ad esse. Est exercitation eiusmod in dolor fugiat Lorem tempor velit minim nulla tempor id. Minim ut adipisicing nisi aute ad reprehenderit magna occaecat ut cupidatat nisi. Nisi laborum commodo amet dolor dolor irure occaecat Lorem incididunt enim amet. Qui labore Lorem exercitation do. Aute labore ea magna labore exercitation dolor occaecat duis. Incididunt elit eiusmod voluptate id ad esse. Est exercitation eiusmod in dolor fugiat Lorem tempor velit minim nulla tempor id. Minim ut adipisicing nisi aute ad reprehenderit magna occaecat ut cupidatat nisi. Nisi laborum commodo amet dolor dolor irure occaecat Lorem incididunt enim amet. Qui labore Lorem exercitation do. Aute labore ea magna labore exercitation dolor occaecat duis. Incididunt elit eiusmod voluptate id ad esse. Est exercitation eiusmod in dolor fugiat Lorem tempor velit minim nulla tempor id. Minim ut adipisicing nisi aute ad reprehenderit magna occaecat ut cupidatat nisi. Nisi laborum commodo amet dolor dolor irure occaecat Lorem incididunt enim amet. Qui labore Lorem exercitation do. Aute labore ea magna labore exercitation dolor occaecat duis. Incididunt elit eiusmod voluptate id ad esse. Est exercitation eiusmod in dolor fugiat Lorem tempor velit minim nulla tempor id. Minim ut adipisicing nisi aute ad reprehenderit magna occaecat ut cupidatat nisi. Nisi laborum commodo amet dolor dolor irure occaecat Lorem incididunt enim amet. Qui labore Lorem exercitation do. Aute labore ea magna labore exercitation dolor occaecat duis. Incididunt elit eiusmod voluptate id ad esse. Est exercitation eiusmod in dolor fugiat Lorem tempor velit minim nulla tempor id. Minim ut adipisicing nisi aute ad reprehenderit magna occaecat ut cupidatat nisi. Nisi laborum commodo amet dolor dolor irure occaecat Lorem incididunt enim amet. Qui labore Lorem exercitation do. Aute labore ea magna labore exercitation dolor occaecat duis. Incididunt elit eiusmod voluptate id ad esse. Est exercitation eiusmod in dolor fugiat Lorem tempor velit minim nulla tempor id. Minim ut adipisicing nisi aute ad reprehenderit magna occaecat ut cupidatat nisi. Nisi laborum commodo amet dolor dolor irure occaecat Lorem incididunt enim amet. Qui labore Lorem exercitation do. Aute labore ea magna labore exercitation dolor occaecat duis. Incididunt elit eiusmod voluptate id ad esse. Est exercitation eiusmod in dolor fugiat Lorem tempor velit minim nulla tempor id. Minim ut adipisicing nisi aute ad reprehenderit magna occaecat ut cupidatat nisi. Nisi laborum commodo amet dolor dolor irure occaecat Lorem incididunt enim amet. Qui labore Lorem exercitation do. Aute labore ea magna labore exercitation dolor occaecat duis. Incididunt elit eiusmod voluptate id ad esse. Est exercitation eiusmod in dolor fugiat Lorem tempor velit minim nulla tempor id. Minim ut adipisicing nisi aute ad reprehenderit magna occaecat ut cupidatat nisi. Nisi laborum commodo amet dolor dolor irure occaecat Lorem incididunt enim amet. Qui labore Lorem exercitation do. Aute labore ea magna labore exercitation dolor occaecat duis. Incididunt elit eiusmod voluptate id ad esse. Est exercitation eiusmod in dolor fugiat Lorem tempor velit minim nulla tempor id. Minim ut adipisicing nisi aute ad reprehenderit magna occaecat ut cupidatat nisi. Nisi laborum commodo amet dolor dolor irure occaecat Lorem incididunt enim amet. Qui labore Lorem exercitation do. Aute labore ea magna labore exercitation dolor occaecat duis. Incididunt elit eiusmod voluptate id ad esse. Est exercitation eiusmod in dolor fugiat Lorem tempor velit minim nulla tempor id. Minim ut adipisicing nisi aute ad reprehenderit magna occaecat ut cupidatat nisi. Nisi laborum commodo amet dolor dolor irure occaecat Lorem incididunt enim amet. Qui labore Lorem exercitation do. Aute labore ea magna labore exercitation dolor occaecat duis. Incididunt elit eiusmod voluptate id ad esse. Est exercitation eiusmod in dolor fugiat Lorem tempor velit minim nulla tempor id. Minim ut adipisicing nisi aute ad reprehenderit magna occaecat ut cupidatat nisi. Nisi laborum commodo amet dolor dolor irure occaecat Lorem incididunt enim amet. Qui labore Lorem exercitation do. Aute labore ea magna labore exercitation dolor occaecat duis. Incididunt elit eiusmod voluptate id ad esse. Est exercitation eiusmod in dolor fugiat Lorem tempor velit minim nulla tempor id. Minim ut adipisicing nisi aute ad reprehenderit magna occaecat ut cupidatat nisi. Nisi laborum commodo amet dolor dolor irure occaecat Lorem incididunt enim amet. Qui labore Lorem exercitation do. Aute labore ea magna labore exercitation dolor occaecat duis. Incididunt elit eiusmod voluptate id ad esse. Est exercitation eiusmod in dolor fugiat Lorem tempor velit minim nulla tempor id. Minim ut adipisicing nisi aute ad reprehenderit magna occaecat ut cupidatat nisi. Nisi laborum commodo amet dolor dolor irure occaecat Lorem incididunt enim amet. Qui labore Lorem exercitation do. Aute labore ea magna labore exercitation dolor occaecat duis. Incididunt elit eiusmod voluptate id ad esse. Est exercitation eiusmod in dolor fugiat Lorem tempor velit minim nulla tempor id. Minim ut adipisicing nisi aute ad reprehenderit magna occaecat ut cupidatat nisi. Nisi laborum commodo amet dolor dolor irure occaecat Lorem incididunt enim amet. Qui labore Lorem exercitation do. Aute labore ea magna labore exercitation dolor occaecat duis. Incididunt elit eiusmod voluptate id ad esse. Est exercitation eiusmod in dolor fugiat Lorem tempor velit minim nulla tempor id. Minim ut adipisicing nisi aute ad reprehenderit magna occaecat ut cupidatat nisi. Nisi laborum commodo amet dolor dolor irure occaecat Lorem incididunt enim amet. Qui labore Lorem exercitation do. Aute labore ea magna labore exercitation dolor occaecat duis. Incididunt elit eiusmod voluptate id ad esse. Est exercitation eiusmod in dolor fugiat Lorem tempor velit minim nulla tempor id. Minim ut adipisicing nisi aute ad reprehenderit magna occaecat ut cupidatat nisi. Nisi laborum commodo amet dolor dolor irure occaecat Lorem incididunt enim amet. Qui labore Lorem exercitation do. Aute labore ea magna labore exercitation dolor occaecat duis. Incididunt elit eiusmod voluptate id ad esse. Est exercitation eiusmod in dolor fugiat Lorem tempor velit minim nulla tempor id. Minim ut adipisicing nisi aute ad reprehenderit magna occaecat ut cupidatat nisi. Nisi laborum commodo amet dolor dolor irure occaecat Lorem incididunt enim amet. Qui labore Lorem exercitation do. Aute labore ea magna labore exercitation dolor occaecat duis. Incididunt elit eiusmod voluptate id ad esse. Est exercitation eiusmod in dolor fugiat Lorem tempor velit minim nulla tempor id. Minim ut adipisicing nisi aute ad reprehenderit magna occaecat ut cupidatat nisi. Nisi laborum commodo amet dolor dolor irure occaecat Lorem incididunt enim amet. Qui labore Lorem exercitation do. Aute labore ea magna labore exercitation dolor occaecat duis. Incididunt elit eiusmod voluptate id ad esse. Est exercitation eiusmod in dolor fugiat Lorem tempor velit minim nulla tempor id. Minim ut adipisicing nisi aute ad reprehenderit magna occaecat ut cupidatat nisi. Nisi laborum commodo amet dolor dolor irure occaecat Lorem incididunt enim amet. Qui labore Lorem exercitation do. Aute labore ea magna labore exercitation dolor occaecat duis. Incididunt elit eiusmod voluptate id ad esse. Est exercitation eiusmod in dolor fugiat Lorem tempor velit minim nulla tempor id. Minim ut adipisicing nisi aute ad reprehenderit magna occaecat ut cupidatat nisi. Nisi laborum commodo amet dolor dolor irure occaecat Lorem incididunt enim amet. Qui labore Lorem exercitation do. Aute labore ea magna labore exercitation dolor occaecat duis. Incididunt elit eiusmod voluptate id ad esse.
      <main style={spaceNavBar}>
      <a href='  http://localhost:8000/___graphql'> graphql</a>
      <a href='  http://localhost:8000/___graphql'> graphql</a>
      <a href='  http://localhost:8000/___graphql'> graphql</a>
      <a href='  http://localhost:8000/___graphql'> graphql</a>
      <a href='  http://localhost:8000/___graphql'> graphql</a>




      <h2 data-aos="zoom-in">JavaScript</h2>

      <div data-aos="flip-up">
      <CodeBlock  code={javascriptCode} language="javascript" />
      </div>

      <h2 data-aos="zoom-in">Python</h2>
      <CodeBlock code={pythonCode} language="python" />

      <h2 data-aos="zoom-in" >Erro</h2>

      <div
       data-aos="flip-up"
       data-aos-duration="1500"
      >
      <CodeBlock code={pythonCode}  language="javascript" />
      <CodeBlock code={javascriptCode} language="python" />
      </div>
      
      Est exercitation eiusmod in dolor fugiat Lorem tempor velit minim nulla tempor id. Minim ut adipisicing nisi aute ad reprehenderit magna occaecat ut cupidatat nisi. Nisi laborum commodo amet dolor dolor irure occaecat Lorem incididunt enim amet. Qui labore Lorem exercitation do. Aute labore ea magna labore exercitation dolor occaecat duis. Incididunt elit eiusmod voluptate id ad esse.
      <Tips text = "oi"> ullamco non ipsum </Tips>
      Est exercitation eiusmod in dolor fugiat Lorem tempor velit minim nulla tempor id. Minim ut adipisicing nisi aute ad reprehenderit magna occaecat ut cupidatat nisi. Nisi laborum commodo amet dolor dolor irure occaecat Lorem incididunt enim amet. Qui labore Lorem exercitation do. Aute labore ea magna labore exercitation dolor occaecat duis. Incididunt elit eiusmod voluptate id ad esse.
      <Tips text = "oi"> ullamco non ipsum </Tips>

    
      {myGraph()}
      {FAQ}


      <ListCard>
				<Card urlImg="https://cards.scryfall.io/art_crop/front/f/5/f527010e-d382-4bd5-8de6-0e3898b80deb.jpg?1682692590"
				 title="Mother of runes"
				 text={
					"Trick1: Batler skull atacar e virar\n"+
					"Trick2: Evita Target e so toma global\n"+
					"Trick3: Batler skull atacar e virar\n"+
					"Trick4: Batler skull atacar e virar\n"+
					"Trick5: Batler skull atacar e virar\n"}/>
				<Card title="Guerreiro" urlImg="https://cards.scryfall.io/art_crop/front/a/6/a6a96d0b-5c8f-4563-92a0-a2c9e595100b.jpg?1682692599"  />
				<Card title="Arqueiro" urlImg="https://cards.scryfall.io/art_crop/front/8/b/8bdb0349-a759-473e-a192-7ca85ef8e515.jpg?1682692576" />
			</ListCard>


    
      </main>
      <Footer/>
    </AlertProvider>
    </>
  )
}




export const Head = () => (
  <>
     <title>Index</title>
     <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  </>
)
export default IndexPage