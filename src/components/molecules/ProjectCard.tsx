import NormalText from "../atom/NormalText";
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa";

type projectType = "팀 프로젝트" | "개인 프로젝트";
export type ProjectCardProps = {
  cardTitle: string;
  cardImage?: string;
  cardContent: string;
  cardDay: string;
  cardProject?: projectType;
  cardGitUrlEvent: () => void;
  cardLinkEvent?: () => void;
};

const ProjectCard = ({
  cardTitle,
  cardImage,
  cardContent,
  cardDay,
  cardProject,
  cardGitUrlEvent,
  cardLinkEvent,
}: ProjectCardProps) => {
  return (
    <div className="flex flex-col bg-white w-[480px] h-[350px] rounded-xl">
      <div
        className="w-full h-[200px] hover:cursor-pointer"
        onClick={cardGitUrlEvent}
      >
        <img
          src={cardImage}
          className=" rounded-xl w-full h-full object-contain"
        />
      </div>
      <div className="flex flex-col gap-1 p-2 w-full">
        <div className="font-bold text-grayblue text-lg">{cardTitle}</div>
        <div className="flex w-full justify-between">
          <NormalText
            className="text-base font-semibold text-slate-800"
            content={cardDay}
          />
          {cardProject && <NormalText content={cardProject} />}
        </div>
        <NormalText content={cardContent} />
        <div className="flex gap-2">
          <div
            className="h-6 hover:cursor-pointer text-slate-800"
            onClick={cardGitUrlEvent}
          >
            <FaGithub size="24px" />
          </div>
          {cardLinkEvent && (
            <div
              className="h-6 hover:cursor-pointer text-slate-800"
              onClick={cardLinkEvent}
            >
              <FaLink size="24px" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;
