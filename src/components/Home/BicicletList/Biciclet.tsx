import "./biciclet.scss";
interface BicicletProps {
  href: string;
  src: string;
  alt: string;
  price: string;
  name: string;
}

const Biciclet: React.FC<BicicletProps> = (props) => {
  return (
    <li className="bicicletLi">
      <a className="bicicletLink" href={props.href}>
        <img className="bicicletImg" src={props.src} alt={props.alt} />
        <h3 className="bicicletName">{props.name}</h3>
        <span className="bicicletPrice">{props.price}</span>
      </a>
    </li>
  );
};

export default Biciclet;
