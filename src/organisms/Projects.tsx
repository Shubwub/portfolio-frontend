import { PageWrapper, PageHeader, Paragraph, Paragraphs } from "../styles";
import { background, secondary } from "../style_variables";
import { Spring } from "react-spring/renderprops";
import { BackgroundImage, ProjectList } from "../molecules";
import { ReactComponent as ProjectsText } from "../images/projects.svg";
import TrackVisibility from "react-on-screen";
import { useState } from "react";

const tempText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet felis ac dui scelerisque eleifend. Nunc mi est, aliquet ac justo non, rutrum fringilla lorem. Aenean venenatis augue nec massa laoreet, id varius elit scelerisque. Donec mattis erat quam, vel tristique dui fringilla ac. Aliquam aliquam, elit a placerat suscipit, quam nisl lobortis purus, quis pulvinar lacus diam ut urna. Vivamus vel diam ut ligula tincidunt malesuada. Aliquam odio nibh, pellentesque sed turpis eu, tristique pretium turpis. Aliquam  t rutrum leo, eu mollis arcu.";

const MasqueSVG =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 162.65 193.98"><defs><style>.cls-1{fill:none;stroke:#ce2525;stroke-linecap:round;stroke-linejoin:round;stroke-width:3px;}</style></defs><g id="Layer_2" data-name="Layer 2"><path class="cls-1" d="M232.19,109.73l0,.08,0-.08s-67.55-18.28-95.65,18.64c-12.88,35.27-13.95,46.18-18,68.27,10.51-31,17.67-50.84,30-63.1,10-10.78,54.89-15.82,61.25-10.33-8.05,34-16.47,66.92-16.47,66.92l-.3.61.1-.19-2.58,5.32.9-1.86-1.66,3.42-.63,1.32-.14.27.1-.19-.13.26,0-.07-.48,1-.11.22-.52,1.06.08-.15-.16.32.08-.17c-.14.3-.28.6-.42.88l.19-.4-.44.91.25-.51-.83,1.71.34-.69-.43.88.09-.19-.15.31-.26.54-.53,1.09-.15.3-.19.4-.11.23h0v0h0l-42.78,88.31s60.89,18.36,134.48-98.79C287.19,150.2,232.19,109.73,232.19,109.73Zm-42,86.62-.48,1C189.91,197,190.07,196.7,190.23,196.35Zm-4.32,8.94-.26.53ZM223.77,226c-22-10.65-36.35-8.34-36.35-8.34s16.43-25.8,37.63-15.54,38.54,6.09,38.54,6.09S245.76,236.67,223.77,226Z" transform="translate(-117.01 -103.7)"/></g></svg>';

export default function Projects() {
  const [projects, setProjects] = useState([
    {
      name: "Masque",
      description: tempText,
      frontendRepo: "address.com",
      backendRepo: "address.com",
      generalRepo: null,
      date: new Date(),
      image: MasqueSVG,
    },
    {
      name: "Masque",
      description: tempText,
      frontendRepo: "address.com",
      backendRepo: "address.com",
      generalRepo: null,
      date: new Date(),
      image: MasqueSVG,
    },
    {
      name: "Masque",
      description: tempText,
      frontendRepo: "address.com",
      backendRepo: "address.com",
      generalRepo: null,
      date: new Date(),
      image: MasqueSVG,
    },
    {
      name: "Masque",
      description: tempText,
      frontendRepo: "address.com",
      backendRepo: "address.com",
      generalRepo: null,
      date: new Date(),
      image: MasqueSVG,
    },
    {
      name: "Masque",
      description: tempText,
      frontendRepo: "address.com",
      backendRepo: "address.com",
      generalRepo: null,
      date: new Date(),
      image: MasqueSVG,
    },
    {
      name: "Masque",
      description: tempText,
      frontendRepo: "address.com",
      backendRepo: "address.com",
      generalRepo: null,
      date: new Date(),
      image: MasqueSVG,
    },
  ]);

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
