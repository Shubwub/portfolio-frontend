import { PageWrapper, ProjectHeader, Paragraph, Paragraphs } from "../styles";
import { background, secondary } from "../style_variables";
import { Spring } from "react-spring/renderprops";
import { ProjectList } from "../molecules";
import { ReactComponent as ProjectsText } from "../images/projects.svg";
import TrackVisibility from "react-on-screen";
import { useState, useEffect } from "react";
import { fetchProjects } from "../services/api";
import { IProject } from "../interfaces";

export default function Projects() {
  const [projects, setProjects] = useState<IProject[]>([]);

  useEffect(() => {
    const getProjects = async () => {
      const projects: IProject[] = await fetchProjects();
      setProjects(
        projects.map((project: any) => {
          return { ...project, date: new Date(project.date) };
        })
      );
    };
    getProjects();
  });

  return (
    <PageWrapper id="projects">
      <TrackVisibility once style={{ width: "100%" }}>
        {({ isVisible }) =>
          isVisible && (
            <ProjectHeader>
              <Spring
                from={{ fill: background, opacity: 0, stroke: 3 }}
                to={{ fill: secondary, opacity: 1, stroke: 0 }}
                config={{ delay: 2500 }}
              >
                {(props) => (
                  <ProjectsText
                    fill={secondary}
                    strokeWidth={`${props.stroke}px`}
                    aria-label="Projects"
                    fill-opacity={props.opacity}
                    stroke-opacity={1}
                  />
                )}
              </Spring>
            </ProjectHeader>
          )
        }
      </TrackVisibility>
      <Paragraphs>
        <Paragraph>
          In this section is a list of personal projects I've worked on that I
          feel are worth making note of. Each project here is pulled from an
          externally hosted MongoDB database and fetched with a bespoke API
          written in Node.JS. The projects listed here are all completed either
          as part of my university education, or were built in my free time. For
          more information on a project - each can be expanded to show links to
          associated GitHub repositories.
        </Paragraph>
        <ProjectList projects={projects} />
      </Paragraphs>
    </PageWrapper>
  );
}
