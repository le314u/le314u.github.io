import NavBar from './component/NavBar/navBar'
import Banner from './component/Banner/banner'
import CustomCarousel from './component/Carousel/carousel'
import Footer from './component/Footer/footer'
import Title from './component/Title/title'
import {Content,InverseContent} from './component/Content/content'
// import piuLogo from './assets/piu.svg'
import './App.css'
import data from './data.tsx'

console.log(data.cards['games'])

function App() {
  return (
    <>
      <NavBar/>
      <Banner id="home" {...data.banners[0]}/>
      <Title {...data.title}/>
      <CustomCarousel id="games" {...data.cards['games']}/>
      <Content id="projetos" {...data.contents[0]} />
      <InverseContent id="" {...data.contents[1]}/>
      <Content  id="" {...data.contents[2]}/>
      <InverseContent  id="" {...data.contents[3]}/>
      <Content  id="" {...data.contents[4]}/>
      <Banner {...data.banners[1]}/>
      <Footer/>
    </>
  )
}

export default App
