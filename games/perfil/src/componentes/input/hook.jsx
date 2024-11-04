
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
        if (value) {
            sessionStorage.setItem(key, value);
            return true;
        }
        return false;
    };

    const delName = () => {
        const key = tag.current.id
        const value = tag.current.value.trim(); // Utilize trim para remover espaços em branco no início e no final
        if (value ) {
            sessionStorage.removeItem(key);
        return true;
        }
        return false;
    };

    const filter = customFilter(allowedKeys,onEnter)
    
    const combinedFunc = (array_func) => (e) => {
        array_func.forEach((func) => {
            try { func(e) } catch (error) { }
        })
    };
    
    

  return {
    tag,
    value,
    handleChange,
    filter,
    saveName,
    combinedFunc
  }
}


export default useFilteredInput
