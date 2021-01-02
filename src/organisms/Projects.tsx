import { PageWrapper, PageHeader, Paragraph, Paragraphs } from "../styles";
import { background, secondary } from "../style_variables";
import { Spring } from "react-spring/renderprops";
import { ProjectList } from "../molecules";
import { ReactComponent as ProjectsText } from "../images/projects.svg";
import TrackVisibility from "react-on-screen";
import { useState, useEffect } from "react";
import { fetchProjects } from "../services/api";

const tempText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet felis ac dui scelerisque eleifend. Nunc mi est, aliquet ac justo non, rutrum fringilla lorem. Aenean venenatis augue nec massa laoreet, id varius elit scelerisque. Donec mattis erat quam, vel tristique dui fringilla ac. Aliquam aliquam, elit a placerat suscipit, quam nisl lobortis purus, quis pulvinar lacus diam ut urna. Vivamus vel diam ut ligula tincidunt malesuada. Aliquam odio nibh, pellentesque sed turpis eu, tristique pretium turpis. Aliquam  t rutrum leo, eu mollis arcu.";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getProjects = async () => {
      const projects = await fetchProjects();
      console.log(projects, "returned");
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
            <PageHeader>
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
            </PageHeader>
          )
        }
      </TrackVisibility>
      <Paragraphs>
        <Paragraph>{tempText}</Paragraph>
        <ProjectList projects={projects} />
      </Paragraphs>
    </PageWrapper>
  );
}
