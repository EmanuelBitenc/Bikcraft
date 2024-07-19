interface BicicletProps {
  href: string;
  src: string;
  alt: string;
  price: string;
  name: string;
}

const Biciclet: React.FC<BicicletProps> = (props) => {
  return (
    <li>
      <a href={props.href}>
        <img src={props.src} alt={props.alt} />
        <h3 className="bicicletName">{props.name}</h3>
        <span className="bicicletPrice">{props.price}</span>
      </a>
    </li>
  );
};

export default Biciclet;
