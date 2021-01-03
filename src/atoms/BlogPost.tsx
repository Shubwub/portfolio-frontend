import styled from "styled-components";
import { ReactComponent as BorderSVG } from "../images/border.svg";
import { Paragraph } from "../styles";
import { accent } from "../style_variables";
import { useState } from "react";
import { IBlog, ExpandedProps } from "../interfaces";

const parseDate = (date: Date) => {
  const year: number = date.getFullYear();
  let month: string = String(date.getMonth() + 1);
  let day: number | string = date.getDate();

  if (day < 10) day = `0${day}`;
  if (Number(month) < 10) month = `0${month}`;
  return `${day}/${month}/${year}`;
};

export default function Blogpost({ blog }: { blog: IBlog }) {
  const [expanded, toggleExpanded] = useState<boolean>(false);
  return (
    <CardWrapper onClick={() => toggleExpanded(!expanded)}>
      <Border />
      <TopText>
        <Name>{blog.title}</Name>
        <Date>{parseDate(blog.date)}</Date>
      </TopText>
      <Description expanded={expanded}>{blog.description}</Description>
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

const Description = styled(Paragraph)<ExpandedProps>`
  margin: 0;
  z-index: 1;
  font-size: 1.3rem;
  transition: 0.2s ease-in-out;
  :before {
    content: "";
    position: absolute;
    left: 0;
    bottom: -15px;
    transition: 0.2s ease-in-out;
    height: 1px;
    width: 70%;
    border-bottom: 3px solid ${accent};
  }
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
