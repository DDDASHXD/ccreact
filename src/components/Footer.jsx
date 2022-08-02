import "../style/footer.scss";
import { Col, Row } from "react-bootstrap";
import data from "../assets/text.json";

const Footer = () => {
  return (
    <footer className="footer  container-fluid p-0">
      <Row className=" py-3 m-0 justify-content-center">
        <Col xs={12} sm={8} md={6} className="p-lg-4">
          <Row className=" text-center">

            <h2 className="title m-0">{data.footer.justdiv.title}</h2>


            <Col className="px-md-5 ">
              <p className="footer__justdiv-text px-1 muted">{data.footer.justdiv.websiteInfo}</p>
            </Col>
            <Col
              xs={12}
              className=" footer__icons d-flex justify-content-center gap-3"
            >
              {data.footer.justdiv.social.map((item, index) => (
                <a href={item.href}>
                  <i className={"bx footer__bx " + item.class}></i>

                </a>
              ))}
            </Col>
          </Row>
        </Col>
        <Col xs={12} md={6} className="container pt-4  pt-lg-5 
         text-center text-lg-start">
          {/* <!--Grid row--> */}
          <Row className="m-0 gap-4  justify-content-center">
            {/* <!--Grid column--> */}
            <Col xs={12} sm={5} md={5} className=" mb-4 mb-md-0">
              <h5 className="">Firma oplysninger</h5>
              <hr className="footer__hr" />
              <ul class="list-unstyled mb-0">
                <li>
                  CVR-nr.:  36 32 44 65
                </li>
                <br />
                <li>
                  Betaling: over MobilePay
                </li>
              </ul>
            </Col>
            {/* <!--Grid column--> */}



            {/* <!--Grid column--> */}
            <Col xs={12} sm={5} md={5} class=" mb-4 mb-md-0">
              <h5 class=" mb-0">Andre muligheder</h5>
              <hr className="footer__hr" />

              <ul class="list-unstyled">
                <li>
                  <a
                    className="foot-a" target="_blank" rel="noreferrer"
                    href="https://nlphuset.dk/?gclid=Cj0KCQjwiNSLBhCPARIsAKNS4_fBA4zSqv9zIun89VW9gSeHsIPOv1rAGwCZVaGB5sQCYOzLRGwtszYaApkZEALw_wcB "
                  >
                    Npl Huset
                  </a>
                  <p className="footer__muted">Lorem ipsum dolor sit amet.</p>
                </li>

                <li>
                  <a
                    className="foot-a" target="_blank" rel="noopener noreferrer"
                    href="https://nada-danmark.dk/netvaerk-og-behandling/behandlernetvaerk/"
                  >
                    Nada - Danmark
                  </a>
                  <p className="footer__muted">Lorem ipsum dolor sit amet.</p>
                </li>

              </ul>
            </Col>
            {/* <!--Grid column--> */}
          </Row>
          {/* <!--Grid row--> */}

        </Col>
      </Row>
      <div className=" footer__copy py-1 px-1 px-md-5 ">
        <p className="footer__muted">©Coach Kolding</p>
        <p className="footer__muted">@Just Div</p>
      </div>


    </footer>
  );
};

export default Footer;

/* <Col md={6}>
          <Row className="pt-5 pt-md-0 d-flex justify-content-end gap-0 text-start text-md-start">
            <Col xs={6} className="" >
              <h3>Firma oplysninger</h3>
              <hr className="footer__hr" />
              <ul className=" p-0 ps-md-3 pe-0">
                <li className="footer__list">
                  <a className="footer__a"
                    target="_blank" rel="noreferrer"
                    href="https://datacvr.virk.dk/enhed/virksomhed/36324465?fritekst=36324465&sideIndex=0&size=10"
                  >
                    - CVR-nr.:  36 32 44 65
                  </a>
                </li>
                <br />
                <li className="footer__list">
                  - Betaling: over MobilePay
                </li>
                <br />
                <li className="footer__list">

                  <a href="tel:+4532701494" className="footer__a">- Tlf: 32 70 14 94</a>
                </li>
                <br />

              </ul>
            </Col> */


/* <Col xs={6} className="">
              <h3>Andre muligheder</h3>
              <hr className="footer__hr" />
              <ul className="p-0 ps-md-3 pe-5">
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
                    className="footer__link footer__a" target="_blank" rel="noreferrer"
                    href="https://nlphuset.dk/?gclid=Cj0KCQjwiNSLBhCPARIsAKNS4_fBA4zSqv9zIun89VW9gSeHsIPOv1rAGwCZVaGB5sQCYOzLRGwtszYaApkZEALw_wcB "
                  >
                    Npl Huset
                  </a>
                  <p className="footer__muted">
                    mutet text der forklare hvad linket fører hen til
                  </p>
                </li>
              </ul>
            </Col> */
/* </Row>
        </Col>

      </Row> */
