import '../css/experiences.css';

import { IExperiences } from '../interfaces/iexperiences';

export function ExperiencesDt (props:IExperiences) {
  return (
    <div>
        <div className="experiences-list-dt">
            <div className="experiences-list-year">
              <h3>{props.year}</h3>
              <p>{props.job} at {props.company}</p>
            </div>
            <div className="experiences-list-desc">
              <p>
                {props.details}
              </p>
            </div>
          </div>
    </div>
  );
}
