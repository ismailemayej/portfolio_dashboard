"use client";
import { Update } from "@/utils/api";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { toast } from "sonner";

type Inputs = {
  image?: string;
  livelink?: string;
  githublink?: string;
  overview: string;
  _id: string;
};

interface ProjectUpdateProps {
  projectData: {
    _id: string;
    image?: string;
    livelink?: string;
    githublink?: string;
    overview: string;
  };
}

const ProjectUpdate: React.FC<ProjectUpdateProps> = ({ projectData }) => {
  const isValidUrl = (url: string) =>
    url.startsWith("/") ||
    url.startsWith("http://") ||
    url.startsWith("https://");

  const imageUrl = isValidUrl(projectData?.image || "")
    ? projectData.image
    : "";

  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const id = projectData._id;
      const res = await Update(data, "projects", id);
      if (res.acknowledged === true) {
        toast.success("Update Successful");
      } else {
        toast.error("Update Unsuccessful");
      }
    } catch (error) {
      console.error("Failed to update project:", error);
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        defaultValue={imageUrl}
        type="text"
        placeholder="Image URL"
        className="py-2 my-2"
        {...register("image", { required: true })}
      />
      <Input
        defaultValue={projectData.livelink}
        type="text"
        placeholder="Live Link"
        className="py-2 my-2"
        {...register("livelink")}
      />
      <Input
        defaultValue={projectData.githublink}
        type="text"
        placeholder="GitHub Link"
        className="py-2 my-2"
        {...register("githublink")}
      />
      <Textarea
        defaultValue={projectData.overview}
        placeholder="Overview"
        className="py-2 my-2"
        {...register("overview", { required: true })}
      />
      <Button color="primary" type="submit">
        Update
      </Button>
    </form>
  );
};

export default ProjectUpdate;
