import Biciclet from "./Biciclet";
import "./biciclet.scss";
import BicicletsData from "./BicicletsData";

const BicicletList: React.FC = () => {
  return (
    <>
      <div className="bicicletasLista">
        <h2 className="container bicicletasTitle">
          escolha a sua<span>.</span>
        </h2>

        <ul className="bicicletUl">
          {BicicletsData &&
            BicicletsData.map((biciclet) => (
              <Biciclet
                key={biciclet.id}
                href={biciclet.href}
                src={biciclet.src}
                alt={biciclet.alt}
                name={biciclet.name}
                price={biciclet.price}
              />
            ))}
        </ul>
      </div>
    </>
  );
};
export default BicicletList;
