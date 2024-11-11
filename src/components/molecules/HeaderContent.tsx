import NormalText from "../atom/NormalText";

type HeaderContentProps = {
  titleRef: React.RefObject<HTMLDivElement>;
  aboutMeRef: React.RefObject<HTMLDivElement>;
  projectRef: React.RefObject<HTMLDivElement>;
  designRef: React.RefObject<HTMLDivElement>;
  scrollToSection: (ref: React.RefObject<HTMLDivElement>) => void;
};

//헤더 네비게이션바
const HeaderContent = ({
  titleRef,
  aboutMeRef,
  projectRef,
  designRef,
  scrollToSection,
}: HeaderContentProps) => {
  return (
    <header className="w-full fixed top-0 z-10">
      <nav className="max-w-5xl mx-auto p-2 flex justify-end space-x-4">
        <NormalText
          content="Title"
          onTextClick={() => scrollToSection(titleRef)}
          className="hover:text-gray-400 cursor-pointer"
        />
        <NormalText
          className="hover:text-gray-400 cursor-pointer"
          content="AboutMe"
          onTextClick={() => scrollToSection(aboutMeRef)}
        />
        <NormalText
          className="hover:text-gray-400 cursor-pointer"
          content="Project"
          onTextClick={() => scrollToSection(projectRef)}
        />
        <NormalText
          className="hover:text-gray-400 cursor-pointer"
          content="Design"
          onTextClick={() => scrollToSection(designRef)}
        />
      </nav>
    </header>
  );
};

export default HeaderContent;
