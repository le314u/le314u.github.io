import React from 'react';
import useFilteredInput from './hook';


function onChange(interno,externo){
  return (e)=>{
    interno(e);
    externo(e);
  }
}

function getValue(){

}

function InputFiltered(props) {
  const { TAG, VALUE, handleChange, filter, saveName } = useFilteredInput(props.placeholder, props.arrayFilter,props.onEnter);

  return (
    <div className="form-floating mb-3">
      <input
        ref={TAG}
        id={props.id}
        className="form-control rounded-3"
        value={VALUE}
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
