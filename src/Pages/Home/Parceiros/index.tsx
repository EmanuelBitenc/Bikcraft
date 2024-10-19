import ParceirosList from "./ParceirosList";
import "./parceiros.scss";

const Parceiros = () => {
  return (
    <section className="parceiros " aria-label="Nossos Parceiros">
      <h3 className="container titleParceiros">
        nossos parceiros<span className="destaque">.</span>
      </h3>
      <ul className="lista-parceiros">
        <ParceirosList />
      </ul>
    </section>
  );
};

export default Parceiros;
