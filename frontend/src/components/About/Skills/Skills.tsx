import "./Skills.css";
import {
  awsLogo,
  cssLogo,
  dockerLogo,
  fastapiLogo,
  flaskLogo,
  gitLogo,
  typescriptLogo,
  terraformLogo,
  postgresqlLogo,
  pythonLogo,
  reactLogo,
  sqliteLogo,
  linuxLogo,
} from "../../../assets/icons/skills";

const SkillsData = {
  Technologies: [
    { name: "Typescript", icon: typescriptLogo },
    { name: "Python", icon: pythonLogo },
    { name: "CSS", icon: cssLogo },
  ],
  "Frameworks/Libraries": [
    { name: "React", icon: reactLogo },
    { name: "FastAPI", icon: fastapiLogo },
    { name: "Flask", icon: flaskLogo },
  ],
  Databases: [
    { name: "PostgreSQL", icon: postgresqlLogo },
    { name: "SQLite", icon: sqliteLogo },
  ],
  Tools: [
    { name: "Git", icon: gitLogo },
    { name: "Docker", icon: dockerLogo },
    { name: "Terraform", icon: terraformLogo },
    { name: "Linux", icon: linuxLogo },
  ],
  Cloud: [{ name: "AWS", icon: awsLogo }],
};

const Skills = () => {
  return (
    <div className="skills">
      {Object.entries(SkillsData).map(([category, skills]) => (
        <div key={category} className="skills-category">
          <h3 className="skills-category-title">{category}</h3>
          <div className="skills-list">
            {skills.map((skill) => (
              <div key={skill.name} className="skills-list-item">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="skills-list-item-icon"
                />
                <span className="skills-list-item-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
