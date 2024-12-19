import "../css/testimonials.css";
import { ITestimonials } from "../interfaces/itestimoni";

export function TestimonialsDt(props: ITestimonials) {
  return (
    <div>
      <div className="testdt">
        <div className="testdt-media">
          {props.pic && <img src={props.pic.url} alt="" />}
        </div>
        <div className="testdt-info">
          <h5>{props.name}</h5>
          <p>{props.comment}</p>
        </div>
      </div>
    </div>
  );
}
