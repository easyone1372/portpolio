import AboutMeContent from "../../components/organism/AboutMeContent";

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
      </div>
    </section>
  );
};
export default AboutMeSection;
