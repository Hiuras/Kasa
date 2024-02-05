import React from 'react';
import logo from '../assets/LOGO.png'
import k from '../assets/k.png'
import group from '../assets/Group.png'
import a from '../assets/a.png'
import s from '../assets/s.png'
import  { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logement from '../logements.json';
import Arrow from '../assets/arrow_back.png';
import arrowLeft from '../assets/Arrow_left.png';
import arrowRight from '../assets/Arrrow_right.png';
import '../styles/Styles.css';

const Card = ({ title, arrowIndex, rotateArrow, isOpen }) => (

    <div className='cardsEquipement1'>
      <h1>{title}</h1>
      <img
        src={Arrow}
        alt='fleche'
        onClick={() => rotateArrow(arrowIndex)}
        className={`arrow ${isOpen ? 'rotated' : ''}`}
      />
    </div>
);

const Description = ({ arrowIndex, description, isOpen }) => (
  <div className={`description${isOpen ? ' open' : ''}`}>
    {description && <p>{description}</p>}
  </div>
);

const Card2 = ({ title, arrowIndex, rotateArrow, isOpen }) => (
    <div className='cardsEquipement2'>
      <h1>{title}</h1>
      <img
        src={Arrow}
        alt='fleche'
        onClick={() => rotateArrow(arrowIndex)}
        className={`arrow ${isOpen ? 'rotated' : ''}`}
      />
    </div>
);

const Description2 = ({ arrowIndex, description, isOpen }) => (
  <div className={`description2${isOpen ? ' open' : ''}`}>
    {description && <p>{description[1]}</p>}
    {description && <p>{description[2]}</p>}
    {description && <p>{description[3]}</p>}
    {description && <p>{description[4]}</p>}
    {description && <p>{description[5]}</p>}
    {description && <p>{description[6]}</p>}
    {description && <p>{description[7]}</p>}
  </div>
);

function Logement() {
  const { id } = useParams();
  const selectedLogement = logement.find(item => item.id === id);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isArrowRotated1, setIsArrowRotated1] = useState(false);
  const [isArrowRotated2, setIsArrowRotated2] = useState(false);

  const rotateArrow = (arrowIndex) => {
    setIsArrowRotated(arrowIndex, !getIsArrowRotated(arrowIndex));
  };

  const setIsArrowRotated = (arrowIndex, value) => {
    switch (arrowIndex) {
      case 1:
        setIsArrowRotated1(value);
        break;
      case 2:
        setIsArrowRotated2(value);
        break;
      default:
        break;
    }
  };

  const getIsArrowRotated = (arrowIndex) => {
    switch (arrowIndex) {
      case 1:
        return isArrowRotated1;
      case 2:
        return isArrowRotated2;
      default:
        return false;
    }
  };

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? selectedLogement.pictures.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === selectedLogement.pictures.length - 1 ? 0 : prevIndex + 1));
  };


    function generateStars(rating) {
      const maxStars = 5;
      const redStars = Math.round(rating);
      const stars = [];
  
      for (let i = 1; i <= maxStars; i++) {
        stars.push(<FontAwesomeIcon key={i} icon={faStar} className={i <= redStars ? 'red-star' : 'gray-star'} />);
      }
  
      return stars;
    }

  return (
    <div>
      <div className="banner">
        <img src={logo} alt='logo du site' />
        <nav>
        <Link to='/' className='reference'> Accueil </Link>
        <Link to='/about' className='reference'> A Propos </Link>
        </nav>
      </div>
      <div className='pictureLogement'>
        {selectedLogement.pictures.length > 0 && (
          <img src={selectedLogement.pictures[currentIndex]} alt="Image des logements" />
        )}
        <img src={arrowLeft} alt='Fleche ' onClick={handlePrevClick} className='arrowLeft'/>
        <img src={arrowRight} alt='FlecheCarrousel2' onClick={handleNextClick} className='arrowRight' />
        <div className="counter">{currentIndex + 1} / {selectedLogement.pictures.length}</div>
      </div>
      <div className='titleLogement'>
        {selectedLogement.title && <h1>{selectedLogement.title}</h1>}
        {selectedLogement.location && (
          <h2 className='location'>{selectedLogement.location}
        </h2>
        )}
      </div>
      <div className='tagsLogement'>
        {selectedLogement.tags && selectedLogement.tags.map((tag, index) => (
          <h1 key={index}>{tag}</h1>
        ))}
      </div>
      <div className='ratingHost'>
      <div className='host'>
        <h3>{selectedLogement.host.name}</h3>
        <img src={selectedLogement.host.picture} alt={selectedLogement.host.name} />
      </div>
      <div className='ratingLogement'>
        {selectedLogement.rating && generateStars(selectedLogement.rating)}
      </div>
    </div>
    <div className='directionRow'>
    <div className='CardsPositionLogement'>
        <Card
          title='Fiabilité'
          arrowIndex={1}
          rotateArrow={rotateArrow}
          isOpen={isArrowRotated1}
        />
        <Description
          arrowIndex={1}
          description={selectedLogement.description}
          isOpen={isArrowRotated1}
        />
              </div>
         <div className='cardsEquipementPosition2'>
        <Card2
          title='Équipements'
          arrowIndex={2}
          rotateArrow={rotateArrow}
          isOpen={isArrowRotated2}
        />
        <Description2
          arrowIndex={2}
          description={selectedLogement.equipments}
          isOpen={isArrowRotated2}
        />
      </div>
      </div>
      <div className='footerLogement'>
        <div className='footerKasa'>
          <img src={k} alt='k Footer' />
          <img src={group} alt='logoSite' />
          <img src={s} alt='s Footer' />
          <img src={a} alt='a Footer' />
        </div>
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </div>
  );
}

export default Logement;