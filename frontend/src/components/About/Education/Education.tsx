import "./Education.css";
import Timeline from "../../Timeline/Timeline";

// example (not a file change) — pass this into the Timeline component
const items = [
  {
    id: "edu-1",
    title: "MS Computer Science",
    date: "2024 - Present",
    metaTitle: "Boston University",
    location: "United States",
  },
  {
    id: "edu-2",
    title: "BEng Electronic Engineering",
    date: "2020 - 2024",
    metaTitle: "The Hong Kong University of Science and Technology",
    location: "Hong Kong",
  },
];

const Education = () => {
  return (
    <div className="education-content">
      <Timeline items={items} />
    </div>
  );
};

export default Education;
