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
          <div className="testdt-info-name">
            <span>{props.name}</span>
          </div>
          <div className="testdt-info-comment">
            <p>{props.comment}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
