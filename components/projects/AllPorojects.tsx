import React from "react";
import ProjectCard from "./ProjectCard";
import ModalClick from "../Modal";
import ProjectPost from "./ProjectPost";
const AllPorojects = ({ projects }: any) => {
  return (
    <div>
      <ModalClick
        button="Add Skill"
        title="Create Skill"
        text={<ProjectPost />}
      />
      <div className="grid lg:grid-cols-4 gap-2 grid-cols-1 pb-2 h-44 relative">
        {projects?.reverse().map((project: any) => (
          <ProjectCard
            key={project.id}
            image={project.image}
            overview={project.overview}
            livelink={project.livelink || "#"}
            githublink={project.githublink || "#"}
            id={project._id}
          />
        ))}
      </div>
    </div>
  );
};
export default AllPorojects;
