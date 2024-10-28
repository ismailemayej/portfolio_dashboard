import React, { ReactNode, ComponentType } from "react";
import { LinkProps } from "next/link";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FilePenLine } from "lucide-react";
type TModal = {
  button: string;
  title: string;
  text: ReactNode | ComponentType<LinkProps>;
};
export default function ModalClick({ button, title, text }: TModal) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button>
          {button === "update" ? (
            <FilePenLine className="text-blue-500 hover:text-red-500" />
          ) : (
            <button className="px-6 text-white my-4 bg-black py-2 rounded-md">
              {button}
            </button>
          )}
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div>
          <div>{typeof text === "function" ? <text /> : text}</div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
