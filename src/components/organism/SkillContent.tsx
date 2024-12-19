import { ableSkills, learnSkills, triedSkills } from "../../utils/SkillContent";
import SkillNormalText from "../atom/SkillNormalText";
import SkillCard from "../molecules/skill/SkillCard";
import SkillContentBox from "../molecules/skill/SkillContentBox";

import SkillList from "../molecules/SkillList";

const SkillContent = () => {
  return (
    <div className="w-full flex flex-col p-4 gap-3">
      {/* <SkillNormalText content="편해요" className="font-bold text-xl" />
      <SkillList skills={ableSkills} />
      <SkillNormalText content="할 줄 알아요" className="font-bold text-xl" />
      <SkillList skills={learnSkills} />
      <SkillNormalText content="사용해봤어요" className="font-bold text-xl" />
      <SkillList skills={triedSkills} /> */}
      {/* <SkillCard
        imgContent="/images/skillImg/html5.png"
        subTitleContent="HTML"
        desContent="웹 표준에 맞춘 개발을 할 수 있습니다 으아아아악 "
      /> */}
      <SkillContentBox />
    </div>
  );
};

export default SkillContent;
