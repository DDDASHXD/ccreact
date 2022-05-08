import "../style/footer.scss";
import { Col, Row } from "react-bootstrap";
import data from "../assets/text.json";

const Footer = () => {
  return (
    <footer className="footer container-fluid p-0">
      <Row className="p-5 ">
        <Col md={6} className="">
          <Row className=" text-center">

            <h2 className="title">{data.footer.justdiv.title}</h2>


            <Col className="px-5">
              <p>{data.footer.justdiv.websiteInfo}</p>
            </Col>
            <Col
              xs={12}
              className=" footer__icons d-flex justify-content-center gap-1"
            >
              {data.footer.justdiv.social.map((item, index) => (
                <a href={item.href}>
                  <i className={"bx " + item.class}></i>

                </a>
              ))}
            </Col>
          </Row>
        </Col>

        <Col md={6}>
          <Row className="d-flex justify-content-end gap-5">
            <Col md={5}>
              <h3>Firma oplysninger</h3>
              <hr className="footer__hr" />
              <ul>
                <li className="footer__list">
                  <a className="footer__a"
                    target="_blank"
                    href="/https://datacvr.virk.dk/enhed/virksomhed/36324465?fritekst=36324465&sideIndex=0&size=10"
                  >
                    CVR-nr.:  36 32 44 65
                  </a>
                </li>
                <br />
                <li className="footer__list">
                  Betaling: over MobilePay
                </li>
                <br />
                <li className="footer__list">

                  <a href="tel:+4532701494" className="footer__a"> Tlf: 32 70 14 94</a>
                </li>
                <br />
                <li className="footer__list">
                  <a className="footer__a"
                    href="/https://goo.gl/maps/2Xh9Z3CRwMDnqmPg7"
                    target="_blank" rel="noopener noreferrer"
                  >
                    Adresse:    Grydhøj 16, <br /> 6000 Kolding
                  </a>
                </li>
              </ul>
            </Col>

            <Col md={5} className="">
              <h3>Andre muligheder</h3>
              <hr className="footer__hr" />
              <ul>
                <li className="footer__list">
                  <a
                    className="footer__link footer__a" target="_blank" rel="noopener noreferrer"
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
                    className="footer__link footer__a" target="_blank" rel="noopener noreferrer"
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
