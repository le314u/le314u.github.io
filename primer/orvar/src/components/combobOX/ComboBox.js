import {useRef, useState} from "react";
import './ComboBox.css'



// $(document).ready(function() {
  
//     $(".selLabel").click(function () {
//       $('.dropdown').toggleClass('active');
//     });
    
//     $(".dropdown-list li").click(function() {
//       $('.selLabel').text($(this).text());
//       $('.dropdown').removeClass('active');
//       $('.selected-item p span').text($('.selLabel').text());
//     });
    
//   });
function ComboBox({triguer}) {
    const [isActive, setIsActive] = useState(false);
    const [selectedItem, setSelectedItem] = useState('Inicial');
    const dropdown = useRef();
    const dropdownList = useRef();
    const selLabel = useRef();
  
    function handleToggleClass() {
      setIsActive(!isActive)
    }
  
    function handleLiSelect(i) {
        return ()=>{
            setIsActive(!isActive)
            let tag = dropdownList.current.getElementsByTagName('li')[i]
            let text = tag.innerText
            let opt = tag.dataset.value
            setSelectedItem(text)
            triguer(text)
            goTo(opt)
        }
    }

    function goTo(id){
        const tag =  document.getElementById(id)
        tag.scrollIntoView({ behavior: 'smooth' });
    }
  
    return (
      <div className="container">
        <div className={`dropdown ${isActive ? 'active':''}`} ref={dropdown} >
          <span onClick={handleToggleClass} ref={selLabel} className="selLabel">{selectedItem}</span>
          <input type="hidden" name="cd-dropdown" />
          
          <ul  ref={dropdownList} className="dropdown-list">
            <li onClick={handleLiSelect(0)} data-value="Topico1">    <span>Topico 1</span>      </li>
            <li onClick={handleLiSelect(1)} data-value="Topico2">    <span>Topico 2</span>      </li>
            <li onClick={handleLiSelect(2)} data-value="Topico3">    <span>Topico 3</span>      </li>
            <li onClick={handleLiSelect(3)} data-value="Topico4">    <span>Topico 4</span>      </li>
          </ul>
        </div>
      </div>
    );
  }
  
  export default ComboBox;
  