import Header from "../Global/Header";
import Intro from "./Intro";
import BicicletList from "./BicicletList";
import Tecnologias from "./Tecnologias";
import Parceiros from "./Parceiros";
import Depoimento from "./Depoimento";
import Seguros from "./Seguros";
import Footer from "../Global/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Intro />
      <BicicletList />
      <Tecnologias />
      <Parceiros />
      <Depoimento />
      <Seguros />
      <Footer />
    </>
  );
};

export default Home;
