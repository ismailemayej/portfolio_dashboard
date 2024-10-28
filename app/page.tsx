import AllSkills from "@/components/skills/AllSkills";
import { Get } from "@/utils/api";
import React from "react";
const SkillPage = async () => {
  const { data } = await Get({}, "skills");
  return (
    <div>
      <AllSkills skills={data} />
    </div>
  );
};
export default SkillPage;
