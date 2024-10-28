"use client";
import { Post } from "@/utils/api";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { toast } from "sonner";

type Inputs = {
  githublink: string | "";
  livelink: string | "";
  overview: string;
  image: string;
  _id: string;
};

const ProjectPost = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const res = await Post(data, "projects");
      if (res && res.acknowledged) {
        toast.success("Project Post Successful");
      } else {
        toast.error("Post Unsuccessful");
      }
    } catch (error) {
      console.error("Failed to post project:", error);
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="text"
        placeholder="Github link"
        className="py-2 my-2"
        {...register("githublink", { required: "Github link is required" })}
      />

      <Input
        type="text"
        placeholder="Project Live link"
        className="py-2 my-2"
        {...register("livelink", { required: "Live link is required" })}
      />
      <Input
        type="text"
        placeholder="Over view"
        className="py-2 my-2"
        {...register("overview", { required: "Overview is required" })}
      />
      <Input
        type="text"
        placeholder="Project view Image URL link"
        className="py-2 my-2"
        {...register("image", { required: "Image URL is required" })}
      />
      <Button className="w-full mt-2" color="primary" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default ProjectPost;
