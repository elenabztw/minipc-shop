import SlideImage from "./SlideImage";
import SlideTitle from "./SlideTitle";
import "./style.css";

const Slide = ({ data: { url, title } }) => (
  <div className="slide">
    <SlideImage src={url} alt={title} />
    <SlideTitle title={title} />
  </div>
);

export default Slide;
