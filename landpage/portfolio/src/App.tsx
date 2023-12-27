import NavBar from './component/NavBar/navBar'
import Banner from './component/Banner/banner'
import CustomCarousel from './component/Carousel/carousel'
import Footer from './component/Footer/footer'
import Title from './component/Title/title'
import {Content,InverseContent} from './component/Content/content'
// import piuLogo from './assets/piu.svg'
import './App.css'
import data from './data.tsx'




const banner = {
  title:"Le314u",
  text:"Olá! Meu nome é Lucas Mateus vulgarmente conhecido como piu"
}

function App() {
  return (
    <>
      <NavBar/>
      <Banner {...data.banner}/>
      <CustomCarousel {...data.cards}/>
      <Content id="projeto_1"{...data.content} />
      <InverseContent id="projeto_2" {...data.content}/>
      <Title {...data.title}/>
      <Content id="projeto_3" {...data.content}/>
      <InverseContent id="projeto_4" {...data.content}/>
      <Banner {...banner}/>
      <Content id="projeto_5" {...data.content}/>
      <InverseContent id="projeto_6" {...data.content} />
      <Footer/>
    </>
  )
}

export default App
