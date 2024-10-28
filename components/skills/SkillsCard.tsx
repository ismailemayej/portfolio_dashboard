"use client";
import Image from "next/image";
import DeleteAction from "../projects/DeleteIcon";
import ModalClick from "../Modal";
import SkillsUpdate from "./updateSkills";
interface Props {
  skillname: string;
  skillpercentage: number;
  skilllogo: string;
  id: string;
}
const SkillsCard = ({ skillname, skilllogo, id, skillpercentage }: Props) => {
  const isValidUrl = (url: string) =>
    url.startsWith("/") ||
    url.startsWith("http://") ||
    url.startsWith("https://");
  const imageUrl = isValidUrl(skilllogo) ? skilllogo : "/fallback-image.jpg";
  return (
    <div
      key={id}
      className="transition-all bg-white shadow-xl hover:bg-slate-50 hover:scale-105 border flex gap-1 items-center justify-between  rounded-xl px-3 py-1"
    >
      <Image
        priority
        src={imageUrl}
        alt=""
        height={40}
        width={40}
        className="object-cover"
      />
      <div className="w-full">
        <div className="flex justify-between">
          <p className="text-lg mx-1 text-yellow-50 px-3 rounded-xl bg-slate-500 font-semibold">
            {skillname}
          </p>
          <p className="text-lg mx-1 text-yellow-50 px-3 rounded-xl bg-slate-500 font-semibold">
            {skillpercentage}%
          </p>
        </div>
      </div>
      <p className="flex items-center">
        <DeleteAction id={id} name="skills" />
        <ModalClick
          button="update"
          title="Edit Skill Name"
          text={
            <SkillsUpdate
              SkillsData={{ id, skillname, skilllogo, skillpercentage }}
            />
          }
        />
      </p>
    </div>
  );
};
export default SkillsCard;
