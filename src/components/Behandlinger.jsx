import "../style/behandlinger.scss";
import data from "../assets/text.json";
import { Row, Col, Container } from "react-bootstrap";
import Behandling from "./content/behandling";

const Behandlinger = () => {
  return (
    <section className="behandlinger pt-md-5">
      <Container className=" py-md-3">
        <h2 className="title  pt-md-3">Behandlinger</h2>

        <Row
          className="py-md-5  px-3 px-md-0 behandlinger__data d-flex justify-content-center gap-5"
          xs={12}
          md={12}
        >
          <Behandling />
          {/* <Col md={5} className=" behandlinger__card order-xs-2 order-md-1">
            <figcaption className="pris">
              {data.Behandlinger[0].price}
            </figcaption>

            <span>{data.Behandlinger[0].time}</span>
            <h3>{data.Behandlinger[0].name}</h3>
            <p className="muted">{data.Behandlinger[0].description}</p>
            <a href="/">
              bestil tid <i class="bx bx-chevron-right"></i>
            </a>
          </Col>

          <Col md={5} className=" order-xs-1 order-md-2  ">
            <figure className="behandlinger__figure">
              <img className="vector" src={data.Behandlinger[0].image} alt="" />
            </figure>
          </Col> */}
        </Row>

        <Col className="justify-content-center d-flex">
          {data.Behandlinger.map((behandling) => (
            <div className="price"></div>
          ))}
        </Col>

        {/* <Row
          className=" behandlinger__data justify-content-center gap-5"
          xs={12}
          md={7}
        >
          <Col xs={{ order: 2 }}>
            <span>{data.Behandlinger[1].time}</span>
            <h3>{data.Behandlinger[1].name}</h3>
            <p className="muted">{data.Behandlinger[1].description}</p>
            <a href="/">
              Læs mere <i class="bx bx-chevron-right"></i>
            </a>
          </Col>

          <Col xs={{ order: 1 }}>
            <figure>
              <img src="" alt="" />
              <figcaption className="pris">
                {data.Behandlinger[1].price}
              </figcaption>
            </figure>
          </Col>
        </Row>

        <Row className="behandlinger__data gap-5 justify-content-center">
          <Col xs={{ order: 1 }}>
            <span>{data.Behandlinger[2].time}</span>
            <h3>{data.Behandlinger[2].name}</h3>
            <p className="muted">{data.Behandlinger[2].description}</p>
            <a href="/">
              Læs mere <i class="bx bx-chevron-right"></i>
            </a>
          </Col>

          <Col xs={{ order: 2 }}>
            <figure>
              <img src="" alt="" />
              <figcaption className="pris">
                {data.Behandlinger[2].price}
              </figcaption>
            </figure>
          </Col>
        </Row> */}
      </Container>
    </section>
  );
};
export default Behandlinger;
