import React from "react";
import classnames from "classnames";
import {
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container
} from "reactstrap";
import {BsFacebook, BsTwitter, BsCameraVideo} from "react-icons/bs";


const AudioPlayer = () => (
  <div className="audio-player">
    <audio controls className="audio-player-controls">
      <source src="https://audio.streaminghd.cl:2000/stream/9080/stream" type="audio/mpeg" />
    </audio>
  </div>
);

function IndexNavbar(props) {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <Navbar className={classnames("fixed-top", navbarColor)} expand="lg">
      <Container>
        <div className="navbar-translate d-flex">
          <NavbarBrand
            data-placement="bottom"
            href="/index"
            target="_blank"
            title="Radio Illapel FM"
          >
          EN VIVO
          </NavbarBrand>
          <AudioPlayer/>
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>

        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://twitter.com/illapelfm"
                target="_blank"
                title="Síguenos en Twitter"
              >
                <BsTwitter />
                <p className="d-lg-none"> Twitter</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://facebook.com/radioillapel/"
                target="_blank"
                title="Síguenos en Facebook"
              >
                <BsFacebook/>
                <p className="d-lg-none"> Facebook</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                onClick={props.onContactButtonClick} to="#contact"
              >
              Sobre Nosotros
              </NavLink>
            </NavItem>
            <NavItem>
              <Button
                className="btn-round"
                color="danger"
                onClick={props.onTVButtonClick}
              >
                <BsCameraVideo/> TELE 8 ILLAPEL
              </Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default IndexNavbar;
