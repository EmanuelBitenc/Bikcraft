import Biciclet from "./Biciclet";
import "./biciclet.scss";
import BicicletsData from "./BicicletsData";

const BicicletList: React.FC = () => {
  return (
    <>
      <article className="bicicletasLista">
        <h2 className="container title">
          escolha a sua<span>.</span>
        </h2>

        <ul>
          {BicicletsData &&
            BicicletsData.map((biciclet) => (
              <Biciclet
                key={biciclet.href}
                href={biciclet.href}
                src={biciclet.src}
                alt={biciclet.alt}
                name={biciclet.name}
                price={biciclet.price}
              />
            ))}
        </ul>
      </article>
    </>
  );
};
export default BicicletList;
