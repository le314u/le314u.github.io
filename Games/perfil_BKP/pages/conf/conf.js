function replace(event) {
    const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    
    if (!allowedKeys.includes(event.key) && event.key !== 'Backspace' && event.key !== 'Delete' && event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') {
        event.preventDefault();
    }
};

const numPlayer = document.getElementById('numPlayer');
const maxPlayer = document.getElementById('maxPlayer');
const start = document.getElementById('start');

numPlayer.addEventListener('keydown',replace )
maxPlayer.addEventListener('keydown',replace )

start.addEventListener('click',()=>{
  sessionStorage.setItem("numPlayer", numPlayer.value);
  sessionStorage.setItem("maxPlayer", maxPlayer.value);
  window.location.href = 'whoSpy.html';


})



