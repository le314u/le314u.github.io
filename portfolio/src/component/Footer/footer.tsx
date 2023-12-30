import './footer.css'

function Logos(){
  let size = 35;
  return (
    <div className="logos" style={{display:'block'}}>
        <img alt='js' loading="lazy"  width={size} height={size} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"/>
        <img alt='react' loading="lazy"  width={size} height={size} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
        <img alt='electron' loading="lazy"  width={size} height={size} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/electron/electron-original.svg" />
        <img alt='html' loading="lazy"  width={size} height={size} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
        <img alt='css' loading="lazy"  width={size} height={size} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" />
        <img alt='python3' loading="lazy"  width={size} height={size} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
        <img alt='openCv' loading="lazy"  width={size} height={size} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" />   
        <img alt='git' loading="lazy"  width={size} height={size} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"/>
        <img alt='markdown' loading="lazy"  width={size} height={size}  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg" />
        <img alt='latex' loading="lazy"  width={size} height={size} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/latex/latex-original.svg" />
        <img alt='vsCode' loading="lazy"  width={size} height={size} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" />
        <img alt='linux' loading="lazy"  width={size} height={size}  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" /> 
      </div>
  )
}

function Footer(props:any) {
  return (
    <footer id={props.id} className="footerBar">
      <div>
        <i className="icon"/>
        <div className="footerBar-column"><ul>
          <li></li>
          <li>Jiu-Jitsu</li>
          <li>Capoeira</li>
          <a href="/public/pages/troll.html"><li>Onlyfans</li></a>
        </ul></div>
        <div className="footerBar-column"><ul>
          <a href="/games"><li>Game</li></a>
          <a href="/games/telma/dist"><li>Telma</li></a>
          <a href="/games/perfil/dist"><li>Perfil</li></a>
          <a href="/games/spy/dist"><li>Who is Spy?</li></a>
        </ul></div>
        <div className="footerBar-column"><ul>
          <a href="/primer/cEDH"><li>Orvar</li></a>
          <a href="/primer/orvar"><li>Orvar</li></a>
          <a href="/primer/urza"><li>Urza</li></a>
        </ul></div>
        <div className="footerBar-column"><ul>
          <li>Legacy</li>
          <li>UWx</li>
          <li>HighTide</li>
        </ul></div>
      </div>
      <Logos/>
    </footer>
  )
}

export default Footer