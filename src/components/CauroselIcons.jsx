
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Icons0 from "../assets/0 COOK MEDICAL.png";
import Icons1 from "../assets/1 QUANTA.png";
import Icons2 from "../assets/2 SEEGEN.png";
import Icons3 from "../assets/3 ALLIUM.png";
import Icons4 from "../assets/4 SPATZ.png";
import Icons5 from "../assets/5 ANX.png";
import Icons6 from "../assets/6 CAPSOVISION.png";
import Icons7 from "../assets/7 ZEPHYR.png";
import Icons8 from "../assets/8 OVESCO.png";
import Icons9 from "../assets/9 DANUMED.png";
import Icons10 from "../assets/10 VIGEO.png";

const CarouselIcons = () => {
  const icons = [
    Icons0, Icons1, Icons2, Icons3, Icons4, Icons5, Icons6, Icons7, Icons8, Icons9, Icons10
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 10
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };

  return (
    <>
    <div className="w-auto m-auto bg-transparent pt-20 pb-8">
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        showDots={false}
        arrows={false}
      >
        {icons.map((icon, index) => (
          <div key={index} className="flex justify-center items-center p-2">
            <img
              src={icon}
              alt=""
              className="h-30 w-50 object-contain"
            />
          </div>
        ))}
      </Carousel>
    </div>
    </>
  );
};

export default CarouselIcons;
