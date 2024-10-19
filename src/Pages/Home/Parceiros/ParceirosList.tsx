import { parceiros } from "./parceirosData";

import "./parceiros.scss";

const ParceirosList = () => {
  return (
    <>
      {parceiros.map((parceiro, index) => (
        <li
          key={index}
          className={`${index === 0 || index === 4 ? "noBorder" : ""} ${
            index >= 4 ? "borderTop" : ""
          }`}
        >
          <img className="parceiro" src={parceiro.src} alt={parceiro.alt} />
        </li>
      ))}
    </>
  );
};
export default ParceirosList;
