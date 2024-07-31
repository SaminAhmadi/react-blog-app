import Card from "react-bootstrap/Card";
import { BiTimeFive } from "react-icons/bi";
import { TiArrowLeftThick } from "react-icons/ti";
import "./articleItem.css";
import { Link } from "react-router-dom";
function ArticleItem({
  id,
  image,
  title,
  description,
  writter,
  category,
  readingTime,
}) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title style={{ fontFamily: "Yekan" }}>{title}</Card.Title>
        <Card.Text style={{ color: "grey" }} className="card-text">{description}</Card.Text>
        <Link to={`/article/${id}`}>
          <span style={{ fontFamily: "yekan" }} className="read-more">
            ادامه مقاله
          </span>
          <TiArrowLeftThick size={"22px"} style={{ cursor: "pointer" }} />
        </Link>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-between align-items-center py-3">
        <span>نویسنده : {writter}</span>
        <span>
          <BiTimeFive style={{ margin: "1px 3px" }} />
          {readingTime} دقیقه
        </span>
      </Card.Footer>
    </Card>
  );
}
export default ArticleItem;
