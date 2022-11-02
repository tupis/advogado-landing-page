import { AnimatedCreator } from "./style";

interface Props {
  social: object[];
  contacts: object[];
}

const Footer = ({ social, contacts }: Props) => {
  //   {socials.map((social) => {
  //     return (
  //       <a
  //         href={social.url}
  //         className="flex flex-row justify-center items-center"
  //       >
  //         {social.icon} {social.user}
  //       </a>
  //     );
  //   })}

  // {contacts.map((contact) => {
  //     return (
  //       <a
  //         href={contact.url}
  //         className="flex flex-row justify-center items-center"
  //       >
  //         {contact.icon} {contact.contact}
  //       </a>
  //     );
  //   })}

  return (
    <div className="flex flex-col justify-center items-center bg-black text-white p-4 w-full">
      <div className="container w-full h-full grid grid-cols-2 place-items-center m-auto">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-2xl">Contato</h1>
          <ul className="list-none">
            <li>Email</li>
            <li>Whatsapp</li>
          </ul>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-2xl">Redes Sociais</h1>
          <ul className="list-none">
            <li>Instagram</li>
            <li>LinkedIn</li>
            <li>Facebook</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-row py-2">
        Feito por&nbsp;
        <AnimatedCreator
          href="https://tupis.github.io/portfolio/"
          target="_blank"
          className="text-textColor before:bg-textColor"
        >
          João Tupinambá.
        </AnimatedCreator>
        &nbsp;Todos direitos reservados.
      </div>
    </div>
  );
};

export default Footer;
