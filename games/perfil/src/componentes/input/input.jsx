import React from 'react';
import useFilteredInput from './hook';


function InputFiltered(props) {
  const { tag, value, handleChange, filter, saveName, combinedFunc } = useFilteredInput(props.placeholder, props.arrayFilter,props.onEnter);

  return (
    <div className="form-floating mb-3">
      <input
        ref={tag}
        id={props.id}
        className="form-control rounded-3"
        value={value}
        maxLength={props.maxLength}
        onKeyDown={ combinedFunc( [props.onType, filter] ) }
        onChange={ combinedFunc( [handleChange, props.onChange,saveName] ) }  // Adicione o evento onChange
        onBlur={saveName}
        disabled = {props.disabled}
      />
      <label htmlFor="floatingInput">{props.label}</label>
    </div>
  );
}

export default InputFiltered;
