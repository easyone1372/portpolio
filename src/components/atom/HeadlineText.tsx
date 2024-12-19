import NormalText from "./NormalText";

// components/HeadlineText.tsx
type HeadlineTextProps = {
  HContent: string;
};

const HeadlineText = ({ HContent }: HeadlineTextProps) => {
  return (
    <div className="relative h-16">
      <div className="absolute top-0 left-0 z-20">
        <NormalText
          content={HContent}
          className="font-bold text-4xl relative"
        />
      </div>
      <div className="absolute top-2 left-2 z-10">
        <NormalText
          content={HContent}
          className="font-bold text-4xl relative drop-shadow-lg"
          color="text-white"
        />
      </div>
    </div>
  );
};

export default HeadlineText;
