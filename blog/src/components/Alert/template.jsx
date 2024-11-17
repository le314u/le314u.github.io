import React, { useContext, useState, createContext, useEffect } from 'react';

import { createPortal } from 'react-dom';
import { ToastContainer } from 'react-bootstrap';
import Toast from 'react-bootstrap/Toast';
import {timeDiff} from '../Util.js'
import * as styles from './style.module.css';  // Importação correta para CSS Modules


const AlertContext = createContext();
export const useAlertContext = () => useContext(AlertContext);


function AlertMsg({title,text}) {
    const [show, setShow] = useState(true);

    // Estado para armazenar a hora de criação
    const [createdTime, setCreatedTime] = useState(new Date());
    const [currentTime, setCurrentTime] = useState(new Date());
        
   // Atualizar a hora atual a cada segundo
   useEffect(() => {
    const interval = setInterval(() => {
    setCurrentTime(new Date()); // Atualiza a hora atual a cada segundo
    }, 1000);

    // Limpar o intervalo quando o componente for desmontado
    return () => clearInterval(interval);
},[])

    const Markup = (
        <div className={styles.alert}>
            <Toast onClose={() => setShow(false)} show={show}>
                <Toast.Header>
                    <strong className="me-auto">{title}</strong>
                    <small>{timeDiff(createdTime,currentTime)}</small>
                </Toast.Header>
                <Toast.Body>{text}</Toast.Body>
            </Toast>
        </div>
    )

    return Markup
}

function AlertSpace(){
    const ID_HEADER = `appMsgHeader`
    const ID_BODY = `appMsgBody`
    const {arrayMsg} = useAlertContext()
    
    const Markup = (
        <div
        aria-live="polite"
        aria-atomic="true"
        className={styles.toastContainer}
        style={{ minHeight: '240px' }}
        id={ID_HEADER}
        >
        <ToastContainer style={{ zIndex: 1 }}>
            <div  id={ID_BODY}>
                {arrayMsg.map(({title,text},index)=>{
                    return (
                    <AlertMsg key={index} title={title} text={text}/>
                )})}
            </div>
        </ToastContainer>
    </div>
    )
    return Markup
 
}
const val = {val:1}//APAGAR

export const AlertProvider = ({ children }) => {
    setTimeout(() => {//APAGAR
        if(val.val ==1){//APAGAR
            val.val++//APAGAR
            addMsg("Alerta","Isso é um teste")//APAGAR
        }//APAGAR
    }, 1500);//APAGAR






    const [arrayMsg, setMsgs] = useState([]);
    const addMsg = (title, text) => {
        setMsgs(prevMsgs => [...prevMsgs, { title, text }]);
    };

    const rmMsg = (index) => {
        setMsgs(prevMsgs => prevMsgs.filter((_, i) => i !== index));
    };

     // O valor que o contexto compartilha com os consumidores
    const contextValue = {
        arrayMsg,
        addMsg,
        rmMsg,
    };

    return (
        <AlertContext.Provider value={contextValue}>
            {children}
            <AlertSpace/>
        </AlertContext.Provider>
    );
};