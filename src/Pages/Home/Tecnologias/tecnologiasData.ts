import eletrica from "../../../assets/icons/eletrica.svg";
import rastreador from "../../../assets/icons/rastreador.svg";

interface tecnologiasData {
  icon: string;
  id: number;
  nome: string;
  beneficio: string;
}

const tecnologiasData: tecnologiasData[] = [
  {
    id: 1,
    icon: eletrica,
    nome: "Motor Elétrico",
    beneficio:
      "Toda Bikcraft é equipada com um motor elétrico que possui duração de até 120h. A bateria é recarregada com a sua energia gasta ao pedalar.",
  },
  {
    id: 2,
    icon: rastreador,
    nome: "Rastreador",
    beneficio:
      "Sabemos o quão preciosa é a sua Bikcraft, por isso adicionamos rastreadores e sistemas anti-furto para garantir o seu sossego.",
  },
];

export default tecnologiasData;
