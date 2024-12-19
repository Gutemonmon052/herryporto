import "../css/skills.css";

interface ISkillsProps {
  skill: string;
}

export function Skillsdt(skill: ISkillsProps) {
  return (
    <div>
      <div className="skilldt">
        <span>{skill.skill}</span>
      </div>
    </div>
  );
}
