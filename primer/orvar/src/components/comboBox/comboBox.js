import {useRef, useState} from "react";
import './index.css'

export function ComboBox({launcher,defaultValue,array}) {
    const [isActive, setIsActive] = useState(false);
    const [selectedItem, setSelectedItem] = useState(defaultValue);
    const dropdown = useRef();
    const dropdownList = useRef();
    const selLabel = useRef();
  
    console.log("Fazer module.css de ComboBox")
    
    function handleToggleClass() {
      setIsActive(!isActive)
    }
  
    function handleLiSelect(i) {
        return ()=>{
          let tag = dropdownList.current.getElementsByTagName('li')[i]
          setIsActive(!isActive)
          setSelectedItem(tag.innerText)
          launcher(tag.dataset.value)
        }
    }

    function Li({index,value,children}) {
      return (<li onClick={handleLiSelect(index)} data-value={value}><span>{children}</span></li>)
    }
  
    return (
      <div className="container">
        <div className={`dropdown ${isActive ? 'active':''}`} ref={dropdown} >
          <span onClick={handleToggleClass} ref={selLabel} className="selLabel">{selectedItem}</span>
          <input type="hidden" name="cd-dropdown" />
          
          <ul  ref={dropdownList} className="dropdown-list">
            {
              array.map((data, index, array) => {
                return (<Li key={index} index={index} value={data.value}>{data.text}</Li>)
              })
            }
{/*             
            <li onClick={handleLiSelect(0)} data-value="Topico1">    <span>Topico 1</span>      </li>
            <li onClick={handleLiSelect(1)} data-value="Topico2">    <span>Topico 2</span>      </li>
            <li onClick={handleLiSelect(2)} data-value="Topico3">    <span>Topico 3</span>      </li>
            <li onClick={handleLiSelect(3)} data-value="Topico4">    <span>Topico 4</span>      </li> */}
          </ul>
        </div>
      </div>
    );
  }  