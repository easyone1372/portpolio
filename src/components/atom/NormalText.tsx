type NormalTextType = {
  content: string;
  color?: string;
  className?: string;
  onTextClick?: () => void;
};

const NormalText = ({
  content,
  color = "text-gray-800",
  className,
  onTextClick,
}: NormalTextType) => {
  return (
    <div className={`${className} ${color}`} onClick={onTextClick}>
      {content}
    </div>
  );
};

export default NormalText;
