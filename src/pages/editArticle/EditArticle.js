import { useEffect, useState } from "react";
import MyNav from "../../components/Nav/MyNav";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import "./EditArticle.css";

function EditArticle() {
  const [articleData, setArticleData] = useState([]);
  const articleId = useParams().articleId;
  const navigator = useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost/react/api/articles/?id=${articleId}`)
      .then((response) => setArticleData(response.data.data[0]));
  }, [articleId]);
  let formHandler = (e) => {
    setArticleData({ ...articleData, [e.target.name]: e.target.value });
  };
  const editArticleHandler = () => {
    Swal.fire({
      icon: "success",
      title: "مقاله با موفقیت ویرایش شد",
    });
    axios.put(
      `http://localhost/react/api/articles/?id=${articleId}`,
      articleData
    );
    navigator(`/article/${articleId}`);
  };
  return (
    <>
      <MyNav />
      <div className="form-container" style={{ margin: "70px auto" }}>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>عنوان مقاله</Form.Label>
            <Form.Control
              value={articleData.title}
              type="text"
              placeholder="عنوان مقاله را وارد کنید "
              name="title"
              onChange={formHandler}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label> توضیح کوتاه</Form.Label>
            <Form.Control
              value={articleData.description}
              type="text"
              placeholder="یه توضیح کوتاه درباره ی مقاله بنویسید"
              name="description"
              onChange={formHandler}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label> نویسنده مقاله </Form.Label>
            <Form.Control
              value={articleData.writter}
              type="text"
              placeholder="نام نویسنده مقاله را بنویسید "
              name="writter"
              onChange={formHandler}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label> موضوع مقاله </Form.Label>
            <Form.Control
              value={articleData.category}
              type="text"
              placeholder="موضوع مقاله را بنویسید "
              name="category"
              onChange={formHandler}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label> عکس مقاله </Form.Label>
            <Form.Control
              value={articleData.image}
              type="text"
              placeholder="آدرس عکس مقاله را بنویسید "
              name="image"
              onChange={formHandler}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label> مدت زمان خواندن </Form.Label>
            <Form.Control
              value={articleData.readingTime}
              type="number"
              name="readingTime"
              onChange={formHandler}
            />
          </Form.Group>
          <Button
            className="submitBtn"
            type="button"
            onClick={editArticleHandler}
          >
            ویرایش مقاله
          </Button>
        </Form>
      </div>
    </>
  );
}
export default EditArticle;
