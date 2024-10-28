import AllPorojects from "@/components/projects/AllPorojects";
import { Get } from "@/utils/api";
import React from "react";

const page = async () => {
  const { data } = await Get({}, "projects");
  return (
    <div>
      <AllPorojects projects={data} />
    </div>
  );
};

export default page;
