import './footer.css'


function Footer(props:any) {

  return (
    <footer id={props.id} className="footerBar">

      <i className="icon"/>
      <div className="footerBar-column"><ul>
        <li></li>
        <li>Jiu-Jitsu</li>
        <li>Capoeira</li>
        <li>Musculação</li>
      </ul></div>
      <div className="footerBar-column"><ul>
        <li>Game</li>
        <li>Telma</li>
        <li>Perfil</li>
        <li>Who is Spy?</li>
      </ul></div>
      <div className="footerBar-column"><ul>
        <li>cEDH</li>
        <li>Orvar</li>
        <li>Urza</li>
      </ul></div>
      <div className="footerBar-column"><ul>
        <li>Legacy</li>
        <li>UWx</li>
        <li>HighTide</li>
      </ul></div>
    </footer>
  )
}

export default Footer