import React, { useRef } from "react";

import HeaderContent from "./components/molecules/HeaderContent";
import TitleSection from "./pages/section1/TitleSection";
import AboutMeSection from "./pages/section2/AboutMeSection";
import ProjectSection from "./pages/section4/ProjectSection";
import SkillSection from "./pages/section3/SkillSection";

function App() {
  const titleRef = useRef<HTMLDivElement>(null);
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const skillRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="App">
      <HeaderContent
        titleRef={titleRef}
        aboutMeRef={aboutMeRef}
        projectRef={projectRef}
        skillRef={skillRef}
        scrollToSection={scrollToSection}
      />
      <div className="h-screen snap-y snap-mandatory overflow-y-scroll">
        <div ref={titleRef} className="snap-start h-screen">
          <TitleSection titleRef={titleRef} aboutMeRef={aboutMeRef} />
        </div>
        <div ref={aboutMeRef} className="snap-start h-screen">
          <AboutMeSection aboutMeRef={aboutMeRef} />
        </div>
        <div ref={skillRef} className="snap-start h-screen">
          <SkillSection skillRef={skillRef} />
        </div>
        <div ref={projectRef} className="snap-start h-screen">
          <ProjectSection projectRef={projectRef} />
        </div>
      </div>
    </div>
  );
}

export default App;
