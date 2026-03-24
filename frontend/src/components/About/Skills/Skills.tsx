import "./Skills.css";
import {
  awsLogo,
  ansibleLogo,
  dockerLogo,
  fastapiLogo,
  bashLogo,
  gitLogo,
  terraformLogo,
  postgresqlLogo,
  pythonLogo,
  sqliteLogo,
  linuxLogo,
} from "../../../assets/icons/skills";

const SkillsData = {
  Languages: [
    { name: "Python", icon: pythonLogo },
    { name: "Bash", icon: bashLogo },
  ],
  Tools: [
    { name: "Git", icon: gitLogo },
    { name: "Docker", icon: dockerLogo },
    { name: "Terraform", icon: terraformLogo },
    { name: "Ansible", icon: ansibleLogo },
    { name: "Linux", icon: linuxLogo },
  ],
  Platforms: [{ name: "AWS", icon: awsLogo }],
  "Frameworks/Libraries": [{ name: "FastAPI", icon: fastapiLogo }],
  Databases: [
    { name: "PostgreSQL", icon: postgresqlLogo },
    { name: "SQLite", icon: sqliteLogo },
  ],
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
