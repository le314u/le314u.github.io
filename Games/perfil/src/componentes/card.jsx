import { useState } from 'react';

function Card(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const estiloCustomizado = {
    maxWidth: '600px', // Defina o valor desejado para a largura máxima
    padding: '10px'
  };

  return ( 
      <div className='card shadow container' style={estiloCustomizado}>
        <div className='title_card text-center'>
          <svg class="bd-placeholder-img rounded-circle" width="140" height="140" focusable="false"> <rect width="100%" height="100%" fill={props.color}></rect></svg>
          <h1 className=''>{props.theme}</h1>
        </div>
        <div className="border-top border-dashed my-3"/>
        <div className='m-5 mt-2 mb-2'>
          {props.tip_1 ? <p>Dica 1: {props.tip_1}</p>:null}
          {props.tip_2 ? <p>Dica 2: {props.tip_2}</p>:null}
          {props.tip_3 ? <p>Dica 3: {props.tip_3}</p>:null}
          {props.tip_4 ? <p>Dica 4: {props.tip_4}</p>:null}
          {props.tip_5 ? <p>Dica 5: {props.tip_5}</p>:null}
        </div>
      </div>
      
      
  );
}

export default Card;