import ProjectCard from "../../components/molecules/ProjectCard";
import TitleText from "../../components/molecules/TitleText";

type ProjectSectionProps = {
  projectRef: React.RefObject<HTMLDivElement>;
};

const ProjectSection = ({ projectRef }: ProjectSectionProps) => {
  const handleWhiteGit = () => {
    return window.open("https://github.com/easyone1372/whtieclinic.git");
  };
  const handleTodoList = () => {
    return window.open("https://github.com/easyone1372/WIP_todolist.git");
  };
  const linkToTodoList = () => {
    return window.open("https://easyone1372.github.io/WIP_todolist/");
  };
  const handleBechefGit = () => {
    return window.open("https://github.com/easyone1372/finalBechefFront.git");
  };
  const handleCheckAttend = () => {
    return window.open("https://github.com/easyone1372/checkAttend.git");
  };
  return (
    <section className="w-screen h-screen bg-gaWhite">
      <div className="max-w-5xl w-full mx-auto">
        <div className="w=-full flex flex-col p-4 gap-[20px]">
          <div className="mt-4">
            <TitleText content="Project" className="font-bold" />
          </div>
          <div className="grid grid-cols-2 gap-4 ">
            <ProjectCard
              cardTitle="White Clinic 관리자 페이지"
              cardImage=""
              cardDay="2024.08.16 ~ 진행중"
              cardProject="팀 프로젝트"
              cardContent=""
              cardGitUrlEvent={handleWhiteGit}
            />
            <ProjectCard
              cardTitle="BeChef -밀키트 판매 매장 검색 사이트"
              cardImage=""
              cardDay="2024.06.20 ~ 2024.08.06"
              cardProject="팀 프로젝트"
              cardContent=""
              cardGitUrlEvent={handleBechefGit}
            />
            <ProjectCard
              cardTitle="TodoList"
              cardImage=""
              cardDay="2024.07.01 ~ 2024.07.05"
              cardContent=""
              cardProject="개인 프로젝트"
              cardGitUrlEvent={handleTodoList}
              cardLinkEvent={linkToTodoList}
            />
            <ProjectCard
              cardTitle="출석부 시스템"
              cardImage=""
              cardDay="2024.06.19 ~ 2024.06.28"
              cardContent=""
              cardProject="개인 프로젝트"
              cardGitUrlEvent={handleCheckAttend}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
