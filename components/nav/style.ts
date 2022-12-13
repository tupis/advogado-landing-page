import styled from "styled-components";

export const Container = styled.nav`
  background-color: var(--secundaryColor);
  z-index: 99999;

  li:nth-last-child(1) {
    a {
      margin-right: 0;
      background-color: var(--primaryColor);

      :hover {
        background-color: var(--hoverPrimaryColor);
        ::before {
          background-color: transparent;
        }
      }
    }
  }
`;

export const ItemNav = styled.a`
  color: var(--textColor);
  font-size: 1.3em;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-weight: bolder;

  ::before {
    content: "";
    display: block;
    margin-top: 2px;
    width: 0;
    height: 2px;
    transition: 0.2s ease-in-out;
  }

  :hover {
    ::before {
      width: 130%;
      background-color: var(--primaryColor);
    }
  }
`;
