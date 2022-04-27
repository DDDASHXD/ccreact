import "../style/omkring.scss";
import { Row, Col, Image } from "react-bootstrap";
import data from "../assets/text.json";

const Omkring = () => {
  return (
    <section className="omkring container-fluid" id="nav-omkring">
      <Row className="p-md-2 d-flex ">
        <Col xs={5} md={5} lg={3} className="p-4 omkring__info">
          <figure>
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
        </Col>

        <Col xs={7} md={7} lg={9} className=" p-5">
          <Row className="p-5">
            <Col xs={12} className="omkring__textarea">
              <span className="subtitle">Omkring</span>
              <h2 className="title">Coach Kolding</h2>
              <hr />
              <p>{data.omkring.text}</p>
              {/* kontakt knap */}
            </Col>

            <Col>
              <figure>
                <Row className=" g-0 pt-5">
                  <Col xs={6} md={6}>
                    <Image
                      className="img-1"
                      src={data.omkring["room-img"]}
                      alt=""
                    />
                  </Col>

                  <Col xs={6} md={6}>
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
