import styled from "styled-components";
import "./App.css";
import { Landing, About, Projects, Blog } from "./organisms";
import { background } from "./style_variables";

const App = () => (
  <OuterMostContainer>
    <Landing />
    <About />
    <Projects />
    <Blog />
  </OuterMostContainer>
);

const OuterMostContainer = styled.main`
  background: ${background};
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow-x: hidden;
`;

export default App;
