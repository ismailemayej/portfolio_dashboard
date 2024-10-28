"use client";
import { Delete } from "@/utils/api";
import { Beer } from "lucide-react";
import React from "react";
import { toast } from "sonner";

const DeleteAction = ({ id, name }: { id: string; name: string }) => {
  const handleDelete = async (id: string) => {
    try {
      const res = await Delete(id, name);
      if (res && res.acknowledged) {
        toast.success(`${name} Delete Successful`);
      } else {
        toast.error(`${name} Delete unsuccessful`);
      }
    } catch (error) {
      console.error("Delete failed:", error);
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <Beer
      onClick={() => handleDelete(id)}
      className="text-red-500 p-1 w-10 h-8 hover:text-blue-500 font-bold cursor-pointer"
    />
  );
};

export default DeleteAction;
