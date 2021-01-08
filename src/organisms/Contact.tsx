import { PageWrapper, ContactHeader } from "../styles";
import { background, secondary, accent } from "../style_variables";
import { Spring } from "react-spring/renderprops";
import { ReactComponent as ContactText } from "../images/contact.svg";
import TrackVisibility from "react-on-screen";
import styled from "styled-components";
import { ReactComponent as BorderSVG } from "../images/borderWhite.svg";

export default function Contact() {
  return (
    <ContactPageWrapper id="contact">
      <TrackVisibility once offset={200} style={{ width: "100%" }}>
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
      </TrackVisibility>
      <ContactInfo>
        <ContactButton href="mailto:contact@cameronthornton.dev">
          <Border />
          <ContactWord>Email</ContactWord>
        </ContactButton>
        <ContactButton href="https://github.com/shubwub">
          <Border />
          <ContactWord>Github</ContactWord>
        </ContactButton>
      </ContactInfo>
    </ContactPageWrapper>
  );
}

export const ContactPageWrapper = styled(PageWrapper)`
  background: ${accent};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: nowrap;
  width: 100vw;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContactWord = styled.span`
  margin: 0;
  z-index: 1;
  font-size: 2rem;
  transition: 0.2s ease-in-out;
  color: white;
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
  margin-bottom: 5px;
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
`;
