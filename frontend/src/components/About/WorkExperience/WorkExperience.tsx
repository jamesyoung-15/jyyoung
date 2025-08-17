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
            Developed and maintained web applications using React and Node.js,
            improving user experience and performance.
          </li>
          <li>
            Collaborated with cross-functional teams to design and implement new
            features based on user feedback.
          </li>
          <li>
            Participated in code reviews and contributed to the team's coding
            standards.
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
            Created a prototype for real-time fall detection using only a camera
            on a Raspberry Pi.
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
