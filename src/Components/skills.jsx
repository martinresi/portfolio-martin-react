import skills1 from "../assets/img/frontend.png";
import skills2 from "../assets/img/backend.png";
import skills3 from "../assets/img/webdesign.png";
import skills4 from "../assets/img/mobiledesign.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Habilidades</h2>
                        <p>“Continuaré mejorando mis habilidades explorando nuevos lenguajes de programación y desarrollando proyectos web diversos.”</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={skills1} alt="Image" />
                                <h5>Front-end</h5>
                            </div>
                            <div className="item">
                                <img src={skills2} alt="Image" />
                                <h5>Back-end</h5>
                            </div>
                            <div className="item">
                                <img src={skills3} alt="Image" />
                                <h5>Diseño Web</h5>
                            </div>
                            <div className="item">
                                <img src={skills4} alt="Image" />
                                <h5>Diseño móvil</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
