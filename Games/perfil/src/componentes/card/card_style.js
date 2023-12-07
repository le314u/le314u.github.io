function wrong({myIcon,myBox}){
  return ()=>{  
    myIcon.current.animate([
      { transform: ' translateX(0) scale(0.3) rotate(-45deg)'},
      { transform: ' translateX(21px) scale(0.3) rotate(45deg)'},
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
}

function correct({myIcon,myBox}){
  return ()=>{  
    myIcon.current.animate([
      { transform: ' translateX(0) scale(0.3) rotate(-45deg)'},
      { transform: ' translateX(56px) scale(1) rotate(0deg)'},
      { filter: 'drop-shadow(16px 16px 50px black)'},
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
}


export function build({myIcon,myBox}){
  return {
    correct:correct({myIcon,myBox}),
    wrong:wrong({myIcon,myBox})
  }
}
