export interface IBlog {
  title: string;
  description: string;
  date: Date;
  content: string[]
}

export interface IProject {
  name: string;
  description: string;
  svg: string;
  frontEndRepo?: string;
  backEndRepo?: string;
  generalRepo?: string;
  date: Date
}

export interface ExpandedProps {
  expanded: boolean;
}

export interface IExpandedProps {
  expanded: boolean;
}