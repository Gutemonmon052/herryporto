import "../css/skills.css";
import { Skillsdt } from "./skillsdt";

export function Skills({}) {
  return (
    <div>
      <div className="skills" id="skills">
        <div className="skilltitle">
          <h2>SKILLS</h2>
        </div>
        <div className="skillsfe">
          <div className="skillsfe-title">
            <h3>Front-End</h3>
          </div>
          <div className="skillsfe-det">
            <Skillsdt skill="HTML" />
            <Skillsdt skill="AJAX" />
            <Skillsdt skill="CSS" />
            <Skillsdt skill="JQuery" />
            <Skillsdt skill="JS" />
          </div>
        </div>
        <div className="skillsbe">
          <div className="skillsbe-det">
            <Skillsdt skill="PHP"/>
            <Skillsdt skill="SQL"/>
          </div>
          <div className="skillsbe-title">
            <h3>Back-End</h3>
          </div>
        </div>
        <div className="skillsdev">
          <div className="skillsdev-title">
            <h3>Dev-Ops & Tools</h3>
          </div>
          <div className="skillsdev-det">
            <Skillsdt skill="Digital Ocean" />
            <Skillsdt skill="VS Code" />
            <Skillsdt skill="File Zilla"/>
            <Skillsdt skill="Github"/>
            <Skillsdt skill="Figma"/>
            <Skillsdt skill="Heroku"/>
            <Skillsdt skill="Odoo"/>
            <Skillsdt skill="AWS"/>
          </div>
        </div>
      </div>
    </div>
  );
}
