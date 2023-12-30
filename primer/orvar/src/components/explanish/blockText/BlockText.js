import styles from "./BlockText.css"

function BlockText(props){
    return (
        <div className="blockText">
            <p>{props.children}</p>
        </div>
    )
}

export default BlockText