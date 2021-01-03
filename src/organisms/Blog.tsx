import { PageWrapper, PageHeader, Paragraph, Paragraphs } from "../styles";
import { background, secondary } from "../style_variables";
import { Spring } from "react-spring/renderprops";
import { BlogList } from "../molecules";
import { ReactComponent as BlogText } from "../images/blog.svg";
import TrackVisibility from "react-on-screen";
import { useState, useEffect } from "react";
import { fetchBlogs } from "../services/api";
import { IBlog } from "../interfaces";

export default function Blog() {
  const [blogs, setBlogs] = useState<IBlog[]>([]);

  useEffect(() => {
    const getBlogs = async () => {
      const blogs: IBlog[] = await fetchBlogs();
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
        <Paragraph>
          Here I'll be posting blogs, primarily on programming (but not always),
          about things I come across while working or just thoughts I have that
          I want to write down. As with the projects, these blogs are pulled
          from the same remote database through my API. If you have any comments
          or feedback please feel free to email me with the link provided above.
        </Paragraph>
        <BlogList blogs={blogs} />
      </Paragraphs>
    </PageWrapper>
  );
}
