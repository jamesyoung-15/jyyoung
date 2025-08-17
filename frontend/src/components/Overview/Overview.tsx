import myPhoto from "../../assets/myphoto.png";
import "./Overview.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faBriefcase,
  faCompass,
  faEnvelope,
  faPaperclip,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faBlog } from "@fortawesome/free-solid-svg-icons";

const contactLinks = [
  {
    text: "Github",
    icon: faGithub,
    link: "https://github.com/jamesyoung-15",
    handle: "@jamesyoung-15",
  },
  {
    text: "LinkedIn",
    icon: faLinkedin,
    link: "https://www.linkedin.com/in/jamesyyoung/",
    handle: "@jamesyyoung",
  },
  {
    text: "Email",
    icon: faEnvelope,
    link: "mailto:jyyoung@jyymail.com",
    handle: "jyyoung@jyymail.com",
  },
  {
    text: "Youtube",
    icon: faYoutube,
    link: "https://www.youtube.com/@jyylab",
    handle: "@jyylab",
  },
  {
    text: "Blog",
    icon: faBlog,
    link: "https://blog.jyylab.com",
    handle: "blog.jyylab.com",
  },
  {
    text: "Resume",
    icon: faPaperclip,
    link: "https://blog.jyylab.com",
    handle: "PDF Resume",
  },
];

const Overview = () => {
  return (
    <section className="overview-section">
      <div className="overview-header">
        <div className="overview-summary">
          <h2>Hello! I'm James Young</h2>
          <div className="overview-details">
            <p>
              <FontAwesomeIcon icon={faBriefcase} /> SWE Intern @ Granite
              Telecommunications
            </p>
            <p>
              <FontAwesomeIcon icon={faGraduationCap} /> Studying MS Computer
              Science @ Boston University
            </p>
            <p>
              <FontAwesomeIcon icon={faCompass} /> Currently in Boston, United
              States
            </p>
          </div>
        </div>
        <div className="overview-photo">
          <img src={myPhoto} alt="Hello!" />
        </div>
      </div>
      <div className="overview-links">
        {contactLinks.map((contactLink, index) => (
          <div key={index} className="overview-link">
            <a href={contactLink.link} target="_blank">
              <FontAwesomeIcon icon={contactLink.icon} className="link-icon" />
              <div className="link-text">
                <span>{contactLink.text}</span>
                <span>{contactLink.handle}</span>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Overview;
