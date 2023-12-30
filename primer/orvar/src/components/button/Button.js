import styles from "./Button.css"

function Button({path, text}){
    return (
        <div className="button">
            <a className="link" href={path}>{text}</a>
        </div>
    )
}

export default Button