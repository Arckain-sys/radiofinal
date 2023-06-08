import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark py-2">
      <Container>
        <p className="text-center text-muted">
          &copy; {new Date().getFullYear()} Illapel FM. Todos los derechos reservados. Contacto: director@illapelfm.cl
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
