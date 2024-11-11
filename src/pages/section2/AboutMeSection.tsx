import BoldNormalText from "../../components/atom/BoldNormalText";
import NormalText from "../../components/atom/NormalText";
import TitleText from "../../components/molecules/TitleText";

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
        <div className="w=full flex flex-col p-4 gap-[20px]">
          <div className="mt-4">
            <TitleText content="About Me" className="font-bold" />
          </div>
          <div className="w-full flex flex-col p-4 gap-3">
            <NormalText
              content="배움을 갈구하고 도전정신을 가진 개발자"
              className="font-semibold text-2xl"
            />
            <div className="flex p-4 gap-3">
              <div className="w-[350px] overflow-y-scroll">
                <NormalText content="자기소개 내용" />
              </div>
              <div className="space-y-2">
                <BoldNormalText keyBold="이름" contentNormal="이지원" />
                <BoldNormalText
                  keyBold="이메일"
                  contentNormal="easyone1372@gmail.com"
                />
                <BoldNormalText
                  keyBold="깃허브"
                  contentNormal="https://github.com/easyone1372"
                  onTextClick={handleGithub}
                  bClassName="hover:text-gray-400 cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col p-4 gap-[20px]">
          <div className="mt-4">
            <TitleText content="Skills" className="font-bold" />
          </div>
          <div className="w-full flex flex-col p-4 gap-3"></div>
        </div>
      </div>
    </section>
  );
};
export default AboutMeSection;
