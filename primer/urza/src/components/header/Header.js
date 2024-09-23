import React from 'react';
import styles from "./Header.css"


const Header = ({ src }) => {
    return (
        <div className="header">
            {src ? <img className="banner" src={src} alt="Banner" /> : <div>Imagem não disponível</div>}
        </div>
    );
};



export default Header