export type InfoItemProps = {
  key: string;
  value: string;
  onClick?: () => void;
};

export type SectionItemProps = {
  year: string;
  content: string;
  description?: string;
};

export type SectionBoxProps = {
  title: string;
  items: SectionItemProps[];
};
