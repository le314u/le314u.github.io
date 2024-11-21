import React from 'react';
import symbol_1 from '../assets/mana/1.svg';
import symbol_2 from '../assets/mana/2.svg';
import symbol_3 from '../assets/mana/3.svg';
import symbol_16 from '../assets/mana/16.svg';
import symbol_x from '../assets/mana/x.svg';
import symbol_y from '../assets/mana/y.svg';
import symbol_z from '../assets/mana/z.svg';
import symbol_u from '../assets/mana/blue.svg';

export const symbols = {
    "{x}": symbol_x,
    "{y}": symbol_y,
    "{z}": symbol_z,
    "{u}": symbol_u,
    "{1}": symbol_1,
    "{2}": symbol_2,
    "{3}": symbol_3,
    "{16}": symbol_16,

  };

export const ManaText = ({ children }) => {
  const style = {
    display: "inline-block",
    marginLeft: "1em 0px -0.2rem 0px",
    height: "1em",
    width: "1em",
    margin: "1px 1px -1px 1px",
  };

  // Garantir que 'children' seja uma string antes de aplicar o split
  const parseText = (text) => {
    // Caso 'children' seja um array de React elements, podemos usar .toString() para extrair o texto
    const stringText = text.toString();
    return stringText.split(/(\{[a-zA-Z0-9]+\})/gi).map((part, index) => {
      if (symbols[part]) {
        return <abbr title={part} key={index} ><img  src={symbols[part]}  style={style} /></abbr>;
      }
      return part;
    });
  };

  // Utilizando React.Children.toArray para garantir que estamos lidando com um texto válido
  return <span>{parseText(React.Children.toArray(children).join(''))}</span>;
};
