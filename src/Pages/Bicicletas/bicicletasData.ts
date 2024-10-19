import magic from "../../../src/assets/imgs/bicicletas/magic.jpg";
import nebula from "../../../src/assets/imgs/bicicletas/nebula.jpg";
import nimbus from "../../../src/assets/imgs/bicicletas/nimbus.jpg";

interface BicicletasData {
  id: number;
  href: string;
  src: string;
  alt: string;
  price: string;
  name: string;
  description: string;
  km: string;
}

const bicicletasData: BicicletasData[] = [
  {
    id: 1,
    href: "/bicicletas/NimbusStark",
    src: nimbus,
    alt: "Bicicleta preta",
    name: "Nimbus Stark",
    price: "R$ 4999",
    description:
      "A Nimbus Stark é a melhor Bikcraft já criada pela nossa equipe. Ela vem equipada com os melhores acessórios, o que garante maior velocidade.",
    km: "50 km/h",
  },
  {
    id: 2,
    href: "bicicletas/MagicMight",
    src: magic,
    alt: "Bicicleta preta",
    name: "Magic Might",
    price: "R$ 2499",
    description:
      "A Magic Might é a melhor Bikcraft já criada pela nossa equipe. Ela vem equipada com os melhores acessórios, o que garante maior velocidade.",
    km: "45 km/h",
  },
  {
    id: 3,
    href: "/bicicletas/NebulaCosmic",
    src: nebula,
    alt: "Bicicleta preta",
    name: "Nebula Cosmic",
    price: "R$ 3999",
    description:
      "A Nebula Cosmic é a melhor Bikcraft já criada pela nossa equipe. Ela vem equipada com os melhores acessórios, o que garante maior velocidade.",
    km: "50 km/h",
  },
];

export default bicicletasData;
