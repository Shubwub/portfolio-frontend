import { PageWrapper, ProjectHeader } from "../styles";
import {
  background,
  secondary,
  accent,
  medium,
  small,
} from "../style_variables";
import { Spring } from "react-spring/renderprops";
import { ReactComponent as ContactText } from "../images/contact.svg";
import TrackVisibility from "react-on-screen";
import styled from "styled-components";
import { ReactComponent as BorderSVG } from "../images/borderWhite.svg";

export default function Contact() {
  return (
    <ContactPageWrapper id="contact">
      <Visibility once offset={200}>
        {({ isVisible }) =>
          isVisible && (
            <ContactHeader>
              <Spring
                from={{ fill: background, opacity: 0, stroke: 3 }}
                to={{ fill: secondary, opacity: 1, stroke: 0 }}
                config={{ delay: 2500 }}
              >
                {(props) => (
                  <ContactText
                    fill={secondary}
                    strokeWidth={`${props.stroke}px`}
                    aria-label="Projects"
                    fill-opacity={props.opacity}
                    stroke-opacity={1}
                  />
                )}
              </Spring>
            </ContactHeader>
          )
        }
      </Visibility>
      <ContactInfo>
        <ContactButton
          href="mailto:contact@cameronthornton.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Border />
          <ContactWord>Email</ContactWord>
          <ContactSub>contact@cameronthornton.dev</ContactSub>
        </ContactButton>
        <ContactButton
          href="https://github.com/shubwub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Border />
          <ContactWord>Github</ContactWord>
          <ContactSub>Shubwub</ContactSub>
        </ContactButton>
      </ContactInfo>
    </ContactPageWrapper>
  );
}

const ContactHeader = styled(ProjectHeader)`
  position: initial;
`;

const Visibility = styled(TrackVisibility)`
  @media (max-width: ${medium}px) {
    align-self: flex-start;
  }
`;

const ContactPageWrapper = styled(PageWrapper)`
  background: ${accent};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100vw;
  @media (max-width: ${medium}px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 50px;
  align-items: center;
  @media (max-width: 1585px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;
  }
`;

const ContactWord = styled.span`
  margin: 0;
  z-index: 1;
  color: white;
  font-size: 5rem;
`;

const ContactSub = styled(ContactWord)`
  font-size: 2rem;
  color: white;
  transition: 0.2s ease-in-out;
  z-index: 1;
  :before {
    content: "";
    position: absolute;
    right: 0;
    bottom: 0px;
    transition: 0.2s ease-in-out;
    height: 1px;
    width: 100%;
    border-bottom: 2px solid white;
  }
`;

const Border = styled(BorderSVG)`
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  .border-stroke-white {
    stroke-dasharray: 3000;
    stroke-dashoffset: 3000;
    stroke-width: "30px";
  }
`;

const ContactButton = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 300px;
  margin: 0 50px;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    > ${Border} {
      .border-stroke-white {
        animation: dash 1s linear forwards;
        @keyframes dash {
          to {
            stroke-dashoffset: 0;
          }
        }
      }
    }
    > ${ContactInfo} {
      :before {
        display: none;
      }
    }
  }
  padding: 5px 10px;
  position: relative;
  @media (max-width: 1585px) {
    margin: 0;
    margin-bottom: 15px;
  }
`;
