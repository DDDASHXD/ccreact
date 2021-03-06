import data from "../../assets/text.json";
import { Col, Row } from "react-bootstrap";

const Behandling = () => {
  return (
    <>
      {data.Behandlinger.map((item, index) => (
        <Row id="card" key={item.id} className="py-md-3 m-0 justify-content-center ">

          <Col xs={12} md={5} className={"pt-md-5 p-0 ps-2 ps-md-0 " + item.textOrder}>
            <span>{item.time}</span>
            <div className="d-flex gap-0">
              <h3 className="m-0 pt-3">
                {item.name} <br />
                <span>{item.subtitle}</span>
              </h3>
              <div className="pris">
                <p>{item.price}</p>
              </div>
            </div>

            <p className="muted">{item.description}</p>
            <a className="text-decoration-none" target="_blank" href="/bestilling">
              Bestil tid <i class="bx bx-chevron-right"></i>
            </a>
          </Col>

          <Col xs={12} md={5} className={" justify-content-center d-flex " + item.imgOrder}>

            <img className="vector pt-4 px-3" src={item.image} alt="" />
          </Col>
        </Row>
      ))}
    </>
  );
};

export default Behandling;
