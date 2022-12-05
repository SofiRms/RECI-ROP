import React from "react";

export const Carousel = () => {
  return (
<div>
<div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="/slide1.jpeg" className="d-block w-100" alt="..."></img>
      <div className="carousel-caption d-none d-md-block">
        <h5>Acciones Solidarias</h5>
        <p>Un aplicación pensada para ayudar</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="/slide2.jpeg" className="d-block w-100" alt="..."></img>
      <div className="carousel-caption d-none d-md-block">
        <h5>Sé parte</h5>
        <p>Puedes ayudar a quienes más lo necesitan</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="/slide3.jpeg" className="d-block w-100" alt="..."></img>
      <div className="carousel-caption d-none d-md-block">
        <h5>Ayúdanos a ayudar</h5>
      
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
  );
};

