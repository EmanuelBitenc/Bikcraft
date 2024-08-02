import BicicletList from "./components/Home/BicicletList";
import Header from "./components/Home/Header";
import Intro from "./components/Home/Intro";
import Tecnologias from "./components/Home/Tecnologias";
import "./styles/global.scss";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Intro />
      <BicicletList />
      <Tecnologias />
    </>
  );
};

export default App;
