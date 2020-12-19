import styled from "styled-components";
import "./App.css";
import { PageOne } from "./organisms";

const App = () => (
  <OuterMostContainer>
    <PageOne />
  </OuterMostContainer>
);

const OuterMostContainer = styled.main`
  background: #ddd58c;
`;

export default App;
