import "./SwiperButton.css";
import { useSwiper } from "swiper/react";
import { GrNext, GrPrevious } from "react-icons/gr";
function SwiperButton() {
  const swiper = useSwiper();
  return (
    <div className="swiperButtons">
      <button onClick={() => swiper.slidePrev()}>
        <GrNext size={"30px"} />
      </button>
      <button onClick={() => swiper.slideNext()}>
        <GrPrevious size={"30px"} />
      </button>
    </div>
  );
}
export default SwiperButton;
