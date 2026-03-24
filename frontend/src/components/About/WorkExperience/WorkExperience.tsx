import "./WorkExperience.css";
import Timeline from "../../Timeline/Timeline";

const items = [
  {
    id: "exp-1",
    title: "Platform Engineer",
    date: "Janurary 2026 - Present",
    metaTitle: "American Family Insurance",
    location: "United States",
    description: (
      <div>
        <ul className="work-experience-list">
          <li>
            Contributed to centralized server automation by developing and
            maintaining Ansible playbooks and roles to provision and manage
            Windows and RHEL systems, improving configuration standardization
            across environments.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "exp-2",
    title: "Software Engineer Intern",
    date: "June 2025 - December 2025",
    metaTitle: "Granite Telecommunications",
    location: "United States",
    description: (
      <div>
        <ul className="work-experience-list">
          <li>
            Built testing infrastructure that automates flashing images to Linux
            edge devices, orchestrate health checks, and run verification
            scripts to streamline device QA
          </li>
          <li>
            Added FastAPI endpoints for developers to access devices, run tests,
            and retrieve results remotely
          </li>
          <li>
            Worked on building an automated invoice processing pipeline using
            OCR and Gemini to extract, classify, and structure data from
            unstructured invoices from multiple vendors
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "exp-3",
    title: "Software Developer Intern",
    date: "Dec. 2023 - Feb. 2024",
    metaTitle: "Intelligent Design Technology Limited",
    location: "Hong Kong",
    description: (
      <div>
        <ul className="work-experience-list">
          <li>
            Created a prototype for real-time fall detection using camera inputs
            connected to a Raspberry Pi.
          </li>
          <li>
            Built with Python by utilizing OpenCV for streaming camera input
            frames, Movenet for pose estimation, and heuristics between poses
            for classifying fall.
          </li>
        </ul>
      </div>
    ),
  },
];

const WorkExperience = () => {
  return (
    <div className="work-content">
      <Timeline items={items} />
    </div>
  );
};

export default WorkExperience;
