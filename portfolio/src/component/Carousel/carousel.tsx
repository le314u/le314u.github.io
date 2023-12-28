import Carousel from "react-multi-carousel"
import "./carousel.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};


function Item(props:any){
    return (
      <a href={props.href}>
        <div className="item">
            <div className="container">
                <h4><b>{props.title}</b></h4>
                <p>{props.subtitle}</p>
            </div>
        </div>
      </a>
    )
}


function CustomCarousel(props:any){
    return (
        <div className="carouselCustom">
            <Carousel responsive={responsive}
            arrows
            autoPlay
            infinite
            centerMode={false}>
                {props.children}
                {
                  props.cards.map((element:any) => {
                    console.log(element)
                    return (<Item 
                      key={element.title}
                      title={element.title}
                      subtitle={element.subtitle}
                      href={element.href}/>) 
                  })
                }
            </Carousel>
        </div>
    )
}


export default CustomCarousel