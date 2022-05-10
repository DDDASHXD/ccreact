import "../style/omkring.scss";
import { Row, Col, Image } from "react-bootstrap";
import data from "../assets/text.json";


const Omkring = () => {

  return (
    <section className="omkring section container-fluid p-0 " id="nav-omkring">
      <Row className="d-flex p-0  justify-content-center">







        <Col xs={12} md={7} lg={10} className="p-0">
          <Row className="pt-5">
            <Col xs={12} className="omkring__textarea pt-4">
              <span className="subtitle">Omkring</span>
              <h2 className="title">Coach Kolding</h2>
              <hr />
              <p className="col-8 mx-auto">{data.omkring.text}</p>
              {/* kontakt knap */}
            </Col>

            <Col>
              <figure>
                <Row className=" g-0 pt-5">
                  <Col className="d-none d-md-block" md={6}>
                    <Image
                      loading="lazy"
                      className="img-1"
                      src={data.omkring["room-img"]}
                      alt=""
                    />
                  </Col>

                  <Col className="d-none d-md-block" md={6}>
                    <Image
                      loading="lazy"
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
    </section >
  );
};
export default Omkring;
