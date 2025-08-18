import { Container, Row, Col } from "react-bootstrap";

export const Footer = () => {

  const year = new Date().getFullYear()
  
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <span>Catalano Resi Martin</span>
          </Col>
          <Col size={12} sm={6} className="pt-4 text-center text-sm-end footer-icon-end">
            <div className="social-icon-new">
              <a href="https://www.linkedin.com/in/martin-catalano-resi/"><img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/1024px-LinkedIn_icon.svg.png'} alt="linkedin icon" /></a>
            </div>
            <p>&copy; {year} developed by Martín Catalano Resi. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
