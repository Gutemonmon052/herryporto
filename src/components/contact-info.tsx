import "../css/contactme.css";
import { ISosmed } from "../interfaces/isosmed";

export function ContactInfo(props: ISosmed) {
  return (
    <div>
      <div className="btn-sosmed">
        <a href={`${props.link}`} target="blank">
          <img src={`../assets/images/${props.name}.svg`} alt="ig" />
        </a>
      </div>
    </div>
  );
}
