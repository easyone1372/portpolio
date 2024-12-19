type SkillNormalTextProps = {
  className?: string;
  color?: string;
  onTextClick?: () => void;
  content: string;
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
