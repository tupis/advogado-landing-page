import Head from "next/head";
import Apresentation from "../components/apresentation";
import AtuationArea from "../components/atuation";
import Footer from "../components/footer";
import Form from "../components/form";
import NavBar from "../components/nav";

export default function Home() {
  const navPage: string[] = ["Início", "Aréas de Atuação", "Contato"];

  const socials = [
    {
      user: "jh.tupinamba",
      url: "https://www.instagram.com/jh.tupinamba/",
      icon: "",
    },
  ];

  const contacts = [
    {
      contact: "",
      url: "",
      icon: "",
    },
  ];

  const atuationArea = [
    { area: "", icons: "", text: "" },
    { area: "", icons: "", text: "" },
  ];

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Home</title>
      </Head>
      <NavBar items={navPage} />
      <main>
        <Apresentation id={"inicio"} />
        <AtuationArea areas={atuationArea} id={"areas"} />
        <Form id={"contato"} />
        <Footer social={socials} contacts={contacts} />
      </main>
    </>
  );
}
