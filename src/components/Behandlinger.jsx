import "../style/behandlinger.scss";
import data from "../assets/text.json";
import { Row, Col, Container } from "react-bootstrap";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
const Behandlinger = () => {
  return (
    <section className="behandlinger">
      <Container className="">
        <h2 className="title">Behandlinger</h2>
        <Row
          className="behandlinger__data gap-5 justify-content-center"
          xs={12}
          md={7}
        >
          <Col className="order-xs-2 order-md-1 bg-secondary">
            <span>60 min</span>
            <h3>Coachende samtaler</h3>
            <p className="muted">{data.Behandlinger[0].description}</p>
            <a href="/">
              Læs mere <i class="bx bx-chevron-right"></i>
            </a>
          </Col>

          <Col className="order-xs-1 order-md-2 bg-secondary ">
            <figure>
              <img src="" alt="" />
              <figcaption className="pris">500 kr</figcaption>
            </figure>
          </Col>
        </Row>

        <Row
          className=" behandlinger__data justify-content-center gap-5"
          xs={12}
          md={7}
        >
          <Col xs={{ order: 2 }}>
            <span>60 min</span>
            <h3>Coachende samtaler</h3>
            <p className="muted">
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit, sed quia non numquam eius modi
              tempora incidunt ut. labore et dolore magnam aliquam quaerat
              voluptatem. Excepteur sint occaecat cupidatat non proident.
              {/* {data.Behandlinger[1]} */}
            </p>
            <a href="/">
              Læs mere <i class="bx bx-chevron-right"></i>
            </a>
          </Col>

          <Col xs={{ order: 1 }}>
            <figure>
              <img src="" alt="" />
              <figcaption className="pris">500 kr</figcaption>
            </figure>
          </Col>
        </Row>

        <Row className="behandlinger__data gap-5 justify-content-center">
          <Col xs={{ order: 1 }}>
            <span>60 min</span>
            <h3>Coachende samtaler</h3>
            <p className="muted">
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit, sed quia non numquam eius modi
              tempora incidunt ut. labore et dolore magnam aliquam quaerat
              voluptatem. Excepteur sint occaecat cupidatat non proident.
              {/* {data.Behandlinger[1]} */}
            </p>
            <a href="/">
              Læs mere <i class="bx bx-chevron-right"></i>
            </a>
          </Col>

          <Col xs={{ order: 2 }}>
            <figure>
              <img src="" alt="" />
              <figcaption className="pris">500 kr</figcaption>
            </figure>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Behandlinger;
