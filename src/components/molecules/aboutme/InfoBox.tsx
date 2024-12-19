import { InfoItemProps } from "../../../type/AboutMeType";
import BoldNormalText from "../../atom/BoldNormalText";
import NormalText from "../../atom/NormalText";

// components/InfoSection.tsx
const AboutInfoBox = ({ items }: { items: InfoItemProps[] }) => {
  return (
    <div className="space-y-2">
      <NormalText content="INFO" className="w-[70px] font-bold pr-px text-xl" />
      {items.map((item) => (
        <BoldNormalText
          key={item.key}
          keyBold={item.key}
          contentNormal={item.value}
          onTextClick={item.onClick}
          bClassName={item.onClick ? "hover:text-gray-400 cursor-pointer" : ""}
        />
      ))}
    </div>
  );
};

export default AboutInfoBox;
