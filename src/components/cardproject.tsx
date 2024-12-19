import "../css/projects.css";
import { IProjects } from "../interfaces/iprojects";

// export interface IAppProps {
// }

export function CardProject(props: IProjects) {
  const titleToSlug = (title?: string): string => {
    if (!title) return "";
    return title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s]/gi, "")
      .replace(/\s+/g, "-");
  };

  return (
    <div>
      <a href={`/projects/${titleToSlug(props.name)}`}>
        <div className="card-project">
          <div className="card-info">
            <div className="card-title">
              <h4>{props.name}</h4>
            </div>
            <div className="card-desc">
              <p>{props.summary}</p>
            </div>
          </div>
          <div className="card-media">
            {props.pic && <img src={props.pic.url} alt="" />}
          </div>
          <div className="card-link">
            <a href={`/projects/${titleToSlug(props.name)}`}>
              <b>Read More</b>
            </a>
          </div>
        </div>
      </a>
    </div>
  );
}
