
import React from 'react';
import { CCarousel, CCarouselItem, CImage } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';
import image1 from '../../../../assets/image1.jpg';
import image2 from '../../../../assets/image2.jpg';
import image3 from '../../../../assets/image3.jpg';
import image4 from '../../../../assets/image4.jpg';
import image5 from '../../../../assets/image5.jpg';
import image6 from '../../../../assets/image6.jpg';
import './Carrousel.css'; 

const images = [image1, image2, image3, image4, image5, image6];

const Carrousel = () => {
  return (
    <section className="carousel-container">
      <CCarousel controls indicators interval={true} transition="crossfade">
        {images.map((image, index) => (
          <CCarouselItem interval={1000} key={index}>
            <CImage className="d-block w-100" src={image} alt={`slide ${index + 1}`} />
          </CCarouselItem>
        ))}
      </CCarousel>
    </section>
  );
};

export default Carrousel;