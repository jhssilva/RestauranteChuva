import React from "react";
import Title from "./Title";
import img1 from "resources/img/gallery/gallery-1.jpg";
import img2 from "resources/img/gallery/gallery-2.jpg";
import img3 from "resources/img/gallery/gallery-3.jpg";
import img4 from "resources/img/gallery/gallery-4.jpg";
import img5 from "resources/img/gallery/gallery-5.jpg";
import img6 from "resources/img/gallery/gallery-6.jpg";
import img7 from "resources/img/gallery/gallery-7.jpg";
import img8 from "resources/img/gallery/gallery-8.jpg";

const galleryList = [
  { key: 1, imgRef: img1 },
  { key: 2, imgRef: img2 },
  { key: 3, imgRef: img3 },
  { key: 4, imgRef: img4 },
  { key: 5, imgRef: img5 },
  { key: 6, imgRef: img6 },
  { key: 7, imgRef: img7 },
  { key: 8, imgRef: img8 },
];

const GalleryItem = (props) => {
  const { imgRef } = props;
  return (
    <div className="col-lg-3 col-md-4">
      <div className="gallery-item">
        <a href={imgRef} className="venobox" data-gall="gallery-item">
          <img src={imgRef} alt="" className="img-fluid" />
        </a>
      </div>
    </div>
  );
};

const Album = () => {
  return (
    <div className="container-fluid" data-aos="fade-up" data-aos-delay="100">
      <div className="row no-gutters">
        {galleryList.map((map) => {
          return <GalleryItem key={map.key} imgRef={map.imgRef} />;
        })}
      </div>
    </div>
  );
};

const Gallery = () => {
  return (
    <section id="gallery" className="gallery pt-5 pb-2">
      <Title divClass="section-title pb-4" headerText="Galeria" />
      <Album />
    </section>
  );
};

export default Gallery;
