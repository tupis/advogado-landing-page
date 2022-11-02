import { AiFillAlert } from "react-icons/ai";

interface Props {
  title: string;
  text: string;
  icon: any;
}

// const CardAtuation = ({title, text, icon}: Props) => {
const CardAtuation = () => {
  return (
    <div className="flex flex-col max-w-xs border-2 border-secundaryColor border-solid hover:bg-gray-300 p-4 m-1">
      <AiFillAlert className="text-4xl" />
      <h1 className="font-bold text-xl">Previdenciário</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
        aspernatur. Dolorum quasi et itaque harum quod ullam voluptate
        distinctio unde, tempora
      </p>
    </div>
  );
};

export default CardAtuation;
