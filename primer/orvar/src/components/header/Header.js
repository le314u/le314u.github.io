import styles from "./Header.css"

function Header({src}){
    return (
        <div className="header">
            <img className="banner" src={src} alt="banner"/>
        </div>
    )
}

export default Header