import React from "react";
import img1 from "../resources/img/restaurant/1.jpg";
import img2 from "../resources/img/restaurant/2.jpg";
import img3 from "../resources/img/restaurant/3.jpg";

const CarouselSlide = () => {
  return (
    <div
      className="carousel slideshow"
      data-ride="carousel"
      id="slide-global-show"
      data-interval="3000"
    >
      <div className="carousel-inner" id="slide-global-carousel-inner">
        <div className="carousel-item active">
          <img src={img1} className="d-block w-100" alt="Restaurant" />
        </div>
        <div className="carousel-item">
          <img src={img2} className="d-block w-100" alt="Restaurant" />
        </div>
        <div className="carousel-item">
          <img src={img3} className="d-block w-100" alt="Restaurant" />
        </div>
      </div>
    </div>
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
        className="btn btn-primary slide-button-text animated"
        href="#menu"
        role="button"
      >
        Cardápio
      </a>
      <a
        className="btn btn-primary slide-button-text animated"
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
