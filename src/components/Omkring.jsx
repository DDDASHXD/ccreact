import "../style/omkring.scss";
import { Row, Col, Image } from "react-bootstrap";
import data from "../assets/text.json";

const Omkring = () => {

  return (
    <section className="omkring container-fluid p-0 pt-md-5" id="nav-omkring">
      <Row className="d-flex p-md-5 p-0 px-3 px-md-0">
        <Col xs={12} md={5} lg={3} className="p-md-4 omkring__info pt-3">
          <row>
            <figure className="col-6 col-md-12">
              <Image
                fluid
                src={data.omkring["lene-img"]}
                alt="Portrat billede af Lene Thomhav"
              />
            </figure>
            <h3>{data.omkring.title}</h3>
            <div className="omkring__list">
              {data.omkring.erfaring.map((item) => (
                <ul>
                  <li>{item}</li>
                </ul>
              ))}
            </div>
          </row>
        </Col>

        <Col xs={12} md={7} lg={9} className="p-0 p-md-5">
          <Row className="p-5">
            <Col xs={12} className="omkring__textarea pt-4">
              <span className="subtitle">Omkring</span>
              <h2 className="title">Coach Kolding</h2>
              <hr />
              <p>{data.omkring.text}</p>
              {/* kontakt knap */}
            </Col>

            <Col>
              <figure>
                <Row className=" g-0 pt-5">
                  <Col className="d-none d-md-block" md={6}>
                    <Image
                      className="img-1"
                      src={data.omkring["room-img"]}
                      alt=""
                    />
                  </Col>

                  <Col className="d-none d-md-block" md={6}>
                    <Image
                      className="img-2"
                      src={data.omkring["home-img"]}
                      alt=""
                    />
                  </Col>
                </Row>
              </figure>
            </Col>
          </Row>
        </Col>
      </Row>
    </section>
  );
};
export default Omkring;
