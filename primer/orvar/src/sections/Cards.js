// import Explanish from './components/explanish/Explanish.js'

import React from 'react';
import { Tips,Detach } from '../components/tips/index.js';
import {ManaText} from '../filters/mana.js'
import { PopUp } from '../components/popUp/popUp.js';
import { Card } from '../components/card/card.js';
import Description from '../components/description/description.js';




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





export default function Chuck() {

	return (<>
       
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

    </>
	)
}		