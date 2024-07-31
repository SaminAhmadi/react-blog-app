import "./Courses.css";
import { useEffect, useState } from "react";
import MyNav from "../../components/Nav/MyNav";
import axios from "axios";
import { Container, Row, Col, Form, Alert } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { FaSort } from "react-icons/fa6";
import { MdCategory } from "react-icons/md";
import { FaFilter } from "react-icons/fa";
import CourseItem from "../../components/course/CourseItem";
import Footer from "../../components/Footer/Footer";
function Courses() {
  const [courses, setCourses] = useState([]);
  const [categories, setCategories] = useState("");
  const [sortType, setSortType] = useState("earliest");
  const [searchKey, setSearchKey] = useState("");
  const [courseState, setCourseState] = useState("");

  useEffect(() => {
    if (sortType === "earliest") getCoursesByOrder("desc", "id");
    else if (sortType === "latest") getCoursesByOrder("asc", "id");
    else if (sortType === "expensivest") getCoursesByOrder("desc", "mainPrice");
    else if (sortType === "cheapest") getCoursesByOrder("asc", "mainPrice");
  }, [sortType]);

  useEffect(() => {
    if (categories === "backend") getCoursesByCategory("بک اند");
    else if (categories === "frontend") getCoursesByCategory("فرانت اند");
  }, [categories]);
  useEffect(() => {
    if (courseState === "completed") getCoursesByState("completed");
    else if (courseState === "presell") getCoursesByState("presell");
    else if (courseState === "recording") getCoursesByState("recording");
  }, [courseState]);

  const sortHandler = (e) => {
    // console.log(e.target.id);
    setSortType(e.target.id);
  };
  const getCoursesByOrder = (order, column) => {
    axios
      .get(
        `http://localhost/react/api/courses/?order=${order}&column=${column}`
      )
      .then((response) => setCourses(response.data.data));
  };
  const searchInputHandler = (e) => {
    setSearchKey(e.target.value);
  };
  const searchButtonHandler = () => {
    axios
      .get(
        `http://localhost/react/api/courses/?search=${searchKey}&column=title`
      )
      .then((response) => setCourses(response.data.data));
  };
  const categoryHandler = (e) => {
    setCategories(e.target.value);
  };
  const getCoursesByCategory = (category) => {
    axios
      .get(`http://localhost/react/api/courses/?category=${category}`)
      .then((response) => setCourses(response.data.data));
  };
  const getCoursesByState = (state) => {
    axios
      .get(`http://localhost/react/api/courses/?state=${state}`)
      .then((response) => setCourses(response.data.data));
  };
  const stateHandler = (e) => {
    setCourseState(e.target.value);
  };

  return (
    <>
      <MyNav />
      <Container>
        <div className="searchSection">
          <h1>لیست مقالات</h1>
          <div className="searchBoxContainer">
            <input
              type="text"
              className="searchInput"
              onChange={searchInputHandler}
            />
            <button className="searchButton" onClick={searchButtonHandler}>
              جستجو
            </button>
          </div>
        </div>
        <Row>
          <Col className="col-12 col-lg-3">
            <Accordion alwaysOpen className="py-3">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <FaSort />
                  <b>مرتب سازی</b>
                </Accordion.Header>
                <Accordion.Body>
                  <Form>
                    <Form.Check
                      type="radio"
                      id="earliest"
                      name="sort"
                      label="جدید ترین"
                      onChange={sortHandler}
                    />
                    <Form.Check
                      type="radio"
                      id="latest"
                      name="sort"
                      label="قدیمی ترین"
                      onChange={sortHandler}
                    />
                    <Form.Check
                      type="radio"
                      id="expensivest"
                      name="sort"
                      label="گران ترین"
                      onChange={sortHandler}
                    />
                    <Form.Check
                      type="radio"
                      id="cheapest"
                      name="sort"
                      label="ارزان ترین"
                      onChange={sortHandler}
                    />
                  </Form>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <div className="filterWrapper">
              <div className="filterIcon">
                <MdCategory />
                <b>دسته بندی</b>
              </div>
              <Form>
                <Form.Check
                  type="checkbox"
                  value={"frontend"}
                  label="فرانت اند"
                  onChange={categoryHandler}
                  checked={categories === "frontend" ? true : false}
                />
                <Form.Check
                  type="checkbox"
                  value={"backend"}
                  label="بک اند"
                  onChange={categoryHandler}
                  checked={categories === "backend" ? true : false}
                />
              </Form>
            </div>
            <div className="filterWrapper">
              <div className="filterIcon">
                <FaFilter />
                <b>وضعیت دوره</b>
              </div>
              <Form>
                <Form.Check
                  type="switch"
                  label="تکمیل شده"
                  value="completed"
                  onChange={stateHandler}
                  checked={courseState === "completed" ? true : false}
                />
                <Form.Check
                  type="switch"
                  label="پیش فروش"
                  value="presell"
                  onChange={stateHandler}
                  checked={courseState === "presell" ? true : false}
                />
                <Form.Check
                  type="switch"
                  label="درحال ضبط"
                  value="recording"
                  onChange={stateHandler}
                  checked={courseState === "recording" ? true : false}
                />
              </Form>
            </div>
          </Col>
          <Col className="col-12 col-lg-9">
            <Row className="row-cols-1 row-cols-md-2 row-cols-xl-3 gy-4 py-3">
              {courses.map((course) => (
                <Col>
                  <CourseItem key={course.id} {...course} />
                </Col>
              ))}
            </Row>
            {courses.length === 0 && (
              <Alert variant="warning" className="py-3 gy-4 mt-2">
                <p>مقاله ای با این دسته بندی یافت نشد</p>
              </Alert>
            )}
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
export default Courses;
