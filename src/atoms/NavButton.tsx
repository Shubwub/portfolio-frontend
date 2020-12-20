import styled from "styled-components";
import { background, accent } from "../style_variables";

export default function NavButton({
  location,
  style,
}: {
  location: string[];
  style: any;
}) {
  return (
    <Button style={style}>
      <NavHead>{location[0]}</NavHead>
      <NavSub>{location[1]}</NavSub>
    </Button>
  );
}

const Button = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: ${accent};
  -webkit-text-fill-color: ${background};
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: ${accent};
  transition: 0.3s ease-in-out;
  width: auto;
  :hover {
    transition: 0.3s ease-in-out;
    -webkit-text-fill-color: ${accent};
    -webkit-text-stroke-width: 0;
  }
`;

const NavHead = styled.span`
  font-size: 4rem;
  padding: 0;
  margin: 0;
  line-height: 1;
`;

const NavSub = styled(NavHead)`
  font-size: 2rem;
`;
