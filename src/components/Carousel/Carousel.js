import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import logement from '../../logements.json';
import arrowLeft from '../../assets/Arrow_left.png';
import arrowRight from '../../assets/Arrrow_right.png';
import './StyleCarousel.css'

function Carousel() {
    const { id } = useParams();
    const selectedLogement = logement.find(item => item.id === id);
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const handlePrevClick = () => {
      setCurrentIndex(prevIndex => (prevIndex === 0 ? selectedLogement.pictures.length - 1 : prevIndex - 1));
    };
  
    const handleNextClick = () => {
      setCurrentIndex(prevIndex => (prevIndex === selectedLogement.pictures.length - 1 ? 0 : prevIndex + 1));
    };

    const showArrows = selectedLogement.pictures.length > 1;
  
    return (
      <div className='pictureLogement'>
        {selectedLogement.pictures.length > 0 && (
          <img src={selectedLogement.pictures[currentIndex]} alt="Image des logements" />
        )}
        {showArrows && <img src={arrowLeft} alt="Previous" onClick={handlePrevClick} className='arrowLeft'/>}
        {showArrows && <img src={arrowRight} alt="Next" onClick={handleNextClick} className='arrowRight'/>}
        <div className="counter">{currentIndex + 1} / {selectedLogement.pictures.length}</div>
      </div>
    );
  }
  
  export default Carousel;
