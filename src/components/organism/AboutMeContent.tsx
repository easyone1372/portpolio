import BoldNormalText from "../atom/BoldNormalText";
import NormalText from "../atom/NormalText";
import TitleText from "../molecules/TitleText";

type AboutMeContentProps = {
  openLink: () => void;
};
const AboutMeContent = ({ openLink }: AboutMeContentProps) => {
  return (
    <div className="w-full flex flex-col p-4 gap-5">
      <div className="mt-4">
        <TitleText content="About Me" className="font-bold" />
      </div>
      <div className="w-full flex flex-col p-4 gap-3">
        <div className="relative h-16">
          <div className="absolute top-0 left-0 z-20">
            <NormalText
              content="배움을 갈구하고 도전정신을 가진 개발자"
              className="font-bold text-4xl relative"
            />
          </div>
          <div className="absolute top-2 left-2 z-10">
            <NormalText
              content="배움을 갈구하고 도전정신을 가진 개발자"
              className="font-bold text-4xl relative drop-shadow-lg"
              color="text-white"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1 mt-7">
          <NormalText
            content="일단 해보겠습니다!"
            className="font-bold text-lg"
          />
          <NormalText content="안녕하세요. 프론트엔드 개발자를 꿈꾸는 이지원입니다." />
          <NormalText content="새로운 것을 도전하는 걸 두려워하지 않으며 항상 배우는 태도로 임합니다." />
          <NormalText content="실수를 저지르더라도 같은 실수를 반복하지 않도록 노력합니다." />
          <NormalText content="사용자의 입장에서 생각하려 편리함을 최우선으로 고려하는 개발자가 되고싶습니다." />
        </div>
        <div className="flex p-4 gap-3">
          <div className="flex flex-col gap-5 w-[400px]">
            <div className="space-y-2">
              <NormalText
                content="INFO"
                className="w-[70px] font-bold pr-px text-xl"
              />
              <BoldNormalText keyBold="이름" contentNormal="이지원" />
              <BoldNormalText
                keyBold="전화번호"
                contentNormal="010-2247-2843"
              />
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
          </div>
          <div className="flex flex-col gap-5">
            <div className="space-y-2">
              <NormalText
                content="EDUCATION"
                className="w-[70px] font-bold pr-px text-xl"
              />
              <BoldNormalText
                keyBold="2024"
                contentNormal="덕성여자대학교 IT미디어공학 졸업"
              />
            </div>
            <div className="space-y-2">
              <NormalText
                content="CERTIFICATE"
                className="w-[70px] font-bold pr-px text-xl"
              />
              <BoldNormalText
                keyBold="2020"
                contentNormal="GTQ그래픽기술자격 1급"
              />
              <BoldNormalText keyBold="2020" contentNormal="GTQ인디자인 1급" />
            </div>
            <div className="space-y-2">
              <NormalText
                content="ACTIVITE"
                className="w-[70px] font-bold pr-px text-xl"
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
                <BoldNormalText
                  keyBold="2024-04"
                  contentNormal="자바 기반 spring 응용 sw개발자 양성과정"
                />
                <div className="flex">
                  <div className="w-[87px]" />
                  <div className="w-[405px]">
                    <NormalText
                      className="font-light text-slate-600"
                      content="국비수업 - react, spring boot 등의 활용 방법을 배움"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeContent;
