
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
    const [VALUE, setValue] = useState(initialValue);
    const TAG = useRef()


    const handleChange = (e) => {
        setValue(e.target.value);
    };


    const saveName = () => {
        console.log(TAG)
        console.log(TAG.current)
        const key = TAG.current.id
        const value = TAG.current.value.trim(); // Utilize trim para remover espaços em branco no início e no final

        if (VALUE ) {
            sessionStorage.setItem(key, VALUE);
        return true;
        }
        return false;
    };

    const filter = customFilter(allowedKeys,onEnter)
  

  return {
    TAG,
    VALUE,
    handleChange,
    filter,
    saveName
  }
}


export default useFilteredInput
