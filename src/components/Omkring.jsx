import "../style/omkring.scss";
import { Row, Col } from "react-bootstrap";
import data from "../assets/text.json";

const Omkring = () => {
  return (
    <section className="omkring container-fluid">
      <Row className="p-md-5 center">
        <Col md={3}>
          <figure>
            <img
              src={data.omkring["lene-img"]}
              alt="Portrat billede af Lene Thomhav"
            />
          </figure>
        </Col>

        <Col md={6} className="omkring__textarea">
          <span className="subtitle">Omkring</span>
          <h2 className="title">Coach Kolding</h2>
          <hr />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
            recusandae quis nemo beatae praesentium asperiores molestiae in sunt
            deleniti modi.
          </p>

          {/* kontakt knap */}
        </Col>
        <Col md={3}>
          <figure>
            <img src={data.omkring["room-img"]} alt="" />
            <img src={data.omkring["home-img"]} alt="" />
          </figure>
        </Col>
      </Row>
    </section>
  );
};
export default Omkring;
