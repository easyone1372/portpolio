import SkillTextBox, { SkillTextBoxProps } from "./SkilllTextBox";

type SkillListProps = {
  skills: SkillTextBoxProps[];
};

const SkillList = ({ skills }: SkillListProps) => {
  return (
    <div className="flex flex-wrap gap-1">
      {skills.map((skill, index) => (
        <SkillTextBox
          key={index}
          icon={skill.icon}
          iconColor={skill.iconColor}
          text={skill.text}
          textColor={skill.textColor}
        />
      ))}
    </div>
  );
};

export default SkillList;
