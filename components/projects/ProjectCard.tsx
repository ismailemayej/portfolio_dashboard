"use client";
import Image from "next/image";
import Link from "next/link";
import DeleteAction from "./DeleteIcon";
import ModalClick from "../Modal";
import ProjectUpdate from "./ProjectUpdate";

interface Props {
  _id: string;
  image?: string;
  livelink?: string;
  githublink?: string;
  overview: string;
}

const ProjectCard = ({ _id, image, overview, livelink, githublink }: Props) => {
  const project = { _id, image, overview, livelink, githublink };

  // Helper function to validate URL
  const isValidUrl = (url: string) =>
    url.startsWith("/") ||
    url.startsWith("http://") ||
    url.startsWith("https://");
  const imageUrl = isValidUrl(image || "") ? image : "/fallback-image.jpg";

  return (
    <div className="relative overflow-hidden h-62 rounded-lg shadow-lg border transition delay-150 duration-300 ease-in-out border-[#2A0E61]">
      <Image
        src={imageUrl as string}
        alt="project image"
        width={1000}
        height={1000}
        className="w-full object-contain"
      />

      <div className="flex gap-3 absolute bottom-0 p-4 text-white">
        {livelink && (
          <Link className="px-4 rounded-md bg-slate-600" href={livelink}>
            Live
          </Link>
        )}
        {githublink && (
          <Link
            className="px-4 rounded-md bg-amber-700"
            href={githublink}
            passHref
          >
            Github
          </Link>
        )}
        <DeleteAction id={_id} name="projects" />
        <ModalClick
          button="Update"
          title="Edit your project"
          text={<ProjectUpdate projectData={project} />}
        />
      </div>
    </div>
  );
};

export default ProjectCard;
