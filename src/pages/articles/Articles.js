import { useEffect, useState } from "react";
import MyNav from "../../components/Nav/MyNav";
import "./Articles.css";
import axios from "axios";
import { Container, Row, Col, Form, Alert } from "react-bootstrap";
import ArticleItem from "../../components/articleItem/articleItem";
import Accordion from "react-bootstrap/Accordion";
import { FaSort } from "react-icons/fa6";
import "./Articles.css";
import Footer from "../../components/Footer/Footer";

function Articles() {
  const [article, setArticle] = useState([]);
  const [sortType, setSortType] = useState("earliest");
  const [searchKey, setSearchKey] = useState("");

  useEffect(() => {
    if (sortType === "earliest") getArticlesByOrder("desc", "id");
    else if (sortType === "latest") getArticlesByOrder("asc", "id");
    else if (sortType === "longest") getArticlesByOrder("desc", "readingTime");
    else if (sortType === "shortest") getArticlesByOrder("asc", "readingTime");
  }, [sortType]);

  const sortHandler = (e) => {
    // console.log(e.target.id);
    setSortType(e.target.id);
  };
  const getArticlesByOrder = (order, column) => {
    axios
      .get(
        `http://localhost/react/api/articles/?order=${order}&column=${column}`
      )
      .then((response) => setArticle(response.data.data));
  };
  const searchInputHandler = (e) => {
    setSearchKey(e.target.value);
  };
  const searchButtonHandler = () => {
    axios
      .get(
        `http://localhost/react/api/articles/?search=${searchKey}&column=category`
      )
      .then((response) => setArticle(response.data.data));
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
                      id="longest"
                      name="sort"
                      label="طولانی ترین"
                      onChange={sortHandler}
                    />
                    <Form.Check
                      type="radio"
                      id="shortest"
                      name="sort"
                      label="کوتاه ترین"
                      onChange={sortHandler}
                    />
                  </Form>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col className="col-12 col-lg-9">
            <Row className="row-cols-1 row-cols-md-2 row-cols-xl-3 gy-4 py-3">
              {article.map((items) => (
                <Col>
                  <ArticleItem key={items.id} {...items} />
                </Col>
              ))}
            </Row>
            {article.length === 0 && (
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
export default Articles;
