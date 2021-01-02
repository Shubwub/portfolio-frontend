import styled from "styled-components";
import { BlogPost } from "../atoms";
import { IBlog } from "../interfaces";

export default function BlogList({ blogs }: { blogs: IBlog[] }) {
  return (
    <List>
      {blogs.map((blog: IBlog) => (
        <BlogPost blog={blog} />
      ))}
    </List>
  );
}

const List = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
`;
