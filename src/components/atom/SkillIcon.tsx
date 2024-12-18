import React, { ReactNode } from "react";

type SkillIconProps = {
  Icon: ReactNode | string;
  IconColor?: string;
};

const SkillIcon = ({ Icon, IconColor }: SkillIconProps) => {
  if (React.isValidElement(Icon)) {
    return <div className={`w-5 h-5 ${IconColor}`}>{Icon}</div>;
  }

  // Icon이 문자열(이미지 경로)인 경우
  return (
    <div className={`w-5 h-5 ${IconColor}`}>
      <img
        src={Icon as string}
        alt="skill icon"
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default SkillIcon;
