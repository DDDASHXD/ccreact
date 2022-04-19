import "../style/footer.scss";
import { Col, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="footer container-fluid p-0">
      <Row>
        <Col md={4} className="row">
          <h2 className="title">Website Creators</h2>
          <div className="footer__icons">
            <i className="bx bx-linkedin"></i>
            <i className="bx bx-linkedin"></i>
            <i className="bx bx-linkedin"></i>
            <i className="bx bx-linkedin"></i>
            <i className="bx bx-linkedin"></i>
          </div>
        </Col>

        <Col md={8}>
          <Row>
            <Col>
              <h3>conatct info</h3>
            </Col>
            <Col>
              <h3>Andre muligheder</h3>
              <ul>
                <li>
                  <a href=""></a>
                </li>
                <li>
                  <a href=""></a>
                </li>
              </ul>
            </Col>
          </Row>
        </Col>
      </Row>

      <Col xs={12} className="footer__copy px-5 py-1">
        <p>©Coach Kolding</p>
        <p>@Dash Sulutions</p>
      </Col>
    </footer>
  );
};

export default Footer;
