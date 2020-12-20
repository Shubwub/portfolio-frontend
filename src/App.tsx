import styled from "styled-components";
import "./App.css";
import { PageOne } from "./organisms";
import { background } from "./style_variables";

const App = () => (
  <OuterMostContainer>
    <PageOne />
  </OuterMostContainer>
);

const OuterMostContainer = styled.main`
  width: 100vw;
  background: ${background};
  display: flex;
  justify-content: center;
`;

export default App;
