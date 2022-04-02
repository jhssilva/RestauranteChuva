import React from "react";
import { Carousel, CarouselItem } from "react-bootstrap";
import img1 from "../resources/img/restaurant/1.jpg";
import img2 from "../resources/img/restaurant/2.jpg";
import img3 from "../resources/img/restaurant/3.jpg";

const carouselLists = [
  {
    key: 1,
    imgSrc: img1,
    alt: "Restaurante Image",
  },
  {
    key: 2,
    imgSrc: img2,
    alt: "Restaurante Image",
  },
  {
    key: 3,
    imgSrc: img3,
    alt: "Restaurante Image",
  },
];

const CarouselSlide = () => {
  return (
    <Carousel
      className=""
      data-ride="carousel"
      id="slide-global-show"
      data-interval="3000"
      controls={false}
      indicators=""
    >
      {carouselLists.map((props) => {
        const { key, imgSrc, alt } = props;
        return (
          <CarouselItem key={key}>
            <img alt={alt} src={imgSrc} className="d-block w-100" />
          </CarouselItem>
        );
      })}
    </Carousel>
  );
};

const InnerCaptionSlide = () => {
  return (
    <div
      id="slide-global-carousel-inner-caption"
      className="carousel-caption d-none d-md-block w-50 ml-auto mr-auto"
    >
      <div id="slide-h1">
        <h1 className="slide-text">Restaurante Chuva desde 1958</h1>
      </div>
      <a
        className="btn btn-primary slide-button-text animated fadeInUp scrollto"
        href="#menu"
        role="button"
      >
        Cardápio
      </a>
      <a
        className="btn btn-primary slide-button-text animated fadeInUp scrollto"
        href="#contact"
        role="button"
      >
        Reservar Mesa
      </a>
    </div>
  );
};

const Slide = () => {
  return (
    <section className="pb-2 slide">
      <div id="slide-global" className="container-fluid">
        <CarouselSlide />
        <InnerCaptionSlide />
      </div>
    </section>
  );
};

export default Slide;
