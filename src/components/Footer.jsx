import "../style/footer.scss";
import { Col, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="footer container-fluid p-0">
      <Row className="p-5 ">
        <Col md={4} className="">
          <Row className=" d-flex justify-content-center text-center">
            <h2 className="title">Website Creators</h2>
            <div className="footer__icons d-flex justify-content-center gap-1">
              <i className="bx bx-linkedin"></i>
              <i className="bx bx-facebook"></i>
              <i className="bx bx-linkedin"></i>
              <i className="bx bx-linkedin"></i>
              <i className="bx bx-linkedin"></i>
            </div>
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
                  Adresse: <br />
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
