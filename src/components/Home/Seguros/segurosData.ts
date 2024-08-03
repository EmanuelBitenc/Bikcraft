interface segurosData {
  id: number;
  nome: string;
  valor: string;
  beneficios: string[];
  href: string;
  class: string;
  class2?: string;
}

const segurosData: segurosData[] = [
  {
    id: 1,
    nome: "PRATA",
    valor: "199",
    beneficios: [
      "Duas trocas por ano",
      "Assistência técnica",
      "Suporte 08h às 18h",
      "Cobertura estadual",
    ],
    href: "/orcamento?tipo=seguro&produto=prata",
    class: "prataButton",
    class2: "prata",
  },
  {
    id: 2,
    nome: "OURO",
    valor: "299",
    beneficios: [
      "Cinco trocas por ano",
      "Assistência especial",
      "Suporte 24h",
      "Cobertura nacional",
      "Desconto em parceiros",
      "Acesso ao Clube Bikcraft",
    ],
    href: "/orcamento?tipo=seguro&produto=ouro",
    class: "ouroButton",
    class2: "ouro",
  },
];

export default segurosData;
