import styled from "styled-components";
import { ReactComponent as Komainu } from "../images/komainu.svg";

export default function PageOne() {
  return (
    <PageWrapper>
      <BackgroundImg>
        <Komainu />
      </BackgroundImg>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BackgroundImg = styled.div`
  width: 700px;
  height: 700px;
`;
