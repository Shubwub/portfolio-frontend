import styled from "styled-components";
import "./App.css";
import { PageOne } from "./organisms";
import { background} from "./style_variables";

const App = () => (
  <OuterMostContainer>
    <PageOne />
  </OuterMostContainer>
);

const OuterMostContainer = styled.main`
  max-width: 1920px;
  width: 100%;
  background: ${background};
`;

export default App;
