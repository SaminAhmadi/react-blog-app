import MyNav from "../../components/Nav/MyNav";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./AddArticle.css";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

function AddArticle() {
  const [formData, setFormData] = useState([]);
  const navigator = useNavigate();
  let formHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  let addArticle = () => {
    Swal.fire({
      icon: "success",
      title: "مقاله ساخته شد",
    });
    axios.post("http://localhost/react/api/articles/", formData);
    resetFormData();
    navigator("/");
  };
  let resetFormData = () => {
    setFormData({
      title: "",
      description: "",
      image: "",
      catefgory: "",
      writter: "",
      readingTime: "",
    });
  };
  return (
    <>
      <MyNav />
      <div className="form-container" style={{ margin: "70px auto" }}>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>عنوان مقاله</Form.Label>
            <Form.Control
              value={formData.title}
              type="text"
              placeholder="عنوان مقاله را وارد کنید "
              name="title"
              onChange={formHandler}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label> توضیح کوتاه</Form.Label>
            <Form.Control
              value={formData.description}
              type="text"
              placeholder="یه توضیح کوتاه درباره ی مقاله بنویسید"
              name="description"
              onChange={formHandler}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label> نویسنده مقاله </Form.Label>
            <Form.Control
              value={formData.writter}
              type="text"
              placeholder="نام نویسنده مقاله را بنویسید "
              name="writter"
              onChange={formHandler}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label> موضوع مقاله </Form.Label>
            <Form.Control
              value={formData.category}
              type="text"
              placeholder="موضوع مقاله را بنویسید "
              name="category"
              onChange={formHandler}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label> عکس مقاله </Form.Label>
            <Form.Control
              value={formData.image}
              type="text"
              placeholder="آدرس عکس مقاله را بنویسید "
              name="image"
              onChange={formHandler}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label> مدت زمان خواندن </Form.Label>
            <Form.Control
              value={formData.readingTime}
              type="number"
              name="readingTime"
              onChange={formHandler}
            />
          </Form.Group>
          <Button className="submitBtn" type="button" onClick={addArticle}>
            ساخت مقاله
          </Button>
        </Form>
      </div>
      <Footer />
    </>
  );
}
export default AddArticle;
