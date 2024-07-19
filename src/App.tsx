import BicicletList from "./components/BicicletList";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Tecnologias from "./components/Tecnologias";

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
