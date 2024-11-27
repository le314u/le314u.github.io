// import Explanish from './components/explanish/Explanish.js'

import React from 'react';
import { Block } from '../components/block/index.js';
import {ManaText} from '../filters/mana.js'
import { StepTitle, StepGroup, StepDescription, StepContent, Icon, Step, } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

const Text = ({children})=>(<Block text><ManaText>{children}</ManaText></Block>)
export default function Chuck() {

	return (<>
        <h1>Tutors</h1>

        <Text>
            {`
            {2}Cycling
            >{2}{u}Seeker
            >{u}Flux
            >{u}{u} Cantrip e Mystical Tutor
            >
            `}
        </Text>

        <Text>
            {`
            {1}{U}{u}Bagunçar Mistura
            >{1}{u}Merchant Scroll
            >{x}{u}{u}{u}Whin of Volrath
            `}
        </Text>

        <Text>
            {`
            {1}{U}{u}Bagunçar Mistura
            >{1}{u}Merchant Scroll
            >{x}{u}{u}{u}Whin of Volrath
            `}
        </Text>

        <Text>
            {`
            {1}{U}{u}Bagunçar Mistura
            >{1}{u}Merchant Scroll
            >{x}{u}{u}{u}Whin of Volrath
            `}
        </Text>

        <Text>
            {`
            {1}{U}{u}Bagunçar Mistura
            >{1}{u}Merchant Scroll
            >{x}{u}{u}{u}Whin of Volrath
            `}
        </Text>

    </>
	)
}		


