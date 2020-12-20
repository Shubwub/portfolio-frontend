import styled from "styled-components";
import { ReactComponent as Komainu } from "../images/komainu.svg";
import { ReactComponent as Name } from "../images/name.svg";
import { Spring, Transition } from "react-spring/renderprops";
import { NavButton } from "../atoms";
import { background, secondary, medium } from "../style_variables";

export default function PageOne() {
  const locations = [
    ["ABOUT", "私について"],
    ["PROJECTS", "プロジェクト"],
    ["BLOG", "ブログ（英語）"],
  ];

  return (
    <PageWrapper>
      <NameContainer>
        <Spring
          from={{ fill: background, opacity: 0, stroke: 3 }}
          to={{ fill: secondary, opacity: 1, stroke: 0 }}
          config={{ delay: 4000 }}
        >
          {(props) => (
            <Name
              fill={secondary}
              strokeWidth={`${props.stroke}px`}
              aria-label="CAMERON THORNTON"
              fill-opacity={props.opacity}
              stroke-opacity={1}
            />
          )}
        </Spring>
        <NavButtons>
          <Transition
            items={locations}
            keys={(item) => item[0]}
            from={{ transform: "translate3d(0,-40px,0)", opacity: 0 }}
            enter={{ transform: "translate3d(0,0px,0)", opacity: 1 }}
            config={{ delay: 4000 }}
          >
            {(item) => (props) => <NavButton style={props} location={item} />}
          </Transition>
        </NavButtons>
      </NameContainer>
      <BackgroundImg>
        <Komainu />
      </BackgroundImg>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
  padding: 20px;
  box-sizing: border-box;
  width: 100%;
`;

const BackgroundImg = styled.div`
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

const NameContainer = styled.div`
  width: 80%;
  color: ${secondary};
  display: block;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: ${medium}px) {
    width: 100%;
    z-index: 1;
  }
`;

const NavButtons = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin: 0;
  padding: 0;
  @media (max-width: ${medium}px) {
    flex-direction: column;
  }
`;
