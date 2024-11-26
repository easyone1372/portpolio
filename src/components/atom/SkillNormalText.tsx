type SkillText = "편해요" | "할 줄 알아요" | "사용해봤어요";

type SkillNormalTextProps = {
  className?: string;
  color?: string;
  onTextClick?: () => void;
  content: SkillText;
};

const SkillNormalText = ({
  className,
  color,
  onTextClick,
  content,
}: SkillNormalTextProps) => {
  return (
    <div className={`${className} ${color}`} onClick={onTextClick}>
      {content}
    </div>
  );
};
export default SkillNormalText;
