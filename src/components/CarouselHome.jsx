
import ImageGallery from 'react-image-gallery';
import ImgHome1 from '../assets/Img _ carrusel 1550x509-1.png';
import ImgHome2 from '../assets/Img _ carrusel 1550x509-2.png';
import ImgHome3 from '../assets/Img _ carrusel 1550x509-3.png'

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
    <div className='w-auto m-auto pt-24 pb-10 custom-image-gallery'>
      <ImageGallery items={images} showPlayButton={false} autoPlay={true} slideInterval={4000} showFullscreenButton={false} showNav={false} showBullets={true} />
    </div>
  );
};

export default CarouselHome;

