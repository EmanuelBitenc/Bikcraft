import BicicletList from "./components/BicicletList";
import Header from "./components/Header";
import Intro from "./components/Intro";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Intro />
      <BicicletList />
    </>
  );
};

export default App;
