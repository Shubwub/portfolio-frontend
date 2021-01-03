import { PageWrapper, PageHeader, Paragraph, Paragraphs } from "../styles";
import { background, secondary } from "../style_variables";
import { Spring } from "react-spring/renderprops";
import { ReactComponent as AboutText } from "../images/about.svg";
import TrackVisibility from "react-on-screen";
import { BackgroundImage } from "../molecules";
import { ReactComponent as Raifuu } from "../images/raifuu.svg";

const calculateAge = (birthday: Date): number => {
  const ageDifMs = Date.now() - birthday.getTime();
  const ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

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
          Firstly, welcome to my portfolio! This is a site I setup during the
          end of 2020 as a place to host, display, and discuss the various
          things I'm working on and have worked on in the past. In this section
          I'll give some brief information on me as a person so you can get a
          feel of who I am inside and outside of work.
        </Paragraph>
        <Paragraph>
          As the top of this page may have alluded to, my name is Cameron
          Thornton. I'm {calculateAge(new Date("08/10/1997"))} years old, born
          and raised in Yorkshire in the United Kingdom. I started university at
          Lancaster University in 2015, studying a Master's Degree in Computer
          Science. Throughout my time at Lancaster University I primarily used
          Java - building native applications and working primarily in an OOP
          setting. There were also smatterings of C, python, erlang, and
          JavaScript. Towards the end of my degree I picked up an affinity for
          web and mobile development resulting in my dissertation in my final
          year where I built an augmented recommendation engine in Python with
          Django. After graduating university in Summer 2019 with my MSci.
          Computer Science degree I immediately began work as a full-stack Web
          Developer at AHC - a digital agency and consultancy specialising in
          employee benefits. During the first few months of my employment I
          completed a fulltime full-stack training course at Northcoders where I
          was formally taught React and Node.JS.
        </Paragraph>
        <Paragraph>
          In my free time outside of work I like to practise and expand my
          programming skills by working on small projects and ideas (which can
          be found below). While most of my industrial experience is in handling
          the front-end of applications, I like to practise with more full-stack
          and API projects, as well as a recent expedition into developing
          mobile apps through React Native. Outside of programming I have a keen
          interest in Japanse culture and history - hence the theming of
          traditional Edo-era japanese paintings I've recreated as the design of
          this page. I've been learning Japanese for over a year now and so each
          section (aside from my blogs) can also be viewed in Japanese with
          their respective toggle.
        </Paragraph>
        <BackgroundImage>
          <Raifuu />
        </BackgroundImage>
      </Paragraphs>
    </PageWrapper>
  );
}
