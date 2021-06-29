import Head from "next/head";
import { IBanner } from "../../assets/helpers/interfaces";
import { Banner } from "../Banner";
import { MainWrapper } from "./style";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { Navbar } from "../Navbar";

export const MainLayout: React.FC<IBanner> = ({
  children,
  img,
  title,
  text,
}) => {
  return (
    <>
      <Head>
        <title>DalaAcademy platform</title>
      </Head>
      <Header logo={"DalaAcademy"} />
      <Navbar />
      <main>
        {title && <Banner img={img} title={title} text={text} />}
        <MainWrapper>{children}</MainWrapper>
        <Footer logo={"DalaAcademy"} />
      </main>
    </>
  );
};
