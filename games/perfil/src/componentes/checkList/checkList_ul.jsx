import React, { useState } from 'react';

const CheckList_ul = (props) => {

  return (
    <ul className="list-group">
        {props.children}
    </ul>
    
  );
};

export default CheckList_ul;
