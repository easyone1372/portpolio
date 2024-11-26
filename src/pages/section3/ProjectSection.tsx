import TitleText from "../../components/molecules/TitleText";

type ProjectSectionProps = {
  projectRef: React.RefObject<HTMLDivElement>;
};

const ProjectSection = ({ projectRef }: ProjectSectionProps) => {
  return (
    <div className="w=full flex flex-col p-4 gap-[20px]">
      <div className="mt-4">
        <TitleText content="Project" className="font-bold" />
      </div>
    </div>
  );
};

export default ProjectSection;
