import "./HeroBox.css";
import CountUp from "react-countup";
function HeroBox({ title, count, children }) {
  return (
    <>
      <div className="heroBoxContainer">
        <div className="heroBoxHeader">
          {children}
          <b className="heroBoxTitle"> {title}</b>
          <p className="heroBoxCount">
            <CountUp
              start={0}
              end={count}
              duration={3}
              delay={0.5}
              separator=""
            />
          </p>
        </div>
      </div>
    </>
  );
}
export default HeroBox;
