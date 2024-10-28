"use client";

import { Update } from "@/utils/api";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { toast } from "sonner";

type Inputs = {
  image?: string;
  title: string;
  category: string;
  details: string;
  _id: string;
};

interface PostUpdateProps {
  blogData: {
    _id: string;
    image: string;
    title: string;
    category: string;
    details: string;
  };
}

const PostUpdate: React.FC<PostUpdateProps> = ({ blogData }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const id = blogData._id;
      const res = await Update(data, "blogs", id);
      if (res.acknowledged === true) {
        toast.success("Update Successful");
      } else {
        toast.error("Update Unsuccessful");
      }
    } catch (error) {
      console.error("Failed to update post:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        defaultValue={blogData.image || ""}
        type="text"
        placeholder="Image URL"
        className="py-2"
        {...register("image", { required: true })}
      />
      {errors.image && <p className="error">Image URL is required</p>}

      <Input
        defaultValue={blogData.title || ""}
        type="text"
        placeholder="Title"
        className="py-2"
        {...register("title", { required: true })}
      />
      {errors.title && <p className="error">Title is required</p>}

      <Input
        defaultValue={blogData.category || ""}
        type="text"
        placeholder="Category"
        className="py-2"
        {...register("category", { required: true })}
      />
      {errors.category && <p className="error">Category is required</p>}

      <Input
        defaultValue={blogData.details || ""}
        type="text"
        placeholder="Details"
        className="py-2"
        {...register("details", { required: true })}
      />
      {errors.details && <p className="error">Details are required</p>}

      <Button color="primary" type="submit">
        Update
      </Button>
    </form>
  );
};

export default PostUpdate;
