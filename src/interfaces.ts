export interface IBlog {
  title: String;
  description: String;
  date: Date;
  content: String[]
}

export interface ExpandedProps {
  expanded: boolean;
}