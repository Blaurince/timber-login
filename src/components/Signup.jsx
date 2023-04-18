import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import  Col  from "react-bootstrap/Col";
import SignupForm from "./SignupForm";


export default function Signup () {
    return (
      <Container>
        <Row>
            <Col><SignupForm /></Col>
        </Row>
      </Container>
    )
}