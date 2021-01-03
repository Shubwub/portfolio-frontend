import styled from "styled-components";
import { ProjectCard } from "../atoms";
import { IProject } from "../interfaces";

export default function ProjectList({ projects }: { projects: IProject[] }) {
  return (
    <List>
      {projects.map((project: IProject) => (
        <ProjectCard project={project} />
      ))}
    </List>
  );
}

const List = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
`;
