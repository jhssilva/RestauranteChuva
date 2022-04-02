import React from "react";
import Title from "./Title";
import img1 from "../resources/img/events/type/marriage-1.jpg";
import img2 from "../resources/img/events/type/company-dinner-1.jpg";
import img3 from "../resources/img/events/type/baptized-1.jpg";

const eventsList = [
  {
    key: 1,
    imgSrc: img1,
    headerTitle: "Cerimonial",
    price: "+400 pessoas",
    description: "Organize os seus eventos cerimonais nos nossos espaços.",
    finalMessage: "Juntos construiremos os seus momentos mais especiais.",
  },
  {
    key: 2,
    imgSrc: img2,
    headerTitle: "Empresarial",
    price: "+400 pessoas",
    description:
      "Organize os seus jantares empresariais nos nossos espaços. Procura o local ideal para um jantar de negócios? Ou um jantar de natal da empresa? Ou o aniversário da sua empresa? Vamos juntos comemorar estes momentos especiais.",
    finalMessage:
      "Somos o seu aliado fundamental para tornar a sua empresa em um ambiente familiar.",
  },
  {
    key: 3,
    imgSrc: img3,
    headerTitle: "Publico ou Privados",
    price: "400",
    description:
      "Está a planear uma festa de aniversário? Réveillon? Noite de Carnaval? Festa de formatura? Um jantar entre amigos? Uma despedida de solteiro ou qualquer outra festa particular? Nós ajudamos!",
    finalMessage:
      "Deixe-nos criar os momentos mágicos enquanto desfruta com os amigos e familia.",
  },
];

const CarouselItem = (props) => {
  const { object } = props;
  const { imgSrc, headerTitle, price, description, finalMessage } = object;
  return (
    <div className="row event-item">
      <div className="col-lg-6">
        <img src={imgSrc} className="img-fluid" alt="" />
      </div>
      <div className="col-lg-6 pt-4 pt-lg-0 content">
        <h3>{headerTitle}</h3>
        <div className="price">
          <p>
            <span>{price}</span>
          </p>
        </div>
        <p className="font-italic">{description}</p>
        <ul>
          <li>
            <i className="icofont-check-circled"></i>
            Quinta do Chuva
          </li>
          <li>
            <i className="icofont-check-circled"></i>
            Sala prive
          </li>
          <li>
            <i className="icofont-check-circled"></i>
            Restaurante Chuva
          </li>
        </ul>
        <p>{finalMessage}</p>
      </div>
    </div>
  );
};

const Carousel = () => {
  return (
    <div
      className="owl-carousel events-carousel"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      {eventsList.map((event) => {
        return <CarouselItem key={event.key} object={event} />;
      })}
    </div>
  );
};

const EventsBody = () => {
  return (
    <div className="container" data-aos="fade-up">
      <div className="section-title">
        <p>Organize os seus eventos conosco</p>
      </div>
      <Carousel />
    </div>
  );
};

const Events = () => {
  return (
    <section id="events" data-aos="fade-up" className="events pt-5 pb-2">
      <Title divClass="section-title pb-4" headerText="Eventos" />
      <EventsBody />
    </section>
  );
};

export default Events;
