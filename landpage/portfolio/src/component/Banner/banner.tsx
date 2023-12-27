import './banner.css'


function Banner(props:any){
    return (
        <div className="banner">
            <div className="banner-content">
                <h2 className="banner-title">{props.title}</h2>
                <p className="banner-description">{props.text}</p>
            </div>
        </div>
  )
}




export default Banner