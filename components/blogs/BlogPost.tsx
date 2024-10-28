"use client";
import React, { useState, useRef } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import JoditEditor from "jodit-react";
import { Post } from "@/utils/api";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { toast } from "sonner";
type Inputs = {
  image: string;
  title: string;
  category: string;
  details: string;
  _id: string;
  newContent: string;
};

const BlogPost = () => {
  const editor = useRef(null);
  const [details, setDetails] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const requestData = { ...data, details };
      const res = await Post(requestData, "blogs");
      if (res && res.acknowledged) {
        toast.success("Blog Post Successful");
      } else {
        toast.error("Update Unsuccessful");
      }
    } catch (error) {
      console.error("Failed to post blog:", error);
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="text"
        placeholder="Title name"
        className="py-2 my-2"
        {...register("title", { required: true })}
      />
      {errors.title && <p className="text-red-500">Title is required</p>}

      <Input
        type="text"
        placeholder="Image Url"
        className="py-2 my-2"
        {...register("image", { required: true })}
      />
      {errors.image && <p className="text-red-500">Image URL is required</p>}

      <Input
        type="text"
        placeholder="Category"
        className="py-2 my-2"
        {...register("category", { required: true })}
      />
      {errors.category && <p className="text-red-500">Category is required</p>}

      <JoditEditor
        ref={editor}
        value={details}
        onBlur={(newContent) => setDetails(newContent)}
        onChange={() => {}}
      />

      <Button className="mt-4" color="primary" type="submit">
        Post
      </Button>
    </form>
  );
};

export default BlogPost;
