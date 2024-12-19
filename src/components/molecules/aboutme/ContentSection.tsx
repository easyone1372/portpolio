import { SectionBoxProps } from "../../../type/AboutMeType";
import BoldNormalText from "../../atom/BoldNormalText";
import NormalText from "../../atom/NormalText";

// components/ContentSection.tsx
const ContentSection = ({ title, items }: SectionBoxProps) => {
  return (
    <div className="space-y-2">
      <NormalText
        content={title}
        className="w-[70px] font-bold pr-px text-xl"
      />
      {items.map((item) => (
        <div key={item.year} className="flex flex-col gap-1">
          <BoldNormalText keyBold={item.year} contentNormal={item.content} />
          {item.description && (
            <div className="flex">
              <div className="w-[87px]" />
              <div className="w-[405px]">
                <NormalText
                  className="font-light text-slate-600"
                  content={item.description}
                />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ContentSection;
