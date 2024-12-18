import TitleText from "../../components/molecules/TitleText";
import SkillContent from "../../components/organism/SkillContent";

type SkillSectionProps = {
  skillRef: React.RefObject<HTMLDivElement>;
};

const SkillSection = ({ skillRef }: SkillSectionProps) => {
  return (
    <section className="w-screen h-screen bg-amber-50">
      <div className="max-w-5xl w-full mx-auto">
        <div className="w-full flex flex-col p-4 gap-5">
          <div className="mt-4">
            <TitleText content="Skills" className="font-bold" />
          </div>
          <SkillContent />
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
