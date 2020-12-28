import styled from "styled-components";
import { background, accent } from "../style_variables";
import { Link } from "react-scroll";

export default function NavButton({
  location,
  style,
}: {
  location: string[];
  style: any;
}) {
  return (
    <Button style={style} to={location[0].toLowerCase()} smooth={true}>
      <NavHead>{location[0]}</NavHead>
      <NavSub>{location[1]}</NavSub>
    </Button>
  );
}

const Button = styled(Link)`
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
  font-weight: 900;
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
