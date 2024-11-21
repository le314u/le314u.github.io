import React, { useState,useEffect } from "react";
import styles from './index.module.css'

export function PopUp({children, trigger}){
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        function handleKeyDown(event) {
          if (event.key === "Escape" && isVisible) {
            handleClose();
          }
        }
    
        // Adiciona o event listener
        document.addEventListener("keydown", handleKeyDown);
    
        // Remove o event listener na desmontagem do componente
        return () => {
          document.removeEventListener("keydown", handleKeyDown);
        };
      }, [isVisible]); // Reexecuta o useEffect quando `isVisible` muda

      
    function handleClose(){
        setIsVisible(false);
    }

    function handleVisible(){
        setIsVisible(!isVisible);
    }


    return (
        <>
        {/* Renderiza o trigger e adiciona o evento de abrir o modal */}
        {trigger && ( React.cloneElement(trigger, { onClick: handleVisible }) )}

        {isVisible && (
            <div className={styles.targetContent}>
            <a onClick={handleClose} className={styles.close}/>
            <div className={styles.targetInner}>
                {children}
            </div>
            </div>
        )}
        </>)
}