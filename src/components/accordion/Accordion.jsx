import React, { useState } from "react";
import "./Accordion.css";
import { FaArrowLeftLong } from "react-icons/fa6";

const Accordion = () => {
  const [curOpen, setCurOpen] = useState(false);

  const handleToggleOpen = () => {
    setCurOpen(true);
  };

  const handleToggleClose = () => {
    setCurOpen(false);
  };

  return (
    <div
      className={`accordion-container ${curOpen ? "open" : ""}`}
      onClick={handleToggleOpen}
    >
      <div className="accordion-title-row">
        <h2>Description</h2>
        <p className="accordion-icon" onClick={handleToggleClose}>
          <FaArrowLeftLong />
        </p>
      </div>
      <div className="accordion-content">
        <p>
          Whey Protein Concentrado 910g - Masterway Suplementos
          <br />
          25g de Proteína (por porção)
          <br />
          5,9g de BCAA's <br />
          5,1g de Glutamina
          <br />
        </p>

        <p>
          <b>O QUE É O WHEY PROTEIN?</b>
        </p>

        <p>
          É uma proteína extraída do soro do leite, que é composto
          principalmente pelas proteínas alfa-globulina e beta-globulina. A
          segunda está presente em maior quantidade nesse suplemento, fazendo
          com que o produto seja de fácil digestão e absorção. O whey fornece
          todos os aminoácidos não produzidos pelo organismo e é rico em bcaa
          —aminoácidos de cadeia ramificada (leucina, isoleucina e valina),
          importantes para a síntese (produção) de fibras musculares.
        </p>

        <p>
          Como as proteínas são essenciais para o reparo e construção da massa
          magra após o exercício, o suplemento é indicado tanto para a
          recuperação de atletas que praticam esportes aeróbicos de longa
          duração (corrida, triatlo, ciclismo) quanto para pessoas que buscam
          hipertrofia, ganho de força e potência muscular. Obviamente, o
          suplemento sozinho não faz ninguém ficar mais forte e é importante ter
          uma rotina apropriada de exercícios para alcançar esse objetivo.
        </p>

        <p>
          O suplemento também pode ser indicado para quem busca emagrecer.
          Devido ao fato de a proteína ser um nutriente que traz saciedade,
          estudos mostram que o consumo de whey protein auxilia a perda de
          gordura corporal (quando inserido em uma dieta apropriada para esse
          objetivo), pois as pessoas acabam comendo menos.
        </p>

        <br />
        <p>
          <b>BENEFÍCIOS:</b>
        </p>

        <p>
          - CONTRIBUI PARA A HIPERTROFIA MUSCULAR;
          <br />
          - MELHORA O DESEMPENHO NOS TREINOS;
          <br />
          - PROMOVE A LIBERAÇÃO DE HORMÔNIOS ANABÓLICOS;
          <br />
          - ESTIMULA A SÍNTESE PROTEICA;
          <br />
          - TEM RÁPIDA DIGESTÃO E ABSORÇÃO INTESTINAL;
          <br />
          - BENEFICIA O FORTALECIMENTO DO SISTEMA IMUNE;
          <br />
          - REDUZ O ESTRESSE E PROPORCIONA DISPOSIÇÃO;
          <br />- ACELERA A RECUPERAÇÃO MUSCULAR.
        </p>

        <p>
          <b>Tipos de whey protein</b>
          <br />
          <br />É possível encontrar no mercado três versões do suplemento, e
          isso pode gerar confusão na hora de comprar. De forma simples, os
          tipos de whey protein são
        </p>

        <p>
          Concentrado: O soro do leite passa apenas por uma filtragem e conserva
          os carboidratos (inclusive lactose), minerais e gorduras do leite.
          Tende a ser mais barato. Porém, uma dose oferece teor proteico menor e
          o processo de digestão e absorção da proteína é mais demorado do que o
          dos outros tipos de whey.
          <br />
          Isolado: Obtido por técnicas rígidas de extração e filtragem, é uma
          proteína praticamente "pura". Geralmente, contém cerca de 90% de
          proteína e um teor muito baixo de carboidratos e gorduras (muitos
          suplementos não possuem essas substâncias). Logo, a concentração de
          aminoácidos por dose no whey isolado é maior do que no concentrado.
          Além disso, o produto é absorvido mais rapidamente.
          <br />
          Hidrolisado: É uma versão isolada do whey que passou por um processo
          de quebra dos aminoácidos, facilitando a digestão e absorção dessas
          substâncias pelo organismo. Tende a oferecer menos BCCA que o isolado
          e é o mais caro entre os três tipos de whey. Pode ser uma boa opção
          para quem apresenta problemas de gases e má digestão ao consumir o
          suplemento isolado ou concentrado. Pesquisas já mostraram que a
          velocidade de absorção, fator que fazia muitos investirem no whey
          hidrolisado, não faz tanta diferença para os resultados do treino.
          <br />
        </p>

        <p>
          <b>Quanto consumir</b>
        </p>

        <p>
          Por dia, o recomendado é que uma pessoa que pratica exercícios em
          intensidade moderada a intensa consuma de 1,2 gramas a 2 gramas de
          proteína por quilo de peso corporal —isso considerando todas as fontes
          de proteína (carnes, ovo, leite, frango, queijo) e não só o whey.
          Assim, uma pessoa com 70 kg deve ingerir de 84 gramas a 140 gramas de
          proteínas por dia, e o suplemento pode entrar na dieta para ajudar a
          alcançar esse número.
        </p>

        <p>
          Muitos especialistas recomendam que se consuma no máximo uma dose de
          whey protein por dia (cerca de 20 g a 25 g de proteína) e o restante
          do nutriente seja obtido por alimentos. Por isso, antes de comprar o
          produto, é muito importante consultar-se com um nutricionista para
          saber da sua real necessidade.
        </p>
      </div>
    </div>
  );
};

export default Accordion;
