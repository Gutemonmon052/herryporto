import { IProjects } from "../interfaces/iprojects";

export function ProjectDetDt(props: IProjects) {
  return (
    <div className="projectdet">
      <div className="projectdet-title">
        <div className="projectdet-id">
          <div className="projectnum">
            <span>HL Project #{props.id}</span>
          </div>
        </div>
        <div className="projectdet-title-text">
          <h2>{props.name}</h2>
        </div>
      </div>
      <div className="projectdet-media">
        <div className="cover-det"></div>
        {props.pic && <img src={props.pic.url} alt="" />}
      </div>
      <div className="projectdet-content">
        <p>{props.situations}</p>
        <br />
        <div className="projectdet-content-div">
          <p>{props.tasks}</p>
          <br />
          <p>{props.actions}</p>
          <br />
        </div>
        <br />
        <p>{props.results}</p>
      </div>
      <div className="projectdet-btn-link">
        <a href={props.link}>
          <div className="btn btn-primary">
            <b>View More</b>
          </div>
        </a>
      </div>
    </div>
  );
}
