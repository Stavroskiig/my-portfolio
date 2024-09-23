import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        <div className="project-item">
          <h3>Project 1</h3>
          <p>
            A cool project description goes here. It shows what technologies I used and the purpose of the project.
          </p>
        </div>
        <div className="project-item">
          <h3>Project 2</h3>
          <p>
            Another great project description, highlighting the features, challenges, and outcomes.
          </p>
        </div>
        {/* Add more projects as needed */}
      </div>
    </section>
  );
};

export default Projects;
