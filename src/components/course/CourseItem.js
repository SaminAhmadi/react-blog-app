import "./CourseItem.css";
import { FaUsers } from "react-icons/fa";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";

function CourseItem({
  image,
  title,
  teacher,
  description,
  studentCount,
  mainPrice,
}) {
  return (
    <div className="courseCardWrapper">
      <div className="courseCardImage">
        <img src={image} alt="javascript" className="courseImage" />
        <p>
          <FaUsers size={"20px"} />
          <span>{studentCount}</span>
        </p>
      </div>
      <div className="courseCardContent">
        <h5 className="courseName">{title}</h5>
        <p className="courseDescription">{description}</p>
      </div>
      <div className="courseCardTeacher">
        <p>
          <FaChalkboardTeacher size={"25px"} />
          مدرس : {teacher}
        </p>
      </div>
      <div className="courseCardFooter">
        <p>
          <button>
            <b>ثبت نام دوره</b>
          </button>
        </p>
        <p>
          <FaDollarSign size={"25px"} />
          <b>{mainPrice}</b>
        </p>
      </div>
    </div>
  );
}
export default CourseItem;
