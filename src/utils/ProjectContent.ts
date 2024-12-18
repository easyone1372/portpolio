import { ProjectCardProps } from "../components/molecules/ProjectCard";

export const ProjectList: ProjectCardProps[] = [
  {
    cardTitle: "White Clinic 관리자 페이지",
    cardImage: "/images/whiteclinic.png",
    cardDay: "2024.08 ~ 진행중",
    cardProject: "팀 프로젝트",
    cardContent: "",
    cardGitUrlEvent: () =>
      window.open("https://github.com/easyone1372/whtieclinic.git"),
  },
  {
    cardTitle: "소서특필",
    cardImage: "/images/splashview.png",
    cardDay: "2023.01 ~ 2023.11",
    cardProject: "팀 프로젝트",
    cardContent:
      "졸업작품으로 제작한 안드로이드 어플입니다. 사용자의 글씨체를 분석한 뒤 빅데이터에 기반하여 사용자의 특성을 보여주고 작성한 글씨체는 타인과 공유할 수 있습니다.",
    cardGitUrlEvent: () =>
      window.open("https://github.com/easyone1372/finalBechefFront.git"),
  },
  {
    cardTitle: "BeChef -밀키트 판매 매장 검색 사이트",
    cardImage: "/images/bechef.png",
    cardDay: "2024.06.20 ~ 2024.08.06",
    cardProject: "팀 프로젝트",
    cardContent:
      "사용자가 주변 밀키트 판매점의 위치와 재고를 실시간으로 확인가능한 웹사이트입니다. 개인의 경험을 리뷰와 찜 기능으로 기록, 공유 할 수 있습니다.",
    cardGitUrlEvent: () =>
      window.open("https://github.com/easyone1372/finalBechefFront.git"),
  },
  {
    cardTitle: "출석부 시스템",
    cardImage: "/images/attendCheck.png",
    cardDay: "2024.06.19 ~ 2024.06.28",
    cardContent: "",
    cardProject: "팀 프로젝트",
    cardGitUrlEvent: () =>
      window.open("https://github.com/easyone1372/checkAttend.git"),
  },
  {
    cardTitle: "TodoList",
    cardImage: "/images/todolist.png",
    cardDay: "2024.06.03 ~ 2024.06.05",
    cardContent: "",
    cardProject: "개인 프로젝트",
    cardGitUrlEvent: () =>
      window.open("https://github.com/easyone1372/WIP_todolist.git"),
    cardLinkEvent: () =>
      window.open("https://easyone1372.github.io/WIP_todolist/"),
  },
  {
    cardTitle: "FirFin - 퍼핀 화면 구성",
    cardImage: "/images/firfin.png",
    cardDay: "2024.05.01~2024.05.03",
    cardContent:
      "FirFin 사이트 화면을 따라 만들었습니다. HTML과 CSS를 사용하여 제작한 첫 퍼블리싱 페이지입니다. ",
    cardProject: "개인 프로젝트",
    cardGitUrlEvent: () =>
      window.open("https://github.com/easyone1372/firfin.git"),
    cardLinkEvent: () => window.open("https://easyone1372.github.io/firfin/"),
  },
];
