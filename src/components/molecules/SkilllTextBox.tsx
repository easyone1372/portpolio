import { ReactNode } from "react";
import NormalText from "../atom/NormalText";
import SkillIcon from "../atom/SkillIcon";

export type SkillTextBoxProps = {
  icon: ReactNode;
  iconColor?: string;
  text: string;
  textColor?: string;
};

const SkillTextBox = ({
  icon,
  iconColor,
  text,
  textColor,
}: SkillTextBoxProps) => {
  return (
    <div className="flex gap-2 item-center rounded-md bg-white w-fit h-fit py-px px-1">
      <div className="mt-1">
        <SkillIcon Icon={icon} IconColor={iconColor} />
      </div>
      <div>
        <NormalText content={text} color={textColor} />
      </div>
    </div>
  );
};

export default SkillTextBox;
