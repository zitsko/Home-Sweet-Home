import Container from "react-bootstrap/Container";
import { Navbar, Button } from "react-bootstrap";

function ContainerOutsideExample() {
  return (
    <Container>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#">Home Sweet Home</Navbar.Brand>
        </Container>
        <Button variant="dark">Logout</Button>
      </Navbar>
    </Container>
  );
}

export default ContainerOutsideExample;
