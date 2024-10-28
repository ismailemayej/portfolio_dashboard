import AllBlogs from "@/components/blogs/AllBlogs";
import { Get } from "@/utils/api";
import React from "react";
const page = async () => {
  const { data } = await Get({}, "blogs");
  return (
    <div>
      <AllBlogs blogs={data} />
    </div>
  );
};
export default page;
