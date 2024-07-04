import ImageGallery from 'react-image-gallery';
import ImgHome1 from '../assets/carrousel_medicina_1.jpg';
import ImgHome2 from '../assets/carrousel_medicina_2.jpg';
import ImgHome3 from '../assets/carrousel_medicina_3.jpg';
import 'react-image-gallery/styles/css/image-gallery.css';

const CarouselHome = () => {
  const images = [
    {
      original: ImgHome1,
    },
    {
      original: ImgHome2,
    },
    {
      original: ImgHome3,
    },
  ];

  return (
    <div>
      <ImageGallery items={images} />
    </div>
  );
};

export default CarouselHome;
