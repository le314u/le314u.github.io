import { useImperativeHandle,useState,useRef,forwardRef } from 'react';
import {build} from './card_style.js';
import './card.css';

const Card = forwardRef((props, ref) =>{
  const myIcon = useRef(null);
  const myBox = useRef(null);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let fontSize = 140*0.6

  const controller = build({myIcon,myBox})
 

  useImperativeHandle(ref, () => ({
    // Método para chamar quando a resposta estiver correta
    correct: () => controller.correct(),
    // Método para chamar quando a resposta estiver errada
    wrong: () => controller.wrong(),
  }));


  function wrong(){
    myIcon.current.animate([
      { transform: ' translateX(0) scale(0.3) rotate(-45deg)'},
      { transform: ' translateX(25px) scale(0.3) rotate(45deg)'},
      { transform: ' translateX(0px) scale(0.3) rotate(-45deg)'},
      

    ], {
      duration: 500, 
    });

    myBox.current.animate([
      { transform: ' translateX(0)  rotate(0deg)'},
      { filter: 'blur(3px)' },
      { transform: '  rotate(1deg)'},
      { transform: '  rotate(-1deg)'},
      { transform: '  rotate(1deg)'},
      { transform: '  rotate(-1deg)'},
      { transform: '  rotate(1deg)'},
      { transform: '  rotate(-1deg)'},
      { filter: 'blur(0px)' },
      { transform: ' translateX(0)  rotate(0deg)'},

    ], {
      duration: 600, 
    });
  }

  function correct(){
    myIcon.current.animate([
      { transform: ' translateX(0) scale(0.3) rotate(-45deg)'},
      { transform: ' translateX(56px) scale(1) rotate(0deg)'},
      { filter: 'dropShadow(106px 106px 200px red)'},
      { transform: ' translateX(56px) scale(1) rotate(0deg)'},
      { transform: ' translateX(0px) scale(0.3) rotate(-45deg)'},
    ], {
      duration: 2100, 
    });
    
    myBox.current.animate([
      {filter: 'grayscale(100%)'},
      {filter: 'grayscale(100%) drop-shadow(2px 2px 2px greenyellow)'},
      {filter: 'grayscale(100%) drop-shadow(2px 2px 0px green)'},
      {filter: 'grayscale(0%)'},
    ], {
      duration: 2600, 
    });
  }

  return ( 
      <div className='card shadow container estilo-customizado' ref={myBox} >
        <div className='title_card text-center'>
          <svg onClick={correct} ref={myIcon} className='rounded-circle icon' width="140" height="140" focusable="false"> 
            <rect width="100%" height="100%" fill={props.color}></rect>
            <text id="dynamicText" x="50%" y="50%" fontSize={fontSize} fill="white" textAnchor="middle" dominantBaseline="middle">{props.namePlayer.slice(0,2)}</text>           
          </svg>
          <h1 className=''>Titulo</h1>
        </div>
        <div className="border-top border-dashed my-3"/>
        <div className='m-5 mt-2 mb-2'>
            TESTÃO
        </div>
      </div>      
  );
}
)

export default Card;