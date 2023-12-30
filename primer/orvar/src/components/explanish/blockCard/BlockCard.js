import styles from "./BlockCard.css"

function BlockCard({src}){
    return (
        <div className="blockCard">
            <img className="viewCard" src={src} alt="carta"/>
        </div>
    )
}

export default BlockCard