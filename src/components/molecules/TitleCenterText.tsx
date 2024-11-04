import NormalText from "../atom/NormalText";

const TitleCenterText = () => {
  return (
    <div className="w-full h-screen flex flex-col gap-3 justify-center items-center text-5xl">
      <div className="flex gap-1">
        <NormalText
          color="text-white"
          className="w-fit text-center bg-gray-800"
          content="FRONTEND"
        />
        <NormalText className="w-fit text-center" content="DEVELOPER" />
      </div>

      <div className="flex gap-1">
        <NormalText
          color="text-white"
          className="w-fit text-center bg-gray-800"
          content="이지원"
        />

        <NormalText className="w-fit text-center" content="입니다." />
      </div>
    </div>
  );
};

export default TitleCenterText;
