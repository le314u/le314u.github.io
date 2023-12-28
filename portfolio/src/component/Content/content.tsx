import React from 'react';
import './content.css'
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";


interface ContentProps {
  text: string;
  title: string;
  href:string;
  imageUrl: string;
  imageAlt: string;
  id: string; // ou o tipo apropriado para o ID, dependendo do seu caso
}

const Content : React.FC<ContentProps> = ({ text, title,href, imageUrl, imageAlt,id }) => {
  return (
    <div id={id} className="component">
      <a href={href}>
        <div className="content"style={{ display: 'flex', alignItems: 'center' }}>
          <div className="txt" style={{ flex: '1', marginRight: '20px' }}>
            <p className='title'>{title}</p>
            <p className='text'>{text}</p>
          </div>
          <div className="img"  style={{ flex: '1' }}>
            <img src={imageUrl} alt={imageAlt} style={{ width: '100%', height: 'auto' }} />
          </div>
        </div>
      </a>
    </div>
  );
};


const InverseContent : React.FC<ContentProps>  = ({ text, title,href, imageUrl, imageAlt, id }) => {
  return (
    <div id={id} className="component">
      <a href={href}>
        <div className="inversecontent"style={{ display: 'flex', alignItems: 'center' }}>
          <div className="img"  style={{ flex: '1' }}>
            <img src={imageUrl} alt={imageAlt} style={{ width: '100%', height: 'auto' }} />
          </div>
          <div className="txt" style={{ flex: '1', marginRight: '20px' }}>
            <p className='title'>{title}</p>
            <p className='text'>{text}</p>
          </div>
        </div>
      </a>
    </div>
  );
};











export {Content,InverseContent};
