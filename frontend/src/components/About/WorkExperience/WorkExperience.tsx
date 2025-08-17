import "./WorkExperience.css";
import Timeline from "../../Timeline/Timeline";

// example (not a file change) — pass this into the Timeline component
const items = [
  {
    id: "exp-1",
    title: "Software Engineer Intern",
    date: "June 2025 - Present",
    metaTitle: "Granite Telecommunications",
    location: "United States",
    description: (
      <div>
        <ul className="work-experience-list">
          <li>
            Worked on building an automated pipeline to flash Linux edge
            devices, orchestrate health checks, and run verification scripts to
            streamline device QA.
          </li>
          <li>
            Exposed test results and device status via a FastAPI service for
            future integration with CI/CD to reduce developer time spent on
            device validation
          </li>
          <li>
            Helped develop the frontend (React, Tailwind) and backend (FastAPI)
            for an internal RAG-based LLM chat interface and implemented an
            in-app feedback system to capture metrics to guide iterative
            improvements
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "exp-2",
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
