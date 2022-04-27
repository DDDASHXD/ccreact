import "../style/footer.scss";
import { Col, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="footer container-fluid p-0">
      <Row>
        <Col md={4} className="row">
          <h2 className="title">Website Creators</h2>
          <div className="footer__icons">
            <i className="bx bx-linkedin"></i>
            <i className="bx bx-linkedin"></i>
            <i className="bx bx-linkedin"></i>
            <i className="bx bx-linkedin"></i>
            <i className="bx bx-linkedin"></i>
          </div>
        </Col>

        <Col md={8}>
          <Row>
            <Col>
              <h3>Firma oplysninger</h3>
              <ul>
                <li>CVR-nr.: 36 32 44 65</li>
                <li>Betaling: over mobilpay efter behandling.</li>
              </ul>
            </Col>
            <Col>
              <h3>Andre muligheder</h3>
              <ul>
                <li>
                  <a href="https://nada-danmark.dk/netvaerk-og-behandling/behandlernetvaerk/">Nada - Danmark</a>
                  <p>mutet text der forklare hvad linket fører hen til</p>
                </li>
                <li>
                  <a href="https://nlphuset.dk/?gclid=Cj0KCQjwiNSLBhCPARIsAKNS4_fBA4zSqv9zIun89VW9gSeHsIPOv1rAGwCZVaGB5sQCYOzLRGwtszYaApkZEALw_wcB ">Npl Huset</a>
                  <p>mutet text der forklare hvad linket fører hen til</p>
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
