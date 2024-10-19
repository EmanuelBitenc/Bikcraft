import "./seguros.scss";

import segurosData from "./segurosData";

const SegurosItens = () => {
  return (
    <>
      {segurosData &&
        segurosData.map((seguro) => (
          <div className="seguros-item">
            <h3 className={`seguroName ${seguro.class2}`}>{seguro.nome}</h3>
            <span>
              R$ {seguro.valor} <span>mensal</span>
            </span>
            <ul>
              {seguro.beneficios.map((beneficio) => (
                <li>{beneficio}</li>
              ))}
            </ul>
            <a className={seguro.class} href={seguro.href}>
              Inscreva-se
            </a>
          </div>
        ))}
    </>
  );
};
export default SegurosItens;
