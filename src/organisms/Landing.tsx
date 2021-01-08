import { ReactComponent as Komainu } from "../images/komainu.svg";
import { ReactComponent as Name } from "../images/name.svg";
import { Spring, Transition } from "react-spring/renderprops";
import { NavButton } from "../atoms";
import { background, secondary } from "../style_variables";
import {
  LandingPageWrapper,
  NameContainer,
  NavButtons,
  BackgroundImg,
} from "../styles";

export default function Landing() {
  const locations = [
    ["ABOUT", "私について"],
    ["PROJECTS", "プロジェクト"],
    ["BLOG", "ブログ（英語）"],
    ["CONTACT", "メールアドレス"],
  ];

  return (
    <LandingPageWrapper>
      <NameContainer>
        <Spring
          from={{ fill: background, opacity: 0, stroke: 3 }}
          to={{ fill: secondary, opacity: 1, stroke: 0 }}
          config={{ delay: 2500 }}
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
            config={{ delay: 2500 }}
          >
            {(item) => (props) => <NavButton style={props} location={item} />}
          </Transition>
        </NavButtons>
      </NameContainer>
      <BackgroundImg>
        <Komainu />
      </BackgroundImg>
    </LandingPageWrapper>
  );
}
