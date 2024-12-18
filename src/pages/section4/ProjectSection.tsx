import { useState } from "react";
import ProjectCard from "../../components/molecules/ProjectCard";
import TitleText from "../../components/molecules/TitleText";
import { ProjectList } from "../../utils/ProjectContent";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

type ProjectSectionProps = {
  projectRef: React.RefObject<HTMLDivElement>;
};

const ProjectSection = ({ projectRef }: ProjectSectionProps) => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(ProjectList.length / itemsPerPage);

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(0, prev - 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1));
  };

  const visibleProjects = ProjectList.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <section className="w-screen h-screen bg-gaWhite">
      <div className="max-w-5xl w-full mx-auto">
        <div className="w=-full flex flex-col p-4 gap-5">
          <div className="mt-4">
            <TitleText content="Project" className="font-bold" />
          </div>
          <div className="w-full h-[720px] relative px-2">
            <div className="grid grid-cols-2 gap-4">
              {visibleProjects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>

            {currentPage > 0 && (
              <button
                onClick={handlePrevPage}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 z-10 transition-all"
              >
                <FaChevronLeft size={24} className="text-gray-600" />
              </button>
            )}
            {currentPage < totalPages - 1 &&
              ProjectList.length > itemsPerPage && (
                <button
                  onClick={handleNextPage}
                  className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 z-10 transition-all"
                >
                  <FaChevronRight size={24} className="text-gray-600" />
                </button>
              )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
