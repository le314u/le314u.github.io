import React, { useState } from 'react';

function CheckList_li(props){
  const [isChecked, setChecked] = useState(false);

  const toggleCheckbox = () => {
    setChecked(!isChecked);
    if(typeof props.onClick === 'function'){
      props.onClick(props.data)
    }
  };

  return (
    <li
      className={"pt-3 list-group-item" + (isChecked ? ' active' : '')}
      onClick={toggleCheckbox}
      data-bs-toggle="list"
      role="button"
      data={props.data}
      url={props.url}
    >
      {props.children}
    </li>
  );
};
export default CheckList_li;


