import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";
import { FaTelegram, FaYoutube } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { GoGoal } from "react-icons/go";
function Footer() {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#eeeeee"
          fillOpacity="1"
          d="M0,160L48,154.7C96,149,192,139,288,154.7C384,171,480,213,576,213.3C672,213,768,171,864,133.3C960,96,1056,64,1152,64C1248,64,1344,96,1392,112L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <footer>
        <Container>
          <Row>
            <Col>
              <p className="footer-desc">
                <GoGoal />
                حس شیرین و تجربه بهتر یادگیری برنامه نویسی وب رو با ما تجربه
                کنید{" "}
              </p>
            </Col>
            <Col className="footer-contact">
              <span>راه های ارتباطی ما :</span>
              <AiFillInstagram size={"23px"} />
              <FaTelegram size={"20px"} />
              <FaYoutube size={"23px"} />
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}
export default Footer;
