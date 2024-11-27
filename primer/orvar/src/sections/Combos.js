// import Explanish from './components/explanish/Explanish.js'

import React from 'react';
import { ListDot } from '../components/list/index.js'
import { Tips,Detach } from '../components/tips/index.js';
import { Combo } from '../components/combo/index.js';
import {ManaText} from '../filters/mana.js'


export default function Chuck() {

	return (<>
        <h1>Combos</h1>

        <Combo 
            qtdMana="Precisa de 9 ilhas"
            batleField={["Comandante"]}
            hand={["Step Through","Mystic Sanctuary"]}
            name="Cycling Mystic-Turn"
        > 
            <ListDot>
                <>Usa <ManaText text={'{2}'}/>   faz wyzard cycling <Detach>Step Through </Detach> e procura por <Detach> Spell seeker</Detach>  </>
                <>Usa <ManaText text={'{2}{u}'}/>   faz  <Detach> Spellseeker</Detach> e procura por <Detach> Essence Flux</Detach>  </>
                <>Usa <ManaText text={'{u}'}/>   casta  <Detach> Essence Flux</Detach> e procura por <Detach> HT</Detach>  e  <Detach> Snap</Detach> </>
                <>Usa <ManaText text={'{u}'}/>   casta  <Detach> High Tide</Detach></>
                <>Usa <ManaText text={'{1}{u}'}/>   casta  <Detach> Snap</Detach> dando alvo na <Detach> Spellseeker</Detach> e tutora <Detach> Hiden String</Detach></>
                <>Usa <ManaText text={'{1}{u}'}/>   casta  <Detach> HidenString</Detach> dando alvo em 2 ilhas </>
                <>Usa <ManaText text={'{2}{u}'}/>   casta  <Detach> Spellseeker</Detach> e tutora <Detach> Cantrip</Detach>  </>
                <>Usa <ManaText text={'{u}'}/>   casta  <Detach> Cantrip</Detach>  dando alvo na  <Detach> Spellseeker</Detach>  e tutora  <Detach> Mystical Tutor</Detach>  </>
                <>Usa <ManaText text={'{u}'}/>   Segurando a prioridade  da  <Detach> Cantrip</Detach>  e casta <Detach> Mystica Tutor</Detach> para procurar <Detach> ExtraTurn</Detach>  </>
                <>Usa <ManaText text={'{3}{u}{u}'}/>  casta <Detach> ExtraTurn</Detach>  </>
            </ListDot>
        </Combo>


        <Combo 
            qtdMana="Precisa de 11 ilhas"
            batleField="?"
            hand="?"
            name="?????"

        > 
            <ListDot>
                <>Usa <ManaText text={'{2}'}/>   faz  <Detach> wyzard cycling</Detach> e procura por <Detach> Spell seeker</Detach>  </>
                <>Usa <ManaText text={'{2}{u}'}/>   faz  <Detach> Spellseeker</Detach> e procura por <Detach> Flux</Detach>  </>
                <>Usa <ManaText text={'{u}'}/>   casta  <Detach> Essence Flux</Detach> e procura por <Detach> HT</Detach>  e  <Detach> Snap</Detach> </>
                <>Usa <ManaText text={'{u}'}/>   casta  <Detach> High Tide</Detach></>
                <>Usa <ManaText text={'{1}{u}'}/>   casta  <Detach> Snap</Detach> dando alvo na <Detach> Spellseeker</Detach> e tutora <Detach> Hiden String</Detach></>
                <>Usa <ManaText text={'{1}{u}'}/>   casta  <Detach> HidenString</Detach> dando alvo em 2 ilhas </>
                <>Usa <ManaText text={'{2}{u}'}/>   casta  <Detach> Spellseeker</Detach> e tutora <Detach> BuyBack</Detach>  </>
                <>Usa <ManaText text={'{2}{u}'}/>   casta  <Detach> BuyBack</Detach>  dando alvo na  <Detach> Spellseeker</Detach>  e tutora  <Detach> Cantrip</Detach>  </>
                <>Usa <ManaText text={'{u}'}/>   casta  <Detach> BuyBack</Detach>  dando alvo na  <Detach> Spellseeker</Detach>  e tutora  <Detach> Cantrip</Detach>  </>
                <>Usa <ManaText text={'{u}'}/>   casta  <Detach> Cantrip</Detach>  dando alvo na  <Detach> Spellseeker</Detach>  e tutora  <Detach> Mystical Tutor</Detach>  </>
                <>Usa <ManaText text={'{u}'}/>   Segurando a prioridade  da  <Detach> Cantrip</Detach>  e casta <Detach> Mystica Tutor</Detach> para procurar <Detach> ExtraTurn</Detach>  </>
                <>Usa <ManaText text={'{3}{u}{u}'}/>  casta <Detach> ExtraTurn</Detach>  </>
            </ListDot>
        </Combo>


        <Combo 
            qtdMana="Precisa de 17 ilhas"
            batleField="odio e raiva"
            hand="5 dedos"
            name="cycling BuyBack"
        > 
            <ListDot>
                <>Usa <ManaText text={'{2}'}/>   faz  <Detach> wyzard cycling</Detach> e procura por <Detach> Spell seeker</Detach>  </>
                <>Usa <ManaText text={'{2}{u}'}/>   faz  <Detach> Spellseeker</Detach> e procura por <Detach> Flux</Detach>  </>
                <>Usa <ManaText text={'{u}'}/>   casta  <Detach> Essence Flux</Detach> e procura por <Detach> HT</Detach>  e  <Detach> Snap</Detach> </>
                <>Usa <ManaText text={'{u}'}/>   casta  <Detach> High Tide</Detach></>
                <>Usa <ManaText text={'{1}{u}'}/>   casta  <Detach> Snap</Detach> dando alvo na <Detach> Spellseeker</Detach> e tutora <Detach> Bagunçar Mistura</Detach></>
                <>Usa <ManaText text={'{1}{u}{u}'}/>   transmutar  <Detach> Ornato de Saphira</Detach></>
                <>Usa <ManaText text={'{2}'}/>   casta  <Detach> Ornato de Saphira</Detach> </>
                <>Usa <ManaText text={'{1}{u}'}/>   casta  <Detach> Spellseeker</Detach> e tutora <Detach> Snap</Detach> </>
                <>Usa <ManaText text={'{u}'}/>   casta  <Detach> Snap</Detach> e tutora <Detach> BuyBack</Detach> </>
                <>Usa <ManaText text={'{1}{u}'}/>   casta  <Detach>BuyBack</Detach> dando alvo no <Detach> Ornato de Saphira</Detach> </>
                <>Usa <ManaText text={'{u}'}/>   casta  <Detach>BuyBack</Detach> dando alvo na ilha </>
            </ListDot>
        </Combo>


        <Combo 
            qtdMana="Precisa de 10 ilhas"
            batleField="odio e raiva"
            hand="5 dedos"
            name="Seeker BuyBack"

        > 
            <ListDot>
                <>Usa <ManaText text={'{2}{u}'}/>   faz  <Detach> Spellseeker</Detach> e procura por <Detach> Flux</Detach>  </>
                <>Usa <ManaText text={'{u}'}/>   casta  <Detach> Essence Flux</Detach> e procura por <Detach> HT</Detach>  e  <Detach>Bagunçar Mistura</Detach> </>
                <>Usa <ManaText text={'{u}'}/>   casta  <Detach> High Tide</Detach></>
                <>Usa <ManaText text={'{1}{u}{u}'}/>   transmutar  <Detach> Ornato de Saphira</Detach></>
                <>Usa <ManaText text={'{2}'}/>   casta  <Detach> Ornato de Saphira</Detach> </>
                <>Usa <ManaText text={'{1}{u}'}/>   casta  <Detach> Spellseeker</Detach> e tutora <Detach> Snap</Detach> </>
                <>Usa <ManaText text={'{u}'}/>   casta  <Detach> Snap</Detach> e tutora <Detach> BuyBack</Detach> </>
                <>Usa <ManaText text={'{1}{u}'}/>   casta  <Detach>BuyBack</Detach> dando alvo no <Detach> Ornato de Saphira</Detach> </>
                <>Usa <ManaText text={'{u}'}/>   casta  <Detach>BuyBack</Detach> dando alvo na ilha </>
            </ListDot>
        </Combo>

        <Combo 
            qtdMana="Precisa de 3 ilhas"
            batleField="odio e raiva"
            hand="5 dedos"
            name="HT-Sorcery"
        > 
            <ListDot>
                <>Usa <ManaText text={'{u}'}/>   casta  <Detach> HighTide</Detach> </>
                <>Usa <ManaText text={'{1}{u}'}/>   casta  <Detach> Shimmering Mirage</Detach> </>
                <>Usa <ManaText text={'{u}'}/>   casta <Detach>Aquitect's Will</Detach>  dando alvo em <Detach>Mystic Sanctuary</Detach> e coloca <Detach> Shimmering Mirage</Detach> no topo </>
            </ListDot>
        </Combo>

        <Combo 
            qtdMana="Precisa de 4 ilhas"
            batleField="odio e raiva"
            hand="5 dedos"
            name="HT-Instant"

        > 
            <ListDot>
                <>Usa <ManaText text={'{u}'}/>   casta  <Detach> HighTide</Detach> </>
                <>Usa <ManaText text={'{1}{u}'}/>   casta  <Detach> Shimmering Mirage</Detach> </>
                <>Usa <ManaText text={'{2}{u}'}/>   casta <Detach>Twitch</Detach>  dando alvo em <Detach>Mystic Sanctuary</Detach> e coloca <Detach> Shimmering Mirage</Detach> no topo </>
            </ListDot>
        </Combo>


        <Combo 
            qtdMana="Precisa de 2 ilhas"
            batleField="odio e raiva"
            hand="5 dedos"
            name="Mystic Cantrip"

        > 
            <ListDot>
                <>Usa <ManaText text={'{u}'}/>   casta  <Detach> Encantamento</Detach>  dando alvo em  <Detach>Mystic Sanctuary</Detach> </>
                <>Usa <ManaText text={'{u}'}/>   casta <Detach>Cantrip</Detach>  dando alvo em <Detach>Mystic Sanctuary</Detach> e coloca <Detach> Outra Cantrip</Detach> no topo </>
            </ListDot>
        </Combo>

        <Combo 
            qtdMana="Precisa de 2 ilhas"
            batleField="odio e raiva"
            hand="5 dedos"
            name="SnapOmancer"
            
        > 
            <ListDot>
                <>Usa <ManaText text={'{u}'}/> casta  <Detach> HighTide</Detach>   </>
                <>Usa <ManaText text={'{2}{u}{u}'}/> casta  <Detach> Archaeomancer</Detach> dando alvo em <Detach> HighTide</Detach></>
                <>Usa <ManaText text={'{1}{u}'}/>   casta <Detach>Snap</Detach>  dando alvo em  <Detach> Archaeomancer</Detach>  e coloca <Detach>HighTide</Detach> na mão </>
            </ListDot>
        </Combo>

        <Combo 
            qtdMana="Precisa de 2 ilhas"
            batleField="odio e raiva"
            hand="5 dedos"
            name="Sanctuary-Aura"

        > 
            <ListDot>
                <>Usa <ManaText text={'{u}'}/>   casta  <Detach> Encantamento</Detach>  dando alvo em  <Detach>Mystic Sanctuary</Detach> </>
                <>Usa <ManaText text={'{u}'}/>   casta <Detach>Cantrip</Detach>  dando alvo em <Detach>Mystic Sanctuary</Detach> e coloca <Detach> Outra Cantrip</Detach> no topo </>
            </ListDot>
        </Combo>

        <Combo 
            qtdMana="Precisa de 2 ilhas"
            batleField="odio e raiva"
            hand="5 dedos"
            name="Roaming Exponencial"

        > 
            <ListDot>
                <>Usa <ManaText text={'{4}'}/>   casta  <Detach> Roaming Throne</Detach> escolhe <Detach>Wizard</Detach> </>
                <>Usa <ManaText text={'{2}{u}'}/>   casta <Detach>BuyBack</Detach>  dando alvo em <Detach>Roaming Throne</Detach>  criando x2 totalizando 3</>
                <>Usa <ManaText text={'{2}{u}'}/>   casta <Detach>BuyBack</Detach>  dando alvo em <Detach>Island</Detach>  criando x4</>
                <>Disclaimer a cada cast dando alvo em Roaming cria 2^n e totaliza 2^n+1   -1  Roaming Throne </>
            </ListDot>
        </Combo>

        <Combo 
            qtdMana="Precisa de 2 ilhas"
            batleField="odio e raiva"
            hand="5 dedos"
            name="Archeo-Flux"
        > 
            <ListDot>
                <>Usa <ManaText text={'{1}{u}'}/> casta  <Detach> Hidden Strings</Detach> dando alvo apenas em <Detach>Island</Detach>   </>
                <>Usa <ManaText text={'{2}{u}{u}'}/> casta  <Detach> Archaeomancer</Detach> dando alvo em <Detach>  Hidden Strings</Detach></>
                <>Usa <ManaText text={'{u}'}/>   casta <Detach>Essence Flux</Detach>  dando alvo em  <Detach> Archaeomancer</Detach>  e coloca <Detach>Hidden String</Detach> e <Detach>Essence Flux</Detach> na mão </>
            </ListDot>
        </Combo>
    </>
	)
}		


