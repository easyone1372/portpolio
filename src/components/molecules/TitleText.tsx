import NormalText from "../atom/NormalText";

//일단 만들긴했는데 사용할지는 모르겠음
type TitleTextType = {
  content: string;
  color?: string;
  className?: string;
};

const TitleText = ({ content, color, className }: TitleTextType) => {
  return (
    <NormalText
      color={color}
      className={`w-fit text-center text-5xl ${className}`}
      content={content}
    />
  );
};

export default TitleText;
