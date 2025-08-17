import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/maxiytin.jpg";
import { HashLink } from 'react-router-hash-link';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developers", "Web Designers" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Bienvenido</span>
                <h1>{`Catalano Resi Martin`}
                </h1>
                  <p> Soy Martín Catalano Resi, desarrollador enfocado en soluciones informáticas y diseño de software..
                      <br/>
                      Cuento con experiencia en front-end y back-end, lo que me permite abordar proyectos de forma integral: desde la creación de interfaces intuitivas hasta la implementación de sistemas robustos y escalables.
                    <br/>
                      💡 Me apasiona aprender nuevas tecnologías, experimentar con programación creativa y transformar ideas en proyectos reales que aporten valor.
                      Disfruto especialmente los desafíos donde se combinan la innovación tecnológica, la resolución de problemas y la búsqueda constante de mejorar la experiencia de los usuarios.
                      <br/>
                      🚀 Mi objetivo es seguir creciendo como profesional y contribuir al desarrollo de soluciones tecnológicas modernas, eficientes y creativas.</p>
                  <a href="#connect">
                    <button className="contact-btn" >Contactame </button>
                  </a>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
