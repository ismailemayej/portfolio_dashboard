import React from "react";
import SkillsCard from "./SkillsCard";
import ModalClick from "../Modal";
import SkillPost from "./AddSkill";
const AllSkills = ({ skills }: any) => {
  return (
    <div>
      <ModalClick
        button="Add Skill"
        title="Create Skill"
        text={<SkillPost />}
      />
      <div className="grid lg:grid-cols-3 gap-1 grid-cols-1 pb-2">
        {skills?.reverse().map((skill: any) => (
          <SkillsCard
            key={skill._id}
            skillname={skill.skillname}
            skillpercentage={skill.skillpercentage}
            skilllogo={skill.skilllogo}
            id={skill._id}
          />
        ))}
      </div>
    </div>
  );
};

export default AllSkills;
