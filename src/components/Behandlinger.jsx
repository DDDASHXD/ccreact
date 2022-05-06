import "../style/behandlinger.scss";
import { Row, Col, Container } from "react-bootstrap";
import Behandling from "./content/behandling";

const Behandlinger = () => {
  return (
    <section className="behandlinger pt-md-5 section" id="nav-behandlinger">
      <Container className=" py-md-3">
        <h2 className="title pt-md-3">Behandlinger</h2>
        <Row className="py-md-5  px-3 px-md-0 behandlinger__data d-flex justify-content-center ">
          <Behandling />
        </Row>
      </Container>
    </section>
  );
};
export default Behandlinger;
