import {
  PageWrapper,
  PageHeader,
  Paragraph,
  Paragraphs,
} from "../styles";
import { background, secondary } from "../style_variables";
import { Spring } from "react-spring/renderprops";
import { ReactComponent as AboutText } from "../images/about.svg";
import TrackVisibility from "react-on-screen";
import { BackgroundImage } from "../molecules";
import { ReactComponent as Raifuu } from "../images/raifuu.svg";

export default function About() {
  return (
    <PageWrapper id="about">
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
                  <AboutText
                    fill={secondary}
                    strokeWidth={`${props.stroke}px`}
                    aria-label="ABOUT"
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
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit
          amet felis ac dui scelerisque eleifend. Nunc mi est, aliquet ac justo
          non, rutrum fringilla lorem. Aenean venenatis augue nec massa laoreet,
          id varius elit scelerisque. Donec mattis erat quam, vel tristique dui
          fringilla ac. Aliquam aliquam, elit a placerat suscipit, quam nisl
          lobortis purus, quis pulvinar lacus diam ut urna. Vivamus vel diam ut
          ligula tincidunt malesuada. Aliquam odio nibh, pellentesque sed turpis
          eu, tristique pretium turpis. Aliquam at rutrum leo, eu mollis arcu.
        </Paragraph>
        <Paragraph>
          Curabitur sollicitudin dui non neque volutpat pulvinar. Vestibulum a
          rhoncus lectus. Aliquam purus est, sagittis eu leo non, eleifend
          pulvinar mi. Sed eget tincidunt lectus. Sed at mi mi. Aliquam vitae
          purus nisi. Vivamus varius, urna eget ullamcorper dapibus, leo nulla
          cursus enim, vel dictum augue ligula in nunc. Duis eleifend rutrum
          luctus. Sed quis gravida dui. Etiam quis vulputate mauris.
          Pellentesque ac ante pretium, aliquam diam sed, feugiat lectus. Donec
          vitae tempus orci, at rutrum felis. Phasellus fringilla consectetur
          justo, in semper lacus malesuada vitae. Nam sit amet nunc sed dolor
          mollis blandit. Maecenas sed sapien tincidunt, condimentum orci vel,
          ullamcorper felis.
        </Paragraph>
        <Paragraph>
          Mauris nec pellentesque nunc. Maecenas feugiat nisi lorem, et egestas
          metus rutrum pharetra. Maecenas mattis nec lectus imperdiet ultricies.
          Aenean dapibus luctus augue a tristique. Class aptent taciti sociosqu
          ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris
          magna augue, convallis at nunc ac, laoreet rutrum magna. Suspendisse
          pulvinar risus in metus malesuada, ac vulputate odio ultrices.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae; Curabitur porta felis sed mauris pellentesque,
          id euismod ex finibus. Mauris ut magna eu sapien congue luctus eu eu
          turpis. Cras arcu turpis, aliquam eget eleifend et, condimentum eu
          diam. In hac habitasse platea dictumst. Praesent ut accumsan justo.
          Sed tempus, enim a aliquet rhoncus, lorem orci tincidunt felis, non
          condimentum augue turpis et nibh. Nunc dapibus accumsan maximus.
        </Paragraph>
        <BackgroundImage>
          <Raifuu />
        </BackgroundImage>
      </Paragraphs>
    </PageWrapper>
  );
}
