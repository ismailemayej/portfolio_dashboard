"use client";
import { Post } from "@/utils/api";

import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Select, SelectContent, SelectItem, SelectTrigger } from "../ui/select";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { toast } from "sonner";

type Inputs = {
  skilllogo: string | undefined | URL;
  skillname: string;
  skillpercentage: number;
  _id: string;
};

const SkillPost = () => {
  const options = Array.from({ length: 100 }, (_, i) => i + 1);
  const [selectedPercentage, setSelectedPercentage] = useState<number | null>(
    null
  );

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const res = await Post(data, "skills");
      if (res && res.acknowledged) {
        toast.success("Skills Post Successful");
      } else {
        toast.error("Update Unsuccessful");
      }
    } catch (error) {
      console.error("Failed to post skills:", error);
      toast.error("An error occurred. Please try again.");
    }
  };

  const handleDropdownSelect = (key: React.Key) => {
    const selectedValue = parseInt(key as string, 10);
    setSelectedPercentage(selectedValue);
    setValue("skillpercentage", selectedValue);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        placeholder="Skill Name"
        type="text"
        className="py-2 my-2"
        {...register("skillname", { required: true })}
      />
      <Input
        placeholder="Skill logo"
        type="text"
        className="py-2 my-2"
        {...register("skilllogo", { required: true })}
      />
      <Select>
        <SelectTrigger className="w-[180px] my-2">
          <Button>
            {selectedPercentage
              ? `Selected: ${selectedPercentage}%`
              : "Choose a persentage number"}
          </Button>
        </SelectTrigger>
        <SelectContent className="overflow-auto max-h-80">
          {options.map((option) => (
            <SelectItem
              key={option}
              value={option.toString()}
              onSelect={() => handleDropdownSelect(option.toString())}
            >
              {option}%
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <input
        type="hidden"
        {...register("skillpercentage", { required: true })}
        value={selectedPercentage || ""}
      />
      {errors.skillpercentage && <span>This field is required</span>} <br />
      <Button className="w-full" color="primary" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default SkillPost;
