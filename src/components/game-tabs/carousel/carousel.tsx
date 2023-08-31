import Slider from "react-slick";
import { Game } from "../../../types/types";

type CarouselProps = {
  game: Game;
};

const Carousel = ({ game }: CarouselProps) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {game.screenshots.map((screen) => {
        return (
          <div>
            <img src={screen.image} alt={`скрин_${String(screen.id)}`} />
          </div>
        );
      })}
    </Slider>
  );
};
export default Carousel;
