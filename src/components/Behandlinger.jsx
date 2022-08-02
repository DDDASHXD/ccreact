import "../style/behandlinger.scss";
import { Row, Col, Container } from "react-bootstrap";
import Behandling from "./content/behandling";

const Behandlinger = () => {
  return (
    <section className="behandlinger container-fluid" id="nav-behandlinger">
      <Container className=" ">
        <h2 className="title pt-md-4">Behandlinger</h2>
        <Row className="gap-5  px-3 px-md-0 behandlinger__data justify-content-center  m-0">
          <Behandling />
        </Row>
      </Container>
    </section>
  );
};
export default Behandlinger;
