import { PageWrapper, PageHeader, Paragraph, Paragraphs } from "../styles";
import { background, secondary } from "../style_variables";
import { Spring } from "react-spring/renderprops";
import { BlogList } from "../molecules";
import { ReactComponent as BlogText } from "../images/blog.svg";
import TrackVisibility from "react-on-screen";
import { useState, useEffect } from "react";
import { fetchBlogs } from "../services/api";
import { IBlog } from "../interfaces";

const tempText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet felis ac dui scelerisque eleifend. Nunc mi est, aliquet ac justo non, rutrum fringilla lorem. Aenean venenatis augue nec massa laoreet, id varius elit scelerisque. Donec mattis erat quam, vel tristique dui fringilla ac. Aliquam aliquam, elit a placerat suscipit, quam nisl lobortis purus, quis pulvinar lacus diam ut urna. Vivamus vel diam ut ligula tincidunt malesuada. Aliquam odio nibh, pellentesque sed turpis eu, tristique pretium turpis. Aliquam  t rutrum leo, eu mollis arcu.";

export default function Blog() {
  const [blogs, setBlogs] = useState<IBlog[]>([]);

  useEffect(() => {
    const getBlogs = async () => {
      const blogs = await fetchBlogs();
      setBlogs(
        blogs.map((blog: IBlog) => {
          return { ...blog, date: new Date(blog.date) };
        })
      );
    };
    getBlogs();
  });

  return (
    <PageWrapper id="blog">
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
                  <BlogText
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
        <BlogList blogs={blogs} />
      </Paragraphs>
    </PageWrapper>
  );
}
