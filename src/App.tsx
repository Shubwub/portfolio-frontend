import styled from "styled-components";
import "./App.css";
import { Landing, About, Projects, Blog, Contact } from "./organisms";
import { background } from "./style_variables";

const App = () => (
  <OuterMostContainer>
    <Landing />
    <About />
    <Projects />
    <Blog />
    <Contact />
  </OuterMostContainer>
);

const OuterMostContainer = styled.main`
  background: ${background};
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
`;

export default App;
