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
        <Button_Nav page="pagina 1" anchor="#projeto_1" />
        <Button_Nav page="pagina 2" anchor="#projeto_2" />
        <Button_Nav page="pagina 3" anchor="#projeto_3" />
        <Button_Nav page="pagina 4" anchor="#projeto_4" />
        <Button_Nav page="pagina 5" anchor="#projeto_5" />
        <Button_Nav page="pagina 6" anchor="#projeto_6" />
      </ul>
    </nav>
  )
}

export default NavBar