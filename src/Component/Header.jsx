import { Navbar , Container, Nav ,NavDropdown,Button } from 'react-bootstrap';


const Header = () => {
  return(
  <Navbar style={{ backgroundColor: '#fddf3c' }}  expand="lg">
  <Container fluid>
    <Navbar.Brand className="mx-4 text-monospace fw-bold" href="#">UBERGRAD</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <NavDropdown className="text-dark fw-bold" title="Countries" id="navbarScrollingDropdown">
          <NavDropdown.Item className="text-dark" href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item className="text-dark" href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown>
        <NavDropdown className="text-dark fw-bold" title="Universities" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown>
        <NavDropdown  className="text-dark fw-bold" title="Caurses" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown>
        <NavDropdown className="text-dark fw-bold" title="Exam" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown>
        <Button  className="mx-4" style={{ backgroundColor: '#f36738',border:'2px solid #f36738',borderRadius:'5rem',width:'120px'}}>SCORE</Button>
        <Button  className="mx-2" style={{ backgroundColor: '#f36738',border:'2px solid #f36738',borderRadius:'5rem',width:'200px' }}>TALK TO COUNSELLOR</Button>
    
      </Nav>
      <Nav>
      <Nav.Link className="fw-bold" >Login</Nav.Link>
      <Nav.Link className="fw-bold mx-3" >SignIn</Nav.Link>
    </Nav>
    </Navbar.Collapse>
    
  </Container>
</Navbar>

  );
}



export default Header;