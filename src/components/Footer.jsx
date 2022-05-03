import "../style/footer.scss";
import { Col, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="footer container-fluid p-0">
      <Row className="p-5 ">
        <Col md={4} className="">
          <Row className="  text-center">
            <span>Just Div</span>
            <h2 className="title">Website Creators</h2>
            <Col className="px-5">
              {" "}
              <p>
                Hjemmesiden er lavet af et lille selvstartet web firma ved navn JustDiv
                betånde af 2 personer. Julie er front end designer og developer og Sebastian er backend developer og har
                <br class="d-none d-md-block" />
                JustDiv laver hjemmesider og grafisk design til alle slags
                virksomheder.
              </p>
              <p>Sebastian Skov NIelsen & Julie Boeriis Thomhav</p>
            </Col>{" "}
            <Col
              xs={12}
              className=" footer__icons d-flex justify-content-center gap-1"
            >
              <i className="bx bx-linkedin"></i>
              <i className="bx bx-facebook"></i>
              <i className="bx bx-linkedin"></i>
              <i className="bx bx-linkedin"></i>
              <i className="bx bx-linkedin"></i>
            </Col>
          </Row>
        </Col>

        <Col md={8}>
          <Row className="d-flex justify-content-end gap-5">
            <Col md={5}>
              <h3>Firma oplysninger</h3>
              <hr />
              <ul>
                <li className="footer__list">
                  <a
                    target="_blank"
                    href="/https://datacvr.virk.dk/enhed/virksomhed/36324465?fritekst=36324465&sideIndex=0&size=10"
                  >
                    CVR-nr.: <br /> 36 32 44 65
                  </a>
                </li>
                <br />
                <li className="footer__list">
                  Betaling: <br /> over MobilePay
                </li>
                <br />
                <li className="footer__list">
                  Tlf: <br />
                  <a href="tel:+4532701494">32 70 14 94</a>
                </li>
                <br />
                <li className="footer__list">
                  Adresse:
                  <a
                    href="/https://goo.gl/maps/2Xh9Z3CRwMDnqmPg7"
                    target="_blank"
                  >
                    Grydhøj 16, 6000 Kolding
                  </a>
                </li>
              </ul>
            </Col>

            <Col md={5} className="">
              <h3>Andre muligheder</h3>
              <hr />
              <ul>
                <li className="footer__list">
                  <a
                    className="footer__link"
                    href="https://nada-danmark.dk/netvaerk-og-behandling/behandlernetvaerk/"
                  >
                    Nada - Danmark
                  </a>
                  <p className="footer__muted">
                    mutet text der forklare hvad linket fører hen til
                  </p>
                </li>
                <li className="footer__list">
                  <a
                    className="footer__link"
                    href="https://nlphuset.dk/?gclid=Cj0KCQjwiNSLBhCPARIsAKNS4_fBA4zSqv9zIun89VW9gSeHsIPOv1rAGwCZVaGB5sQCYOzLRGwtszYaApkZEALw_wcB "
                  >
                    Npl Huset
                  </a>
                  <p className="footer__muted">
                    mutet text der forklare hvad linket fører hen til
                  </p>
                </li>
              </ul>
            </Col>
          </Row>
        </Col>
      </Row>

      <Col xs={12} className="footer__copy px-5 py-1">
        <p>©Coach Kolding</p>
        <p>@Just Div</p>
      </Col>
    </footer>
  );
};

export default Footer;
