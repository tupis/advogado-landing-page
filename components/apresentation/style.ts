import styled from "styled-components";
import Image from "next/image";

export const Container = styled.section``;

export const BackgroundImage = styled(Image)`
  z-index: 1;
  object-fit: cover;
  filter: brightness(0.7);
`;

export const BackgroundTwoColors = styled.div`
  display: flex;
  z-index: 1;
  width: 100%;
  height: 100%;

  span {
    :nth-last-child(1) {
      width: 45%;
    }
  }
`;

export const ColorInsideBG = styled.span`
  width: 100%;
  height: 100%;
`;

export const ImagePerson = styled(Image)`
  object-fit: cover;
`;

export const WrapperText = styled.div`
  color: white;
  z-index: 2;
`;

export const Title = styled.h1``;

export const Text = styled.p``;

export const HighLightName = styled.span``;

export const ButtonWhatsApp = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  color: white;
  background-color: #4fce5d;
  border-radius: 5px;
  margin-top: 12px;
  font-size: 1.2em;

  svg {
    font-size: 1.5em;
  }

  p {
    margin-left: 10px;
  }

  :hover {
    background-color: #34783b;
  }
`;
