
import { useState,useRef } from 'react';



const customFilter = (allowedKeys,onEnter=()=>{}) => {
    let filter = (e) => {
    let event = e.nativeEvent;
    if (!allowedKeys.includes(event.key) && event.key !== 'Backspace' && event.key !== 'Delete' && event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') {
        e.preventDefault();
    }

    if(event.key == "Enter"){
        onEnter()
    }

    };
    return allowedKeys === undefined ? (e) => {} : filter;
}



function useFilteredInput(initialValue, allowedKeys,onEnter=undefined) {
    const [value, setValue] = useState(initialValue);
    const tag = useRef()


    const handleChange = (e) => {
        setValue(e.target.value);
    };


    const saveName = () => {
        const key = tag.current.id
        const value = tag.current.value.trim(); // Utilize trim para remover espaços em branco no início e no final

        if (value ) {
            sessionStorage.setItem(key, value);
        return true;
        }
        return false;
    };

    const filter = customFilter(allowedKeys,onEnter)
  

  return {
    tag,
    value,
    handleChange,
    filter,
    saveName
  }
}




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


export default useFilteredInput
