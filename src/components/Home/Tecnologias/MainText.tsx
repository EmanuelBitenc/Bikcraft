import "./tecnologias.scss";

const MainText = () => {
  return (
    <>
      <h2 className="titleTec">
        você escolhe as suas cores e componentes
        <span className="destaque">.</span>
      </h2>
      <p className="paragrafoMain">
        Cada Bikcraft é única e possui a sua identidade. As medidas serão exatas
        para o seu corpo e altura, garantindo maior conforto e ergonomia na sua
        pedalada. Você pode também personalizar completamente as suas cores.
      </p>
      <a className="EscolhaBicicleta" href="./bicicletas.html">
        Escolha um modelo
      </a>
    </>
  );
};

export default MainText;
