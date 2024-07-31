import { Col, Container, Row } from "react-bootstrap";
import "./Hero.css";
import heroimg from "../../assets/images/hero-image.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Hero() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="hero-container">
        <Container>
          <Row className="align-items-center headingRow">
            <Col
              className="col-12 col-md-6"
              style={{ paddingTop: "80px" }}
              data-aos="fade-up-left"
            >
              <img
                src={heroimg}
                alt="webdesign"
                className="hero-img img-fluid"
              />
            </Col>
            <Col>
              <div className="hero-heading_section">
                <h1 className="hero-heading_title">
                  سیر تا پیاز <span>طراحی وب!</span>
                </h1>
                <p>
                  دیگه نیاز نیست مسیر دیگه ای رو بری. هرچیزی که میخوای راجع به
                  وب بدونی و یادبگیری رو اینجا میتونی پیداکنی
                </p>
                <div className="hero-heading_cta">
                  <button>
                    <Link to={"/courses"}>برو به دوره ها</Link>
                  </button>
                </div>
              </div>
            </Col>
            {/* <Col className="col-12 col-md-6" data-aos="fade-up-right">
              <h2 className="hero-title">آمار ها باعث افتخار ما هستند</h2>
              <Row className="justify-content-center row-cols-1 row-cols-xl-2 gy-4">
                <Col>
                  <HeroBox title="تعداد دانشجو" count={3500}>
                    <FaUserLarge size={"35px"} />
                  </HeroBox>
                </Col>
                <Col>
                  <HeroBox title="تعداد مقاله" count={960}>
                    <MdArticle size={"35px"} />
                  </HeroBox>
                </Col>
                <Col>
                  <HeroBox title="تعداد دوره" count={19}>
                    <ImBooks size={"35px"} />
                  </HeroBox>
                </Col>
                <Col>
                  <HeroBox title="پروژه موفق" count={15}>
                    <FaCode size={"35px"} />
                  </HeroBox>
                </Col>
              </Row>
              <p className="start-learning">
                <b>شروع آموزش</b>
                <BsFillSkipEndFill size={"40px"} />
              </p>
            </Col> */}
          </Row>
        </Container>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#eee"
          fillOpacity="1"
          d="M0,192L48,197.3C96,203,192,213,288,197.3C384,181,480,139,576,133.3C672,128,768,160,864,192C960,224,1056,256,1152,256C1248,256,1344,224,1392,208L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
    </>
  );
}
export default Hero;
