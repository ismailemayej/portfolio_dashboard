import React from "react";
import BlogCard from "./BlogCard";
import BlogPost from "./BlogPost";
import ModalClick from "../Modal";

const AllBlogs = ({ blogs }: any) => {
  return (
    <div>
      <ModalClick button="Add Blog" title="Create Blog" text={<BlogPost />} />
      <div className="grid lg:grid-cols-4 gap-2 grid-cols-1 pb-2">
        {blogs?.reverse().map((blog: any) => (
          <BlogCard key={blog._id} blogs={blog} />
        ))}
      </div>
    </div>
  );
};

export default AllBlogs;
