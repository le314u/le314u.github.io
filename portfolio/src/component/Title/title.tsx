import "react-multi-carousel/lib/styles.css";
import "./title.css";


function Title(props:any){
    return (
      <div className="group-title">
      <div className="title">
        {props.title}
      </div>
      <div className="subtitle">
        {props.subtitle}
      </div>
      </div>
    )
}












export default Title