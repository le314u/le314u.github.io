import React from 'react';
import './content.css'
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";


interface ContentProps {
  text: string;
  title: string;
  imageUrl: string;
  imageAlt: string;
  id: string; // ou o tipo apropriado para o ID, dependendo do seu caso
}

const Content : React.FC<ContentProps> = ({ text, title, imageUrl, imageAlt,id }) => {
  return (
    <div id={id} className="component">
      <div className="content"style={{ display: 'flex', alignItems: 'center' }}>
        <div className="txt" style={{ flex: '1', marginRight: '20px' }}>
          <p>{title}</p>
          <p>{text}</p>
        </div>
        <div className="img"  style={{ flex: '1' }}>
          <img src={imageUrl} alt={imageAlt} style={{ width: '100%', height: 'auto' }} />
        </div>
      </div>
    </div>
  );
};


const InverseContent : React.FC<ContentProps>  = ({ text, title, imageUrl, imageAlt, id }) => {
  return (
    <div id={id} className="component">
      <div className="inversecontent"style={{ display: 'flex', alignItems: 'center' }}>
        <div className="img"  style={{ flex: '1' }}>
          <img src={imageUrl} alt={imageAlt} style={{ width: '100%', height: 'auto' }} />
        </div>
        <div className="txt" style={{ flex: '1', marginRight: '20px' }}>
          <p>{title}</p>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};











export {Content,InverseContent};
