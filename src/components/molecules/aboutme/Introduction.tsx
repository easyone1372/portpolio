import NormalText from "../../atom/NormalText";

const Introduction = () => {
  return (
    <div className="flex flex-col gap-1 mt-7">
      <NormalText content="일단 해보겠습니다!" className="font-bold text-lg" />
      <NormalText content="안녕하세요. 프론트엔드 개발자를 꿈꾸는 이지원입니다." />
      <NormalText content="새로운 것을 도전하는 걸 두려워하지 않으며 항상 배우는 태도로 임합니다." />
      <NormalText content="실수를 저지르더라도 같은 실수를 반복하지 않도록 노력합니다." />
      <NormalText content="사용자의 입장에서 생각하려 편리함을 최우선으로 고려하는 개발자가 되고싶습니다." />
    </div>
  );
};

export default Introduction;
