"use client";

import { Update } from "@/utils/api";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { toast } from "sonner";

type Inputs = {
  skilllogo: string;
  skillname: string;
  skillpercentage: number;
  _id: string;
};

interface Props {
  SkillsData: {
    id: string;
    skillname: string;
    skilllogo: string;
    skillpercentage: number;
  };
}

const SkillsUpdate = ({ SkillsData }: Props) => {
  const options = Array.from({ length: 100 }, (_, i) => i + 1);
  const [selectedPercentage, setSelectedPercentage] = useState<number | null>(
    SkillsData.skillpercentage || null
  );

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const id = SkillsData.id;
      const res = await Update(data, "skills", id);
      if (res.acknowledged === true) {
        toast.success("Update Successful");
      } else {
        toast.error("Update Unsuccessful");
      }
    } catch (error) {
      console.error("Failed to update post:", error);
    }
  };

  const handleDropdownSelect = (value: string) => {
    const selectedValue = parseInt(value, 10);
    setSelectedPercentage(selectedValue);
    setValue("skillpercentage", selectedValue);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        defaultValue={SkillsData.skillname}
        type="text"
        className="py-2 my-2"
        {...register("skillname", { required: true })}
      />
      <Input
        defaultValue={SkillsData.skilllogo}
        type="text"
        className="py-2 my-2"
        {...register("skilllogo", { required: true })}
      />
      <Select
        value={selectedPercentage?.toString() || ""}
        onValueChange={handleDropdownSelect}
      >
        <SelectTrigger className="w-[180px]">
          <Button>
            {selectedPercentage
              ? `Selected: ${selectedPercentage}%`
              : `Skill Percentage: ${SkillsData.skillpercentage}%`}
          </Button>
        </SelectTrigger>
        <SelectContent className="overflow-auto max-h-80">
          {options.map((option) => (
            <SelectItem key={option} value={option.toString()}>
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
      <Button color="primary" type="submit">
        Update
      </Button>
    </form>
  );
};

export default SkillsUpdate;
