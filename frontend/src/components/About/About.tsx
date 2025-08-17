import "./About.css";
import Accordion from "../Accordion/Accordion";
import type { AccordionItem } from "../Accordion/Accordion";
import {
  faInfoCircle,
  faCode,
  faGraduationCap,
  faCertificate,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import Summary from "./Summary/Summary";
import Skills from "./Skills/Skills";
import Certifications from "./Certifications/Certifications";
import Education from "./Education/Education";
import WorkExperience from "./WorkExperience/WorkExperience";

const items: AccordionItem[] = [
  {
    id: "summary",
    titleIcon: faInfoCircle,
    title: "Summary",
    defaultOpen: true,
    children: <Summary />,
  },
  {
    id: "work-experience",
    titleIcon: faBriefcase,
    defaultOpen: true,
    title: "Work Experience",
    children: <WorkExperience />,
  },
  {
    id: "education",
    titleIcon: faGraduationCap,
    defaultOpen: true,
    title: "Education",
    children: <Education />,
  },
  {
    id: "skills",
    titleIcon: faCode,
    title: "Skills",
    children: <Skills />,
  },
  {
    id: "certifications",
    titleIcon: faCertificate,
    title: "Certifications",
    children: <Certifications />,
  },
];

const About = () => {
  return (
    <section className="about-section" id="about">
      <h2>About Me</h2>
      <div className="about-container">
        <Accordion items={items} />
      </div>
    </section>
  );
};

export default About;
