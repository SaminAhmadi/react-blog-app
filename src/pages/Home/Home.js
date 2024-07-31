import { useEffect, useState } from "react";
import MyNav from "../../components/Nav/MyNav";
import ArticleItem from "../../components/articleItem/articleItem";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../../components/Footer/Footer";
import "./Home.css";
import Hero from "../../components/hero/Hero";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import SwiperButton from "../../components/SwiperButton/SwiperButton";
import CourseItem from "../../components/course/CourseItem";
import HeroBox from "../../components/HeroBox/HeroBox";
import { MdArticle } from "react-icons/md";
import { ImBooks } from "react-icons/im";
import { FaUserLarge, FaCode } from "react-icons/fa6";
import { BsFillSkipEndFill } from "react-icons/bs";

function Home() {
  const [article, setArticle] = useState([]);
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost/react/api/articles/?page=1&limit=6")
      .then((response) => setArticle(response.data.data));
    axios
      .get("http://localhost/react/api/courses/?page=1&limit=6")
      .then((response) => setCourses(response.data.data));
  }, []);
  return (
    <>
      <MyNav />
      <Hero />
      <Container>
        <Row className="flex-column align-items-center justify-content-center m-5 py-5">
          <Col className="col-12 col-md-6" data-aos="fade-up-right">
            <h2 className="hero-title">آمار ها باعث افتخار ما هستند</h2>
            <Row className="justify-content-center row-cols-1 row-cols-xl-2 gy-4">
              <Col>
                <HeroBox title="تعداد دانشجو" count={3500}>
                  <FaUserLarge size={"35px"} color="#16a89f" />
                </HeroBox>
              </Col>
              <Col>
                <HeroBox title="تعداد مقاله" count={960}>
                  <MdArticle size={"35px"} color="#16a89f" />
                </HeroBox>
              </Col>
              <Col>
                <HeroBox title="تعداد دوره" count={19}>
                  <ImBooks size={"35px"} color="#16a89f" />
                </HeroBox>
              </Col>
              <Col>
                <HeroBox title="پروژه موفق" count={15}>
                  <FaCode size={"35px"} color="#16a89f" />
                </HeroBox>
              </Col>
            </Row>
            <p className="start-learning">
              <b>شروع آموزش</b>
              <BsFillSkipEndFill size={"40px"} />
            </p>
          </Col>
        </Row>
        <Row className="py-5">
          <Swiper
            className="swiperCustomStyle"
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            slidesPerView={4}
            spaceBetween={30}
            breakpoints={{
              1200: {
                slidesPerView: 4,
              },
              992: { slidesPerView: 3 },
              768: {
                slidesPerView: 2,
              },
              500: {
                slidesPerView: 1,
              },
            }}
          >
            <div className="swiperTopSection">
              <h2 className="sectionTitle">جدیدترین دوره ها</h2>
              <SwiperButton />
            </div>
            {courses.map((course) => (
              <SwiperSlide>
                <CourseItem {...course} key={course.id} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Row>
        <Row className="py-3">
          <Swiper
            className="swiperCustomStyle"
            autoplay={{
              delay: 3000,
              disableOnInteraction: true,
            }}
            modules={[Autoplay]}
            slidesPerView={4}
            spaceBetween={30}
            breakpoints={{
              1200: {
                slidesPerView: 4,
              },
              992: { slidesPerView: 3 },
              768: {
                slidesPerView: 2,
              },
              500: {
                slidesPerView: 1,
              },
            }}
          >
            <div className="swiperTopSection">
              <h2 className="sectionTitle">جدیدترین مقالات</h2>
              <SwiperButton />
            </div>
            {article.map((articles) => (
              <SwiperSlide>
                <ArticleItem {...articles} key={articles.id} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
export default Home;
