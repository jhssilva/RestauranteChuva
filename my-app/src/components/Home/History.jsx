import React from "react";
import award1 from "../../resources/img/awards/3.jpg";
import Title from "./Title";

const History = () => {
  return (
    <section id="about" className="about anchor pt-4 pb-3">
      <Title divClass="section-title pb-5" headerText="A nossa História" />
      <div
        id="about-global"
        data-aos="fade-up"
        className="container container-fluid"
      >
        <div className="row">
          <div className="col-11 mx-auto col-md-11 col-lg-10 justify-content-center">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-8 col-lg-9">
                <p className="about-text text-justify">
                  <b className="about-text-bold">Restaurante Chuva</b> com mais
                  de 50 anos de serviço (1958) é uma referência incontornável da
                  cozinha regional minhota. A qualidade dos pratos confecionados
                  já foi por diversas vezes reconhecida com prémios e
                  dinstinções. Acompanhado por uma adega com uma seleção de
                  vinhos vindos das mais prestigiadas cooperativas do país.
                  <br />
                </p>
                <p className="about-text text-justify">
                  <b className="about-text-bold">
                    As melhores especialidades da cozinha tradicional portuguesa
                    e da cozinha regional minhota estão à sua espera no
                    Restaurante Chuva!
                  </b>
                  <br />
                </p>
              </div>
              <div className="col col-md-4 col-lg-3 d-none d-md-block">
                <img
                  alt="Maria Alice"
                  src={award1}
                  className="img-fluid about-pic"
                />
                <p className="about-pic-label d-flex justify-content-center">
                  Maria Alice
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
