import React, { forwardRef } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import logoImage from '../assets/img/casa.png';
import backgroundImage from '../assets/img/header.jpg';
import styles from '../assets/css/ContactSection.module.css';

const ContactSection = forwardRef((props, ref) => {
  return (
    <section ref={ref} className={`page-header section-dark ${styles['overlay']}`} style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', position: 'relative' }}>
  <Container>
    <Row className="align-items-center">
      <Col md={12} className="text-center">
        <div className={styles['image-container']}>
          <Image src={logoImage} alt="About Us" className={styles['logo-image']} />
        </div>
      </Col>
    </Row>
    <Row className="mt-8">
      <Col md={12} className={`text-center ${styles['text-color']}`}>
        <h1 className="text-4xl font-bold mb-4">¡Siempre Fuertes!</h1>
        <p className="text-lg mb-8">
          Más de 25 años junto a ti. Illapel FM es la compañía de telecomunicaciones en primera sintonía en el Valle del Choapa, 4ta región de Chile.
        </p>
        <p className="text-lg mb-8">
          La cercanía, calidez y conexión con nuestros audioescuchas y televidentes son nuestra principal misión.
        </p>
        <p className="text-lg mb-8">
          Disfruta de nuestra variada y entretenida programación en el Canal 8 Illapel o en las señales 96.5 - Illapel, 96.1 - Los Vilos y 105.7 - Salamanca.
        </p>
      </Col>
    </Row>
  </Container>
</section>

  );
});

export default ContactSection;
