import { InfoItemProps, SectionBoxProps } from "../../type/AboutMeType";
import BoldNormalText from "../atom/BoldNormalText";
import HeadlineText from "../atom/HeadlineText";
import NormalText from "../atom/NormalText";
import ContentSection from "../molecules/aboutme/ContentSection";
import { sectionsBox } from "../molecules/aboutme/data/aboutMeData";
import AboutInfoBox from "../molecules/aboutme/InfoBox";
import Introduction from "../molecules/aboutme/Introduction";
import TitleText from "../molecules/TitleText";

const AboutMeContent = ({ openLink }: { openLink: () => void }) => {
  const infoItems: InfoItemProps[] = [
    { key: "이름", value: "이지원" },
    { key: "전화번호", value: "010-2247-2843" },
    { key: "이메일", value: "easyone1372@gmail.com" },
    {
      key: "깃허브",
      value: "https://github.com/easyone1372",
      onClick: openLink,
    },
  ];

  return (
    <div className="w-full flex flex-col p-4 gap-5">
      <div className="mt-4">
        <TitleText content="About Me" className="font-bold" />
      </div>
      <div className="w-full flex flex-col p-4 gap-3">
        <HeadlineText HContent="배움을 갈구하고 도전정신을 가진 개발자" />
        <Introduction />
        <div className="flex p-4 gap-3">
          <div className="flex flex-col gap-5 w-[400px]">
            <AboutInfoBox items={infoItems} />
          </div>
          <div className="flex flex-col gap-5">
            {sectionsBox.map((section) => (
              <ContentSection
                key={section.title}
                title={section.title}
                items={section.items}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeContent;
