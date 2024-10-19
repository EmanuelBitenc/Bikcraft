import magicHome from "../../../assets/imgs/bicicletas/magic-home.jpg";
import nebulaHome from "../../../assets/imgs/bicicletas/nebula-home.jpg";
import nimbusHome from "../../../assets/imgs/bicicletas/nimbus-home.jpg";

interface BicicletData {
  id: number;
  href: string;
  src: string;
  alt: string;
  price: string;
  name: string;
}

const bicicletData: BicicletData[] = [
  {
    id: 1,
    href: "./bicicletas/magic.html",
    src: magicHome,
    alt: "Bicicleta preta",
    name: "Magic Might",
    price: "R$ 2499",
  },
  {
    id: 2,
    href: "./bicicletas/nimbus.html",
    src: nebulaHome,
    alt: "Bicicleta preta",
    name: "Nimbus Stark",
    price: "R$ 4999",
  },
  {
    id: 3,
    href: "./bicicletas/nebula.html",
    src: nimbusHome,
    alt: "Bicicleta preta",
    name: "Nebula Cosmic",
    price: "R$ 3999",
  },
];

export default bicicletData;
