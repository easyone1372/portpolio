import {
  FaReact,
  FaHtml5,
  FaJs,
  FaPython,
  FaJava,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  SiTypescript,
  SiMysql,
  SiNextdotjs,
  SiAndroidstudio,
  SiFlutter,
  SiNotion,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";

export const ableSkills = [
  { icon: <FaReact />, text: "React", iconColor: "text-react" },
  { icon: <FaHtml5 />, text: "HTML", iconColor: "text-html" },
  { icon: <IoLogoCss3 />, text: "CSS", iconColor: "text-css" },
  { icon: <FaJs />, text: "JavaScript", iconColor: "text-js" },
  { icon: <SiTypescript />, text: "TypeScript", iconColor: "text-js" },
  {
    icon: <RiTailwindCssFill />,
    text: "TailWindCSS",
    iconColor: "text-sky-400",
  },
  { icon: <SiNotion />, text: "Notion" },
];
export const learnSkills = [
  { icon: <SiMysql />, text: "MySQL", iconColor: "text-js" },
  { icon: <SiNextdotjs />, text: "Next.Js" },
  { icon: <FaPython />, text: "Python", iconColor: "text-blue-500" },
  {
    icon: <SiAndroidstudio />,
    text: "Android Studio(Java)",
    iconColor: "text-blue-600",
  },
  { icon: <FaGitAlt />, text: "Git", iconColor: "text-red-600" },
  { icon: <SiAdobexd />, text: "Xd", iconColor: "text-xd" },
  { icon: <SiAdobephotoshop />, text: "PhotoShop", iconColor: "text-ps" },
];
export const triedSkills = [
  { icon: "../../style/pngegg.png", text: "C" },
  { icon: <FaJava />, text: "Java", iconColor: "text-orange-500" },
  { icon: <SiFlutter />, text: "Flutter", iconColor: "text-sky-400" },
  { icon: <FaFigma />, text: "Figma" },
];
