import ScrollDownAni from "../../components/molecules/ScrollDownAni";
import TitleCenterText from "../../components/molecules/TitleCenterText";

type TitleSectionProps = {
  titleRef: React.RefObject<HTMLDivElement>;
  aboutMeRef: React.RefObject<HTMLDivElement>;
};

const TitleSection = ({ aboutMeRef }: TitleSectionProps) => {
  const scrollToAboutMe = () => {
    if (aboutMeRef.current) {
      aboutMeRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-screen h-screen bg-orange-50">
      <div className="max-w-5xl w-full mx-auto">
        <TitleCenterText />
        <ScrollDownAni onClick={scrollToAboutMe} />
      </div>
    </div>
  );
};

export default TitleSection;
