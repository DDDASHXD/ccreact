import "../style/behandlinger.scss";
import { Row, Container } from "react-bootstrap";
import Behandling from "./content/behandling";

const Behandlinger = () => {
  return (
    <section className="behandlinger section" id="nav-behandlinger">
      <Container >
        <h2 className="title pt-md-4">Behandlinger</h2>
        <Row className="  px-3 px-md-0 behandlinger__data d-flex justify-content-center ">
          <Behandling />
        </Row>
      </Container>
    </section>
  );
};
export default Behandlinger;
