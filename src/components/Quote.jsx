import { Container } from "react-bootstrap";
import data from "../assets/text.json";

const Quote = () => {
  return (
    <Container fluid className="d-flex justify-content-center">
      <img
        className="quote"
        src={data.quotes.pippi}
        alt="Det har jeg ikke prøvet før så det kan jeg sagtens. -pippi"
      />
    </Container>
  );
};
export default Quote;
