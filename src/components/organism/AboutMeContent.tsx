import BoldNormalText from "../atom/BoldNormalText";
import NormalText from "../atom/NormalText";
import TitleText from "../molecules/TitleText";

type AboutMeContentProps = {
  openLink: () => void;
};
const AboutMeContent = ({ openLink }: AboutMeContentProps) => {
  return (
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
          <div className="flex flex-col gap-5 w-[400px]">
            <div className="space-y-2">
              <NormalText content="INFO" className="w-[70px] font-bold pr-px" />
              <BoldNormalText keyBold="이름" contentNormal="이지원" />
              <BoldNormalText
                keyBold="이메일"
                contentNormal="easyone1372@gmail.com"
              />
              <BoldNormalText
                keyBold="깃허브"
                contentNormal="https://github.com/easyone1372"
                onTextClick={openLink}
                bClassName="hover:text-gray-400 cursor-pointer"
              />
            </div>
            <div className="space-y-2">
              <NormalText
                content="EDUCATION"
                className="w-[70px] font-bold pr-px"
              />
              <BoldNormalText
                keyBold="2020"
                contentNormal="서인천고등학교 졸업"
              />
              <BoldNormalText
                keyBold="2024"
                contentNormal="덕성여자대학교 졸업"
              />
            </div>
            <div className="space-y-2">
              <NormalText
                content="CERTIFICATE"
                className="w-[70px] font-bold pr-px"
              />
              <BoldNormalText
                keyBold="2020"
                contentNormal="GTQ그래픽기술자격 1급"
              />
              <BoldNormalText keyBold="2020" contentNormal="GTQ인디자인 1급" />
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="space-y-2">
              <NormalText
                content="ACTIVITE"
                className="w-[70px] font-bold pr-px"
              />
              <BoldNormalText
                keyBold="2023"
                contentNormal=" 2023년 이브와 ICT멘토링 공모전 금상"
              />
              <div className="flex flex-col gap-1">
                <BoldNormalText
                  keyBold="2024-01"
                  contentNormal="머신러닝을 활용한 글쓰기 습관 형성 독서치료 애플리케이션 개발"
                />
                <div className="flex">
                  <div className="w-[87px]" />
                  <div className="w-[405px]">
                    <NormalText
                      className="font-light text-slate-600"
                      content="어플을 통해 사용자의 정서적 상태를 파악하고 글씨체를 분석하여 어플에 대한 흥미를 높여 접속량을 늘리고 자연스럽게 글씨 쓰기 습관을 유도한다. "
                    />
                  </div>
                </div>
                <BoldNormalText keyBold="2024-04" contentNormal="SPRING" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeContent;
