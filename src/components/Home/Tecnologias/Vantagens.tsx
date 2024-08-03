import "../../../styles/global.scss";
import tecnologiasData from "./tecnologiasData";

const Vantagens = () => {
  return (
    <>
      {tecnologiasData.map((tecnologia) => (
        <div>
          <img src={tecnologia.icon} width="24" height="24" alt="" />
          <h3 className="tituloTec ">{tecnologia.nome}</h3>
          <p className="descricaoTec ">{tecnologia.beneficio}</p>
        </div>
      ))}
    </>
  );
};

export default Vantagens;
