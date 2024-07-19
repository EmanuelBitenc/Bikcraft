import magicHome from "../../assets/imgs/BicicletHome/magicHome.jpg";
import nebulaHome from "../../assets/imgs/BicicletHome/nebulaHome.jpg";
import nimbusHome from "../../assets/imgs/BicicletHome/nimbusHome.jpg";

interface BicicletData {
  href: string;
  src: string;
  alt: string;
  price: string;
  name: string;
}

const bicicletData: BicicletData[] = [
  {
    href: "./bicicletas/magic.html",
    src: magicHome,
    alt: "Bicicleta preta",
    name: "Magic Might",
    price: "R$ 2499",
  },
  {
    href: "./bicicletas/nimbus.html",
    src: nebulaHome,
    alt: "Bicicleta preta",
    name: "Nimbus Stark",
    price: "R$ 4999",
  },
  {
    href: "./bicicletas/nebula.html",
    src: nimbusHome,
    alt: "Bicicleta preta",
    name: "Nebula Cosmic",
    price: "R$ 3999",
  },
];

export default bicicletData;
