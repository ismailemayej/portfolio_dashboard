import React from "react";
import DeleteAction from "../projects/DeleteIcon";
import ModalClick from "../Modal";
import BlogUpdate from "./BlogUpdate";
import { Card, CardContent, CardHeader } from "../ui/card";
import Image from "next/image";

type BlogData = {
  _id: string;
  image: string;
  title: string;
  category: string;
  details: string;
};
const isValidUrl = (url: string) => {
  return (
    url.startsWith("/") ||
    url.startsWith("http://") ||
    url.startsWith("https://")
  );
};

export default function BlogCard({ blogs }: { blogs: BlogData }) {
  const imageUrl =
    blogs.image && isValidUrl(blogs.image)
      ? blogs.image
      : "/fallback-image.jpg";

  return (
    <Card className="py-4">
      <CardContent className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl h-44 border bg-slate-100"
          src={imageUrl}
          width={270}
          height={250}
        />
      </CardContent>
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-large">{blogs.title}</h4>
        <p className="text-tiny uppercase font-bold">{blogs.category}</p>
        <small className="text-default-500 flex justify-center">
          <DeleteAction id={blogs._id} name="blogs" />
          <ModalClick
            button="update"
            title="Edit your blog"
            text={<BlogUpdate blogData={blogs} />}
          />
        </small>
      </CardHeader>
    </Card>
  );
}
