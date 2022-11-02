import styled from "styled-components";

interface IImageBG {
  width?: number;
  imagelink: string;
}

export const ImageBG = styled.div<IImageBG>`
  background-image: url(${(props) => props.imagelink});
`;

export const ImageBGMobile = styled.div<IImageBG>`
  background-image: url(${(props) => props.width! < 1024 && props.imagelink});
`;
