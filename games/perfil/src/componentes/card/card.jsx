import React,{ useImperativeHandle,useState,useRef,forwardRef } from 'react';
import {build} from './card_animate.js';
import './card.css';

const Card = forwardRef((props, ref) =>{
  const myIcon = useRef(null);
  const myBox = useRef(null);
  const myTitle = useRef(null);
  const [myTitleShow,setMyTitleShow] = useState(true);
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


  function handleToogleShow(){
    let size = myTitleShow ? '0rem' : '1rem';
    myTitle.current.animate(
        {filter: `blur(${size})`},
        {duration: 600})
      .onfinish = () => {
        myTitle.current.style.filter = `blur(${size})`;
        setMyTitleShow(!myTitleShow)
      };
  }

  return ( 
      <div className='card shadow container estilo-customizado' ref={myBox} >
        <div className={'title_card text-center'} onClick={handleToogleShow} role='button' >
          <svg ref={myIcon} className='rounded-circle icon' width="140" height="140" focusable="false"> 
            <rect width="100%" height="100%" fill={props.color}></rect>
            <text id="dynamicText" x="50%" y="50%" fontSize={fontSize} fill="white" textAnchor="middle" dominantBaseline="middle">{props.namePlayer.slice(0,2)}</text>           
          </svg>
          <h1  className={myTitleShow ? ' blur' : ''} ref={myTitle} >{props.theme}</h1>
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
)

export default Card;