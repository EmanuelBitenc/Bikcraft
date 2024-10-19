import { Outlet } from "react-router-dom";
import "./styles/global.scss";
import Header from "./components/Global/Header";
import Footer from "./components/Global/Footer";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
