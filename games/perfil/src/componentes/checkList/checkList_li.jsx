import React, { useState } from 'react';

function CheckList_li(props){
  const [isChecked, setChecked] = useState(false);

  const toggleCheckbox = () => {
    setChecked(!isChecked);
  };

  return (
    <li
      className={"pt-3 list-group-item" + (isChecked ? ' active' : '')}
      onClick={toggleCheckbox}
      data-bs-toggle="list"
      role="button"
    >
      {props.children}
    </li>
  );
};
export default CheckList_li;


