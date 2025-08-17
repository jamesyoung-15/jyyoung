import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProjectsList from "./ProjectsList";
import "./Projects.css";
import Accordion from "../Accordion/Accordion";
import type { AccordionItem } from "../Accordion/Accordion";

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("Highlighted");

  const categories = ["Highlighted", "All Projects"];

  const filteredProjects =
    activeCategory === "All Projects"
      ? ProjectsList
      : ProjectsList.filter((project) =>
          project.categories.includes(activeCategory),
        );

  return (
    <section className="projects-section" id="projects">
      <h2>Projects</h2>

      <div
        className="projects-categories"
        role="tablist"
        aria-label="Project categories"
      >
        {categories.map((c) => (
          <button
            key={c}
            className={`projects-category ${activeCategory === c ? "active" : ""}`}
            onClick={() => setActiveCategory(c)}
            aria-pressed={activeCategory === c}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="projects-accordion-wrapper">
        <Accordion
          items={filteredProjects.map((proj, idx) => {
            const id = `project-${idx}`;
            return {
              id,
              title: proj.title,
              defaultOpen: proj.defaultOpen || false,
              children: (
                <div className="project-accordion-content">
                  {proj.image && (
                    <div className="project-image-wrap">
                      <img
                        src={proj.image}
                        alt={proj.title}
                        className="project-image"
                      />
                    </div>
                  )}
                  <div className="project-body">
                    <p className="project-description">{proj.description}</p>

                    {proj.tags && proj.tags.length > 0 && (
                      <div className="project-tags">
                        {proj.tags.map((t) => (
                          <span key={t} className="project-tag">
                            {t}
                          </span>
                        ))}
                      </div>
                    )}

                    {proj.links && proj.links.length > 0 && (
                      <div className="project-links">
                        {proj.links.map((link, i) => (
                          <a
                            key={i}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link"
                          >
                            <FontAwesomeIcon icon={link.icon} />
                            <span>{link.text}</span>
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ),
            } as AccordionItem;
          })}
        />
      </div>
    </section>
  );
};

export default Projects;
