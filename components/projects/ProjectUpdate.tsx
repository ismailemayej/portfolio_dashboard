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
  overview: any;
  _id: string;
};
const ProjectUpdate = ({ projectData }: any) => {
  const isValidUrl = (url: string) =>
    url.startsWith("/") ||
    url.startsWith("http://") ||
    url.startsWith("https://");
  const imageUrl = isValidUrl(projectData?.image)
    ? projectData?.image
    : "/fallback-image.jpg";
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const id = projectData._id;
      const res = await Update(data, "projects", id);
      if (res.acknowledged === true) {
        toast.success("Update Successfull");
      } else {
        toast.error("update unsuccessfull");
      }
    } catch (error) {
      console.error("Failed to update post:", error);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        defaultValue={imageUrl}
        type="text"
        placeholder="Image Url"
        className="py-2 my-2"
        {...register("image", { required: true })}
      />
      <Input
        defaultValue={projectData.livelink}
        type="text"
        placeholder="Live Link"
        className="py-2 my-2"
        {...register("livelink", { required: false })}
      />
      <Input
        defaultValue={projectData.githublink}
        type="text"
        placeholder="Github Link"
        className="py-2 my-2"
        {...register("githublink", { required: false })}
      />
      <Textarea
        defaultValue={projectData.overview}
        placeholder="overview"
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
