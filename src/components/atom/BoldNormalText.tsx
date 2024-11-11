import NormalText from "./NormalText";

type BoldNormalTextProps = {
  keyBold: string;
  contentNormal: string;
  onTextClick?: () => void;
  bClassName?: string;
};

const BoldNormalText = ({
  keyBold,
  contentNormal,
  onTextClick,
  bClassName,
}: BoldNormalTextProps) => {
  return (
    <div className="flex gap-2">
      <NormalText
        content={keyBold}
        className="w-[70px] border-r-4 border-gray-800 font-semibold pr-px"
      />
      <NormalText
        content={contentNormal}
        onTextClick={onTextClick}
        className={bClassName}
      />
    </div>
  );
};

export default BoldNormalText;
