import "./biciclet.scss";
interface BicicletProps {
  href: string;
  src: string;
  alt: string;
  price: string;
  name: string;
}

const Biciclet: React.FC<BicicletProps> = ({ href, src, alt, name, price }) => {
  return (
    <li className="bicicletLi">
      <a className="bicicletLink" href={href}>
        <img className="bicicletImg" src={src} alt={alt} />
        <h3 className="bicicletName">{name}</h3>
        <span className="bicicletPrice">{price}</span>
      </a>
    </li>
  );
};

export default Biciclet;
