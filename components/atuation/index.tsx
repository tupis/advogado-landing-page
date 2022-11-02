import CardAtuation from "../card";

interface Props {
  id: string;
  areas: object[];
}

const AtuationArea = ({ id, areas }: Props) => {
  return (
    <div
      className="w-full flex justify-center items-center bg-textColor text-secundaryColor py-12 md:py-36"
      id={id}
    >
      <div className="w-full flex flex-col md:container">
        <h1 className="self-center md:self-start text-3xl md:text-5xl mb-12 md:mb-24">
          Áreas de Atuação
        </h1>
        <div className="flex flex-wrap justify-center items-center sm:container self-center">
          <CardAtuation />
          <CardAtuation />
          <CardAtuation />
          <CardAtuation />
          <CardAtuation />
          <CardAtuation />
          <CardAtuation />
          <CardAtuation />
          <CardAtuation />
        </div>
      </div>
    </div>
  );
};

export default AtuationArea;
