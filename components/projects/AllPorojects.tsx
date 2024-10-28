import React from "react";
import ProjectCard from "./ProjectCard";
import ModalClick from "../Modal";
import ProjectPost from "./ProjectPost";

type Project = {
  id: string;
  _id: string;
  image: string;
  overview: string;
  livelink?: string;
  githublink?: string;
};

interface AllProjectsProps {
  projects: Project[];
}

const AllProjects: React.FC<AllProjectsProps> = ({ projects }) => {
  return (
    <div>
      <ModalClick
        button="Add Project"
        title="Create Project"
        text={<ProjectPost />}
      />
      <div className="grid lg:grid-cols-4 gap-2 grid-cols-1 pb-2 h-44 relative">
        {projects?.reverse().map((project) => (
          <ProjectCard
            key={project._id}
            image={project.image}
            overview={project.overview}
            livelink={project.livelink || "#"}
            githublink={project.githublink || "#"}
            _id={project._id} // Change `id` to `_id`
          />
        ))}
      </div>
    </div>
  );
};

export default AllProjects;
