import {Container, Row, Col, Tab, Nav} from "react-bootstrap";
import {Projectcard} from "./projectcard.jsx";
import projImg1 from "../assets/img/delsur2.png";
import projImg2 from "../assets/img/delsur1.png";
import projImg3 from "../assets/img/delsur3.png";
import fortaleza from "../../public/images/fortaleza.svg";
import papelera from "../../public/images/papelera.jpg";
import casa from "../../public/images/casa.jpg";
import resi from "../../public/images/resi.webp";
import digital from "../../public/images/digital.png";
import tsf from "../../public/images/tsf.jpg";
import abogados from "../../public/images/abogados.jpg";

import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

    const projects = [
        {
            title: "Distribuidora",
            description: "Diseño y Desarrollo",
            imgUrl: fortaleza,
            url: 'https://lafortaleza.com.ar',
        },
        {
            title: "Distribuidora",
            description: "Diseño y Desarrollo",
            imgUrl: papelera,
            url: 'https://papeleralfortaleza.com.ar',
        },
        {
            title: "Distribuidora",
            description: "Diseño y Desarrollo",
            imgUrl: casa,
            url: 'https://inmobiliaria-delsur.com.ar/propiedades',
        },
    ];
    const projects2 = [
        {
            title: "PortFolio",
            description: "Diseño y Desarrollo",
            imgUrl: resi,
            url: 'https://corpresi.com/',
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: digital,
            url: 'https://digitalpower.ar/',
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: tsf,
            url: 'https://tsffront.digitalpower.ar',
        },
    ];
    const projects3 = [
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: abogados,
            url: 'https://crippaabogados.com.ar/',
        },
        {
            title: "Editorial",
            description: "Nueva Libreria",
            imgUrl: 'https://digitalpower.ar/images/nl.png',
            url: 'https://nuevalibreria.com.ar'
        },
        {
            title: "Template",
            description: "Interior Design",
            imgUrl: 'https://digitalpower.ar/images/interiores.png',
            url: 'https://interiores.digitalpower.ar/'
        },
    ];


    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({isVisible}) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2 className='text-center w-100'>Proyectos</h2>
                                    <p>“Estos son algunos de mis proyectos en internet. Dedico todo mi esfuerzo a cada
                                        uno para satisfacer las necesidades de mis clientes y garantizar que queden
                                        satisfechos con el trabajo realizado.”</p>
                                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                        <Nav variant="pills"
                                             className="nav-pills mb-5 justify-content-center align-items-center"
                                             id="pills-tab">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">Pagina N°1</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">Pagina N°2</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="third">Pagina N°3</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content id="slideInUp"
                                                     className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                            <Tab.Pane eventKey="first">
                                                <Row>
                                                    {
                                                        projects.map((project, index) => {
                                                            return (
                                                                <Projectcard
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second">
                                                <Row>
                                                    {
                                                        projects2.map((project, index) => {
                                                            return (
                                                                <Projectcard
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>

                                            </Tab.Pane>
                                            <Tab.Pane eventKey="third">
                                                <Row>
                                                    {
                                                        projects3.map((project, index) => {
                                                            return (
                                                                <Projectcard
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>

        </section>
    )
}
