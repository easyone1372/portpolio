import { useState } from "react";
import SkillNormalText from "../../atom/SkillNormalText";
import MappingSkill from "./MappingSkill";
import {
  BackEndList,
  cooperationList,
  FrameWorkTool,
  FrontEndSkill,
  LanguageSkill,
} from "./data/SkillCardList";

const SkillContentBox = () => {
  const [showAllDescriptions, setShowAllDescriptions] = useState(false);

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="w-full left-0">
        <button
          onClick={() => setShowAllDescriptions(!showAllDescriptions)}
          className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded transition-colors duration-300 text-sm"
        >
          {showAllDescriptions ? "간단히 보기" : "모두 보기"}
        </button>
      </div>
      <div className="flex gap-4 w-full justify-between">
        <div>
          <SkillNormalText content="Frontend" className="font-bold text-xl" />
          <div className="flex flex-wrap gap-1">
            <MappingSkill
              showDes={showAllDescriptions}
              skills={FrontEndSkill}
            />
          </div>
        </div>
        <div>
          <SkillNormalText
            content="Framwork/Tools"
            className="font-bold text-xl"
          />
          <div className="flex flex-wrap gap-1">
            <MappingSkill
              showDes={showAllDescriptions}
              skills={FrameWorkTool}
            />
          </div>
        </div>
        <div>
          <SkillNormalText content="Language" className="font-bold text-xl" />
          <div className="flex flex-wrap gap-1">
            <MappingSkill
              showDes={showAllDescriptions}
              skills={LanguageSkill}
            />
          </div>
        </div>
      </div>
      <div className="flex gap-4 w-full ">
        <div>
          <SkillNormalText content="BackEnd" className="font-bold text-xl" />
          <div className="flex flex-wrap gap-1">
            <MappingSkill showDes={showAllDescriptions} skills={BackEndList} />
          </div>
        </div>
        <div>
          <SkillNormalText
            content="Cooperation"
            className="font-bold text-xl"
          />
          <div className="flex flex-wrap gap-1">
            <MappingSkill
              showDes={showAllDescriptions}
              skills={cooperationList}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillContentBox;
