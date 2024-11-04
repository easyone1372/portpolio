import NormalText from "../atom/NormalText";

const HeaderContent = () => {
  const handleTitleClick = () => {};
  const handleProjectClick = () => {};
  const handleAboutClick = () => {};
  const handleDesignClick = () => {};
  return (
    <div className="w-screen relative">
      <header className="w-full fixed top-0">
        <nav className="max-w-5xl mx-auto p-2 flex justify-end">
          <div className="flex flex-row gap-3 items-center">
            <NormalText
              content="Title"
              onTextClick={handleTitleClick}
              className="hover:text-gray-400 cursor-pointer"
            />
            <NormalText
              className="hover:text-gray-400 cursor-pointer"
              content="Project"
              onTextClick={handleProjectClick}
            />
            <NormalText
              className="hover:text-gray-400 cursor-pointer"
              content="AboutMe"
              onTextClick={handleAboutClick}
            />
            <NormalText
              className="hover:text-gray-400 cursor-pointer"
              content="Design"
              onTextClick={handleDesignClick}
            />
          </div>
        </nav>
      </header>
    </div>
  );
};

export default HeaderContent;
