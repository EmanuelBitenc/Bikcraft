import "./depoimento.scss";

import depoimento from "../../../assets/imgs/fotos/depoimento.jpg";

const Depoimento = () => {
  return (
    <section className="depoimento">
      <div className="depoimento-img">
        <img src={depoimento} alt="" style={{ width: "100%" }} />
      </div>
      <div className="depoimento-texts">
        <p className="depoimentoText">
          <span className="absolute absolute2 aspas">"</span>Pedalar sempre foi
          a minha paixão, o que o pessoal da Bikcraft fez foi intensificar o meu
          amor por esta atividade. Recomendo à todos que amo.
          <span className="aspas absolute">"</span>
        </p>
        <span className="depoimentoName">Anna Clara</span>
      </div>
    </section>
  );
};

export default Depoimento;
