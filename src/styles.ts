import { secondary, medium, text, accent } from "./style_variables";
import styled from "styled-components";

export const LandingPageWrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
  padding: 20px;
  box-sizing: border-box;
  width: 100%;
  max-width: 1920px;
`;

export const BackgroundImg = styled.div`
  width: 38%;
  position: absolute;
  right: 20px;
  pointer-events: none;
  @media (max-width: ${medium}px) {
    width: 80%;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    z-index: 0;
  }
`;

export const NameContainer = styled.div`
  width: 80%;
  color: ${secondary};
  display: block;
  @media (max-width: ${medium}px) {
    width: 100%;
    z-index: 1;
  }
`;

export const NavButtons = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin: 0;
  padding: 0;
  @media (max-width: ${medium}px) {
    flex-direction: column;
  }
`;

export const PageHeader = styled(NameContainer)`
  position: absolute;
  z-index: 0;
  width: 400px;
  height: 200px;
  svg {
    width: 100%;
    height: 100%;
  }
`

export const ProjectHeader = styled(PageHeader)`
  width: 600px;
  height: 200px;
`

export const PageWrapper = styled(LandingPageWrapper)`
  height: auto;
`

export const Paragraph = styled.p`
  font-size: 2rem;
  max-width: 1200px;
  text-align: justify;
  z-index: 1;
  color: ${text};
  position: relative;
  :before {
    content : "";
    position: absolute;
    left    : 0;
    bottom  : 0;
    height  : 1px;
    width   : 70%;
    border-bottom: 3px solid ${accent};
  }
  a {
    display: block;
    border: 2px solid ${accent};
    border-radius: 5px;
    padding: 5px 10px;
    color: ${accent};
    width: 270px;
    text-align: center;
    margin-bottom: 10px;
    transition: 0.3s ease-in-out;
    :hover {
      background: ${accent};
      transition: 0.3s ease-in-out;
      color: white;
    }
  }
`

export const Paragraphs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 80px 50px 0px 50px;
  width: 100%;
  p:nth-child(2n) {
    align-self: flex-end;
  }
  @media (max-width: ${medium}px) {
    margin: 80px 0px 0px 0px;
  }
`

export const ParagraphBackgroundImg = styled(BackgroundImg)`
  opacity: 40%;
  width: 80%;
  margin: auto;
  top: 50%; left: 50%;
  transform: translate(-50%,-50%);
  z-index: 0;
`;