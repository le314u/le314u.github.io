import React, { useEffect, useState } from 'react';
import styles from './index.module.css'
import { queryByRole } from '@testing-library/react';

function BACKUP(){
    return (
       <ul className={styles.uiSteps}>
          <li className={styles.uiStep}><span>1</span></li>
          <li className={`${styles.uiStep} ${styles.selected}`}><span>2</span></li>
          <li className={styles.uiStep}><span>3</span></li>
          <li className={styles.uiStep}><span>4</span></li>
          <li className={styles.uiStep}><span>5</span></li>
        </ul>
    )  
}

function createRange(n) {
    const result = [];
    for (let i = 1; i <= n; i++) {          result.push(i);        }
    return result;
}


function SideBar({ onSelect,selected,size }) {
    const [itens]=useState( createRange(size) );
    const [item,setItem]=useState(0);

    useEffect(() => {
        setItem(selected)
    },[selected])

    const handleSelect = (e) => {
        const change = (arg)=>{            
            onSelect(arg);
            setItem(arg);            
        }
        item == e 
        ? change(0)
        : change(e)
    };

    //Mostra apenas 3
    const state = Number(item)
    const check=(i)=>{return i >= (state - 1) && i <= (state+1)}

  return (
    <nav className={styles.sideBar}>
        <ul className={styles.uiSteps}>
            {itens.map((i) => {
                if( check(i)
                    || i==3 && (state==1 || state == 0)
                    || i==2 && state==0
                    || i==size-2 && state==size
                ){
                    return (
                    <li
                        key={i}
                        className={`${i === item ? styles.selected : 0} ${styles.uiStep}`}
                        onClick={() => handleSelect(i)}
                    > <span>{i}</span> </li>
                )}
            })}       
        </ul>
    </nav>
  );
}

function MainContent({ selectedItem, contents, standard }) {
  return (
    <div className={styles.mainContent}>
        {selectedItem == 0 && <>{standard}</>}
        {contents.map((item, index) => (
            <> {selectedItem == index+1 && <  >{item}</>}</>
        ))}
    </div>
  );
}


export function StepProgress({children, standard}) {
  const [selectedItem, setSelectedItem] = useState(0);
  const [isActive, setIsActive] = useState(false); // Controle de ativação
  const qtdSteps = React.Children.count(children);

    useEffect(() => {
        function handleKeyDown(event) {
            let state = Number(selectedItem)
           
            if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
                if(state-1 > 0){
                    setSelectedItem((preview)=>preview-1)
                }
            }
            if (event.key === "ArrowDown" || event.key === "ArrowRight" ) {
                if(state+1 <= qtdSteps){
                    setSelectedItem((preview)=>Number(preview)+1)
                }
            }
        }

        // Adiciona o event listener
        if (isActive) {
            document.addEventListener("keydown", handleKeyDown);
        }

        // Remove o event listener na desmontagem do componente
        return () => {            document.removeEventListener("keydown", handleKeyDown);        };

    }, [isActive,selectedItem]); // Reexecuta o useEffect quando `isVisible` muda


  return (
    <div 
        className={styles.container}
        onClick={() => setIsActive(true)} // Ativa o evento ao clicar no elemento
        onBlur={() => setIsActive(false)} // Desativa o evento ao perder o foco
        tabIndex={0}
      >
      <SideBar size={qtdSteps} onSelect={setSelectedItem} selected={selectedItem} />
      <MainContent selectedItem={selectedItem} standard={standard} contents={children} />
    </div>
  );
}



