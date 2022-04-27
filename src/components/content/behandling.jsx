import data from "../../assets/text.json";
import { Col, Row } from "react-bootstrap";

const Behandling = () => {
  return (
    <div>
      <div>
        {data.Behandlinger.map((item, index) => (
          <Row id="card" key={item.id} className="py-md-5">
            <Col md={6} className={"pt-md-5 " + item.textOrder}>
              <span>{item.time}</span>
              <div className="d-flex gap-3">
                <h3>
                  {item.name} <br />
                  <span>{item.subtitle}</span>
                </h3>
                <div className="pris">
                  <p>{item.price}</p>
                </div>
              </div>

              <p className="muted">{item.description}</p>
              <a href="/">
                bestil tid <i class="bx bx-chevron-right"></i>
              </a>
            </Col>

            <Col md={6} className={item.imgOrder}>
              <img className="vector" src={item.image} alt="" />
            </Col>
          </Row>
        ))}
      </div>
    </div>
  );
};

export default Behandling;
