import { useEffect, useState, createContext } from "react";
import PropTypes from "prop-types";
import Arrows from "./Controls/Arrows";
import Dots from "./Controls/Dots";
import SlidesList from "./SlidesList";
import { getImages } from "./imagesAPI";
import "./style.css";

export const SliderContext = createContext();

const Slider = ({ width = "100%", height = "100%", autoPlay = false, autoPlayTime = 5000 }) => {
  const [items, setItems] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getImages();
      setItems(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      goToSlide((currentSlide + 1) % items.length);
    }, autoPlayTime);

    return () => clearInterval(interval);
  }, [currentSlide, items.length, autoPlay, autoPlayTime]);

  const goToSlide = (index) => {
    setCurrentSlide((index + items.length) % items.length);
  };

  const handleTouchStart = (e) => setTouchStart(e.touches[0].clientX);

  const handleTouchMove = (e) => {
    if (!touchStart) return;

    const touchEnd = e.touches[0].clientX;
    const delta = touchStart - touchEnd;

    if (delta > 50) goToSlide(currentSlide + 1);
    if (delta < -50) goToSlide(currentSlide - 1);

    setTouchStart(null);
  };

  return (
    <div
      className="slider"
      style={{ width, height }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <SliderContext.Provider
        value={{
          items,
          currentSlide,
          goToSlide,
          changeSlide: (dir) => goToSlide(currentSlide + dir),
          slidesCount: items.length,
          slideNumber: currentSlide,
        }}
      >
        <Arrows />
        <SlidesList />
        <Dots />
      </SliderContext.Provider>
    </div>
  );
};

Slider.propTypes = {
  autoPlay: PropTypes.bool,
  autoPlayTime: PropTypes.number,
  width: PropTypes.string,
  height: PropTypes.string,
};

export default Slider;
