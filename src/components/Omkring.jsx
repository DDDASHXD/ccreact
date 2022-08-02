import "../style/omkring.scss";
import { Row, Col, Image } from "react-bootstrap";
import data from "../assets/text.json";


const Omkring = () => {

  return (
    <section className="omkring  container-fluid py-2 py-md-5 " id="nav-omkring">
      <Row className="justify-content-center py-4  m-0">
        <Col xs={11} md={6} className="omkring__textarea">
          <span className="subtitle">Omkring</span>
          <h2 className="title">Coach Kolding</h2>
          <hr />
          <p >{data.omkring.text}</p>
          {/* kontakt knap */}
        </Col>

        {/* <Col xs={12}>
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
        </Col> */}

      </Row>

    </section >
  );
};
export default Omkring;
