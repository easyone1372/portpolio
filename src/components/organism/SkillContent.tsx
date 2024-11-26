import SkillNormalText from "../atom/SkillNormalText";

import SkillList from "../molecules/SkillList";
import { ableSkills, learnSkills, triedSkills } from "../../utils/SkillContent";

const SkillContent = () => {
  return (
    <div className="w-full flex flex-col p-4 gap-3">
      <SkillNormalText content="편해요" className="font-bold text-xl" />
      <SkillList skills={ableSkills} />
      <SkillNormalText content="할 줄 알아요" className="font-bold text-xl" />
      <SkillList skills={learnSkills} />
      <SkillNormalText content="사용해봤어요" className="font-bold text-xl" />
      <SkillList skills={triedSkills} />
    </div>
  );
};

export default SkillContent;
