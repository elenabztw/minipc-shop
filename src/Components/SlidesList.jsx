import { useContext } from "react";
import { SliderContext } from "./Slider";
import Slide from "./Slide";
import "./style.css";

const SlidesList = () => {
  const { currentSlide, items } = useContext(SliderContext);

  return (
    <div
      className="slide-list"
      style={{ transform: `translateX(-${currentSlide * 100}%)` }}
    >
      {items.map((slide, index) => (
        <Slide key={index} data={slide} />
      ))}
    </div>
  );
};

export default SlidesList;
