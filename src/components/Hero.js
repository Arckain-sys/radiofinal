import React from "react";
import { Container } from "reactstrap";
import logo from "../assets/img/ILLAPEL.png"

function Hero() {
  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" + require("../assets/img/antoine-barres.jpg") + ")"
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="title-brand d-flex justify-content-center align-items-center">
              <img src={logo} alt="Illapel FM Logo" className="img-fluid" />
            </div>
          </Container>
        </div>
        <div
          className="moving-clouds"
          style={{
            backgroundImage: "url(" + require("../assets/img/clouds.png") + ")"
          }}
        />
      </div>
    </>
  );
}

export default Hero;
