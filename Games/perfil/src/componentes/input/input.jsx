import React from 'react';
import useFilteredInput from './hook';

// function getSavedPlayer(){
//   const PREFIX = "namePlayer_"
//   let ret = []
//   for (let i = 0; i < sessionStorage.length; i++) {//Verifica todos os nomes ja salvos
//     const k = sessionStorage.key(i);
//     if(k.startsWith(PREFIX)){
//       ret.push(k)
//     }
//   }
//   return ret
// }


// function getNames(){
//   const keys = getSavedPlayer()
//   let ret = []
//   for(let k of keys){
//     ret.push(sessionStorage.getItem(k))
//   }
//   return ret
// }


// let saveName = (id)=>{
//   const PREFIX = "namePlayer_"
//   const key = PREFIX+id
//   const tag = document.getElementById(key);
//   const name = tag.value
//   let hasName = false
//   let save = false
//   if(name != ""){//Nome não Nulo
//     for (let i = 0; i < sessionStorage.length; i++) {//Verifica todos os nomes ja salvos
//       const k = sessionStorage.key(i);
//       const isName = k.startsWith(PREFIX)
//       if (isName){
//         if(sessionStorage.getItem(k)==name){//Verifica Se o nome ja esta salvo
//           hasName = true;
//           break;
//         }
//       }
//     }
//     if(!hasName){//Salva o nome
//       sessionStorage.setItem(key, name);
//       save = true;
//     }
//   }
//   return save
  
// }

// let save = ()=>{
//   const maxPoints = document.getElementById('maxPoints');
//   sessionStorage.setItem("maxPoints", maxPoints.value);
//   //window.location.href = 'whoSpy.html';
// }

// let makeReplaceName = (i)=>{
//   let replaceName=(e)=>{
//     let event = e.nativeEvent
//     const allowedKeys = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-';
//     if (!allowedKeys.includes(event.key) && event.key !== 'Backspace' && event.key !== 'Delete' && event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') {
//       e.preventDefault();
//       if(event.key=="Enter"){
//         if(saveName(i)){
//           handleAddInput()
//         }
//       }
//     }

//     const tagName = document.getElementById('namePlayer_'+i);
//     if(tagName.value.length >=1){
//       let name = tagName.value[0].toUpperCase() + tagName.value.slice(1).toLocaleLowerCase()
//       tagName.value=name
//     }

//   };
//   return replaceName
// }

// let replacePoints=(e)=>{
//   let event = e.nativeEvent
//   const allowedKeys = '0123456789';
//   if (!allowedKeys.includes(event.key) && event.key !== 'Backspace' && event.key !== 'Delete' && event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') {
//     e.preventDefault();
//   }
// };


// if(event.key=="Enter"){
//   if(saveName(value)){
//     handleAddInput()
//   }
// }


function onChange(interno,externo){
  return (e)=>{
    interno(e);
    externo(e);
  }
}

function InputFiltered(props) {
  const { tag, value, handleChange, filter, saveName } = useFilteredInput(props.placeholder, props.arrayFilter,props.onEnter);

  return (
    <div className="form-floating mb-3">
      <input
        ref={tag}
        id={props.id}
        className="form-control rounded-3"
        value={value}
        maxLength={props.maxLength}
        onKeyDown={filter}
        onChange={ onChange(handleChange,props.onChange) }  // Adicione o evento onChange
        onBlur={saveName}
      />
      <label htmlFor="floatingInput">{props.label}</label>
    </div>
  );
}

export default InputFiltered;
