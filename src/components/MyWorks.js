import React, { useState } from 'react';
import './MyWorksPage.css'; // Import the CSS file
import gate1 from '../assets/gate12.jpg';
import gate2 from '../assets/gate13.jpg';
import gate3 from '../assets/gate14.jpg';
import gate4 from '../assets/gate15.jpg';
import gate5 from '../assets/gate16.jpg';
import s1 from '../assets/shutter1.jpg';
import s2 from '../assets/shutter2.jpg';
import s3 from '../assets/shutter3.jpg';
import m1 from '../assets/mswork1.jpg';
import m2 from '../assets/mswork2.jpg';
import m3 from '../assets/mswork3.jpg';
import m4 from '../assets/mswork4.jpg';
import m5 from '../assets/mswork5.jpg';
import ss1 from '../assets/shed1.jpg';
import ss2 from '../assets/shed2.jpg';
import ss3 from '../assets/shed3.jpg';
import ss4 from '../assets/shed4.jpg';
import ss5 from '../assets/shed5.jpg';
import sl1 from '../assets/stepla1.jpg';
import sl2 from '../assets/stepla2.jpg';
import sl3 from '../assets/stepla3.jpg';
import sl4 from '../assets/stepla4.jpg';
import sl5 from '../assets/stepla5.jpg';
import t1 from '../assets/trolly1.jpg';
import t2 from '../assets/trolly2.jpg';

const works = [
  { title: 'Iron Sheds', images: [ss1, ss2, ss3, ss4, ss5] },
  { title: 'Step Landings', images: [sl1, sl2, sl3, sl4, sl5] },
  { title: 'Gates', images: [gate1, gate2, gate3, gate4, gate5] },
  { title: 'Shutters', images: [s1, s2, s3] },
  { title: 'MS Work', images: [m1, m2, m3, m4, m5] },
  { title: 'Trollys', images: [t1, t2] },
];

const MyWorksPage = () => {
  const [lightboxActive, setLightboxActive] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentImages, setCurrentImages] = useState([]);

  const openLightbox = (images, index) => {
    setCurrentImages(images);
    setCurrentImageIndex(index);
    setLightboxActive(true);
  };

  const closeLightbox = () => {
    setLightboxActive(false);
    setCurrentImages([]);
    setCurrentImageIndex(0);
  };

  const showPreviousImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? currentImages.length - 1 : prevIndex - 1
    );
  };

  const showNextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === currentImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="works-page">
      <h1>My Works</h1>
      <div className="works-container">
        {works.map((work, index) => (
          <div className="work-section" key={index}>
            <h2>{work.title}</h2>
            <div className="images-container">
              {work.images.map((image, imgIndex) => (
                <img
                  key={imgIndex}
                  src={image}
                  alt={`${work.title} ${imgIndex + 1}`}
                  className="work-image"
                  onClick={() => openLightbox(work.images, imgIndex)} 
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {lightboxActive && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={currentImages[currentImageIndex]} alt="Lightbox" className="lightbox-image" />
            <button className="lightbox-close" onClick={closeLightbox}>
              &times; 
            </button>
            <div className="lightbox-navigation">
              <button className="lightbox-prev" onClick={showPreviousImage}>&#10094;</button>
              <button className="lightbox-next" onClick={showNextImage}>&#10095;</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyWorksPage;
