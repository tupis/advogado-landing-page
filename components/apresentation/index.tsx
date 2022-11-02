import {
  Container,
  BackgroundImage,
  BackgroundTwoColors,
  Text,
  Title,
  WrapperText,
  HighLightName,
  ButtonWhatsApp,
  ColorInsideBG,
  ImagePerson,
} from "./style";
import image from "../../assets/bg.jpg";
import person from "../../assets/person.png";

import { FaWhatsapp } from "react-icons/fa";

interface Props {
  id: string;
}

const Apresentation = ({ id }: Props) => {
  return (
    <Container
      className="flex justify-center items-center relative h-3/6 sm:h-3/4 lg:h-3/5 3xl:h-2/5"
      id={id}
    >
      <BackgroundTwoColors className="w-full h-full">
        <ColorInsideBG className="bg-secundaryColor" />
        <ColorInsideBG className="bg-primaryColor" />
      </BackgroundTwoColors>

      <div className="flex lg:flex-row w-full h-full absolute z-10 container flex-col lg:items-end items-center">
        <WrapperText className=" flex flex-col justify-center lg:items-start md:mx-10 lg:mx-0 h-full items-center sm:w-full w-10/12 ">
          <Title className="md:text-start text-center sm:text-4xl md:text-5xl text-2xl">
            PRECISA DE UM ADVOGADO ?
          </Title>
          <Text className="mt-3 md:text-start text-center sm:text-md md:text-lg text-xl">
            Conte com{" "}
            <HighLightName className="text-textColor afert:bg-textColor">
              Lucas Medeiros
            </HighLightName>{" "}
            para Defender Seus Direitos!
          </Text>
          <ButtonWhatsApp href="" target="_blank" className="lg:ml-10 ml-0">
            <FaWhatsapp />
            <p>Entre em Contato</p>
          </ButtonWhatsApp>
        </WrapperText>
        <ImagePerson
          className="sm:w-6/12 mt-0 sm:block hidden"
          src={person}
          alt="foto do advogado"
        />
      </div>
    </Container>
  );
};

export default Apresentation;

{
  /* <BackgroundImage
  className="absolute w-full h-full"
  src={image}
  alt={"bg apresentation"}
/> */
}
