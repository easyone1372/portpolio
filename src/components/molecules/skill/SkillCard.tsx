import NormalText from "../../atom/NormalText";
import SubTitle from "../../atom/SubTitle";
import { useState } from "react";

type SkillBoxProps = {
  imgContent: string;
  subTitleContent: string;
  desContent?: string;
  showAllDescription: boolean;
};

const SkillCard = ({
  imgContent,
  subTitleContent,
  desContent,
  showAllDescription,
}: SkillBoxProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`border rounded bg-white transition-all duration-500 ease-in-out flex gap-2
          ${
            isHovered || showAllDescription
              ? "h-20 -translate-y-1 min-w-[250px] max-w-md"
              : "h-14 w-60"
          }`}
      >
        <div className="min-w-14 w-14 h-14 p-2 br-px border-gray-800 flex justify-center items-center">
          <img
            className="w-full h-full object-contain"
            src={imgContent}
            alt={subTitleContent}
          />
        </div>
        <div className="flex flex-col gap-1 h-full justify-center py-2 pr-4 overflow-hidden">
          <SubTitle content={subTitleContent} />
          <div
            className={`transition-all duration-500 ${
              isHovered || showAllDescription
                ? "opacity-100 max-w-full"
                : "opacity-0 h-0 max-w-0"
            }`}
          >
            {desContent && <NormalText content={desContent} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
