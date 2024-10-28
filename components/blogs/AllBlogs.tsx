import React from "react";
import BlogCard from "./BlogCard";
import BlogPost from "./BlogPost";
import ModalClick from "../Modal";

interface Blog {
  _id: string;
  image: string;
  title: string;
  category: string;
  details: string;
}

interface AllBlogsProps {
  blogs: Blog[];
}

const AllBlogs: React.FC<AllBlogsProps> = ({ blogs }) => {
  return (
    <div>
      <ModalClick button="Add Blog" title="Create Blog" text={<BlogPost />} />
      <div className="grid lg:grid-cols-4 gap-2 grid-cols-1 pb-2">
        {blogs
          ?.slice()
          .reverse()
          .map((blog) => (
            <BlogCard key={blog._id} blogs={blog} />
          ))}
      </div>
    </div>
  );
};
export default AllBlogs;
