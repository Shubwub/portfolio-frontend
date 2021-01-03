import styled from "styled-components";
import { ReactComponent as BorderSVG } from "../images/border.svg";
import { ReactComponent as ProjectBorderDi } from "../images/project_border_diamond.svg";
import { ReactComponent as ProjectBorderSq } from "../images/project_border_square.svg";
import { ReactComponent as GithubIcon } from "../images/github.svg";
import { Paragraph } from "../styles";
import { accent, background } from "../style_variables";
import { useState } from "react";
import InlineSVG from "svg-inline-react";
import TrackVisibility from "react-on-screen";
import { useTransition, animated } from "react-spring";
import { IExpandedProps } from "../interfaces";

const parseDate = (date: Date): string => {
  const year: number = date.getFullYear();
  let month: string = String(date.getMonth() + 1);
  let day: number | string = date.getDate();

  if (day < 10) day = `0${day}`;
  if (Number(month) < 10) month = `0${month}`;
  return `${day}/${month}/${year}`;
};

export default function ProjectCard({ project }: { project: any }) {
  const [expanded, toggleExpanded] = useState<boolean>(false);
  const transitions = useTransition(expanded, null, {
    from: { height: "0px" },
    enter: { height: "75px" },
    leave: { height: "0px" },
    config: { duration: 200 },
  });
  return (
    <CardWrapper onClick={() => toggleExpanded(!expanded)}>
      <Border />
      <ProjectImage>
        <TrackVisibility once offset={200} style={{ width: "100%" }}>
          {({ isVisible }) =>
            isVisible && (
              <>
                <ProjectBorderDiamond />
                <ProjectBorderSquare />
                <ProjectSVG src={project.svg.replace(/cls-1/gi, "stroke")} />
              </>
            )
          }
        </TrackVisibility>
      </ProjectImage>
      <TopText>
        <Name>{project.name}</Name>
        <Date>{parseDate(project.date)}</Date>
      </TopText>
      <Description expanded={expanded}>{project.description}</Description>
      {transitions.map(
        ({ item, key, props }) =>
          item && (
            <Repos style={props}>
              <RepoIcon>
                FrontEnd
                <GithubIcon />
              </RepoIcon>
              <RepoIcon>
                API
                <GithubIcon />
              </RepoIcon>
              <RepoIcon>
                Repository
                <GithubIcon />
              </RepoIcon>
            </Repos>
          )
      )}
    </CardWrapper>
  );
}

const Name = styled.h3`
  margin: 0;
  z-index: 1;
  font-size: 4rem;
  line-height: 4rem;
  text-transform: uppercase;
`;

const Date = styled(Name)`
  font-size: 1.2rem;
  line-height: 1.2rem;
`;

const Repos = styled(animated.div)`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: nowrap;
  width: 100%;
  overflow: hidden;
`;

const RepoIcon = styled.a`
  width: 25%;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
  padding: 5px;
  z-index: 1;
  transition: 0.2s ease-in-out;
  border: 1px solid ${background};
  &:hover {
    border: 1px solid ${accent};
    border-radius: 5px;
    transition: 0.2s ease-in-out;
  }
`;

const Description = styled(Paragraph)<IExpandedProps>`
  margin: 0;
  z-index: 1;
  font-size: 1.3rem;
  transition: 0.2s ease-in-out;
  :before {
    content: "";
    position: absolute;
    left: 0;
    bottom: ${(props) => (props.expanded ? "-85px" : "-15px")};
    transition: 0.2s ease-in-out;
    height: 1px;
    width: 70%;
    border-bottom: 3px solid ${accent};
  }
`;

const ProjectImage = styled.div`
  transition: 0.2s ease-in-out;
  width: 150px;
  height: 150px;
  position: relative;
`;

const ProjectBorderDiamond = styled(ProjectBorderDi)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  transition: 0.2s ease-in-out;
`;

const ProjectBorderSquare = styled(ProjectBorderSq)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 79%;
`;

const ProjectSVG = styled(InlineSVG)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 45%;
`;

const TopText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  margin-top: -30px;
`;

const Border = styled(BorderSVG)`
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  .border-stroke {
    stroke-dasharray: 3000;
    stroke-dashoffset: 3000;
    stroke-width: "3px";
  }
`;

const CardWrapper = styled.div`
  width: 350px;
  margin: 50px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  &:hover {
    > ${ProjectImage} {
      transform: scale(1.2);
      z-index: 0;
      transition: 0.2s ease-in-out;
      ${ProjectBorderDiamond} {
        transform: rotate(45deg);
        transition: 0.2s ease-in-out;
      }
    }
    > ${Border} {
      .border-stroke {
        animation: dash 1s linear forwards;
        @keyframes dash {
          to {
            stroke-dashoffset: 0;
          }
        }
      }
    }
    > ${Description} {
      :before {
        display: none;
      }
    }
  }
  padding: 15px;
  padding-top: 20px;
  position: relative;
`;
