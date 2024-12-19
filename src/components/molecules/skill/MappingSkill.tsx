import { SkillCardListProps } from "./data/SkillCardList";
import SkillCard from "./SkillCard";

type MappingSkillProps = {
  skills: SkillCardListProps[];
  showDes: boolean;
};

const MappingSkill = ({ skills, showDes }: MappingSkillProps) => {
  return (
    <div className="flex flex-col gap-2">
      {skills.map((skill, index) => (
        <SkillCard
          key={index}
          imgContent={skill.img}
          subTitleContent={skill.subTitle}
          desContent={skill.desText}
          showAllDescription={showDes}
        />
      ))}
    </div>
  );
};

export default MappingSkill;
