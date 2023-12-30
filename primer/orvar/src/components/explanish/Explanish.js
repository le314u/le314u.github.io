import { useState } from 'react';
import styles from "./Explanish.css"
import BlockCard from "./blockCard/BlockCard.js"
import BlockText from "./blockText/BlockText.js"


function Explanish({src, children, type, id}){
    let img = (<BlockCard src={src}/>)
    let txt = (<BlockText>{children}</BlockText>)
    let design = null
    if(type=="left"){design = (<>{img}{txt}</>)}
    else if(type=="right"){design = (<>{txt}{img}</>)}
    else{design = (<>{img}{txt}</>)}

    return (
        <div id={id} className={"explanish" + ((type === 'left' || type === 'right') ? " orientate" : '')} >
           {design}
        </div>
    )
}


export default Explanish