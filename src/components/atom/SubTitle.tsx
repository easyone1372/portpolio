type SubTitleProps = {
  content: string;
  color?: string;
  onTextClick?: () => void;
};

const SubTitle = ({
  content,
  color = "text-gray-800",
  onTextClick,
}: SubTitleProps) => {
  return (
    <div
      className={`font-bold text-2xl w-fit text-center ${color}`}
      onClick={onTextClick}
    >
      {content}
    </div>
  );
};

export default SubTitle;
