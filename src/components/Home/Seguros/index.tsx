import "./seguros.scss";
import SegurosItens from "./SegurosItens";

const Seguros = () => {
  return (
    <article className="seguros-bg">
      <div className="seguros container">
        <h2 className="titleSection">
          seguros<span>.</span>
        </h2>
        <SegurosItens />
      </div>
    </article>
  );
};

export default Seguros;
