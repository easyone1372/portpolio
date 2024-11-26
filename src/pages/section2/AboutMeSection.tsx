import BoldNormalText from "../../components/atom/BoldNormalText";
import NormalText from "../../components/atom/NormalText";
import TitleText from "../../components/molecules/TitleText";
import AboutMeContent from "../../components/organism/AboutMeContent";
import SkillContent from "../../components/organism/SkillContent";

type AboutMeSectionProps = {
  aboutMeRef: React.RefObject<HTMLDivElement>;
};
const AboutMeSection = ({ aboutMeRef }: AboutMeSectionProps) => {
  const handleGithub = () => {
    return window.open("https://github.com/easyone1372");
  };
  return (
    <section className="w-screen h-screen bg-orange-50">
      <div className="max-w-5xl w-full mx-auto">
        <AboutMeContent openLink={handleGithub} />
        <div className="w-full flex flex-col p-4 gap-[20px]">
          <div className="mt-4">
            <TitleText content="Skills" className="font-bold" />
          </div>
          <SkillContent />
        </div>
      </div>
    </section>
  );
};
export default AboutMeSection;
