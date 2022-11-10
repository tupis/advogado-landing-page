import { AiFillAlert } from "react-icons/ai";

interface Props {
  area: any;
  // title: string;
  // text: string;
  // icon: any;
}

interface Area {
  title: string;
  text: string;
  icon: string;
}

const CardAtuation = (props: Props) => {
  const area = props.area;

  return (
    <div className="flex flex-col max-w-xs border-2 border-secundaryColor border-solid hover:bg-gray-300 p-4 m-1">
      <AiFillAlert className="text-4xl" />
      <h1 className="font-bold text-xl">{area.title}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
        aspernatur. Dolorum quasi et itaque harum quod ullam voluptate
        distinctio unde, tempora
      </p>
    </div>
  );
};

export default CardAtuation;
