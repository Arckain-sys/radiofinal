import React from "react";
import { Container } from "reactstrap";

function Hero() {
  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" + require("C:/Users/Abel/Desktop/code/radiofinal/src/assets/img/antoine-barres.jpg") + ")"
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="title-brand d-flex justify-content-center align-items-center">
              <img src={require("C:/Users/Abel/Desktop/code/radiofinal/src/assets/img/ILLAPEL.png")} alt="Illapel FM Logo" className="img-fluid" />
            </div>
          </Container>
        </div>
        <div
          className="moving-clouds"
          style={{
            backgroundImage: "url(" + require("C:/Users/Abel/Desktop/code/radiofinal/src/assets/img/clouds.png") + ")"
          }}
        />
      </div>
    </>
  );
}

export default Hero;
