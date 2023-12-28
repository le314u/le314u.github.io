import { useState } from 'react';
import './navBar.css'


function NavBar() {
  const [activePage, setActivePage] = useState('pagina 1');
  
  const handlePageClick = (page:string) => {
    setActivePage(page);
    console.log("SALVOU",page)
  };

  function Button_Nav(props:any){
    console.log(activePage === props.page )
    return (
        <li className = {activePage === props.page ? 'active' : 'inactive' }
        key={props.page}
        onClick={()=>{handlePageClick(props.page)}}
        >
          <a href={props.anchor}>{props.page}</a>
        </li>
    )
  }

  return (
    <nav className="navBar">
      <i className="icon"/>
      <ul>        
        <Button_Nav page="Home" anchor="#home" />
        <Button_Nav page="Projetos" anchor="#projetos" />
        <Button_Nav page="Games" anchor="#games" />
        <Button_Nav page="News" anchor="#news" />
      </ul>
    </nav>
  )
}

export default NavBar