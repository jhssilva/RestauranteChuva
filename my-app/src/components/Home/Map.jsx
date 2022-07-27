import React from "react";

const Map = () => {
  return (
    <section id="map" className="map">
      <div data-aos="fade-up">
        <iframe
          title="Map"
          style={{ border: 0, width: "100%", height: "350px" }}
          src="https://maps.google.com/maps?q=Restaurante%20Chuva&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameBorder="0"
          allowFullScreen
        />
      </div>
    </section>
  );
};

export default Map;
