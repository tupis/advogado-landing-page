import styled from "styled-components";

export const AnimatedCreator = styled.a`
  display: flex;
  flex-direction: column-reverse;
  cursor: pointer;
  ::before {
    content: "";
    display: block;
    width: 0;
    height: 2px;
    transition: 0.5s ease-out;
  }

  :hover {
    ::before {
      width: 100%;
    }
  }
`;
