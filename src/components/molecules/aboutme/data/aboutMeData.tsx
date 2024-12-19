import { SectionBoxProps } from "../../../../type/AboutMeType";

export const sectionsBox: SectionBoxProps[] = [
  {
    title: "EDUCATION",
    items: [{ year: "2024", content: "덕성여자대학교 IT미디어공학 졸업" }],
  },
  {
    title: "CERTIFICATE",
    items: [
      { year: "2020", content: "GTQ그래픽기술자격 1급" },
      { year: "2020", content: "GTQ인디자인 1급" },
    ],
  },
  {
    title: "ACTIVITE",
    items: [
      { year: "2023", content: "2023년 이브와 ICT멘토링 공모전 금상" },
      {
        year: "2024-01",
        content:
          "머신러닝을 활용한 글쓰기 습관 형성 독서치료 애플리케이션 개발",
        description:
          "어플을 통해 사용자의 정서적 상태를 파악하고 글씨체를 분석하여 어플에 대한 흥미를 높여 접속량을 늘리고 자연스럽게 글씨 쓰기 습관을 유도한다.",
      },
      {
        year: "2024-04",
        content: "자바 기반 spring 응용 sw개발자 양성과정",
      },
    ],
  },
];
