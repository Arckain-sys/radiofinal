import React, { forwardRef } from 'react';
import { Container } from 'react-bootstrap';
import backgroundImage from 'C:/Users/Abel/Desktop/code/radiofinal/src/assets/img/tvback.jpg';

const TVSection = forwardRef((props, ref) => {
  return (
    <section ref={ref} className="page-header section-dark" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', position: 'relative' }}>
      <div className="overlay" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'black', opacity: 0.5 }}></div>
      <Container>
        <div className="title-brand d-flex justify-content-center align-items-center">
              <img src={require("C:/Users/Abel/Desktop/code/radiofinal/src/assets/img/telelogo.png")} alt="Tele 8 Logo" className="img-fluid" />
        </div>
            
        <iframe
          title="TV Stream"
          width="100%"
          height="625"
          src="https://sthd-player.cl/video/index.php?s=rauleduardo493"
          frameborder="1"
          allow="autoplay; encrypted-media"
          allowFullScreen
          style={{ position: 'relative', zIndex: 1, marginTop: '5%'}}
        />
      </Container>
    </section>
  );
});

export default TVSection;





