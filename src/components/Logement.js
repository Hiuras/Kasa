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

function Logement() {
  const { id } = useParams();
  const selectedLogement = logement.find(item => item.id === id);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!selectedLogement) {
    return <div>Logement non trouvé</div>;
  }

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? selectedLogement.pictures.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === selectedLogement.pictures.length - 1 ? 0 : prevIndex + 1));
  };
function rotateArrow() {
        let isArrowRotated = false;

        const arrowBack = document.querySelector('.arrow');
        const description = document.querySelector('.description');

        if (!isArrowRotated) {
            arrowBack.style.transform = 'rotate(180deg)';
            description.style.height = '109px;';
        } else {
            arrowBack.style.transform = 'rotate(0deg)';
            description.style.height = '0px';
        }

        isArrowRotated = !isArrowRotated;

        arrowBack.style.transitionDuration = '1s';
        description.style.transitionDuration = '1s';
    }

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
        <Link to='/' className='reference'> Accueil </Link>
        <Link to='/about' className='reference'> A Propos </Link>
      </div>
      <div className='pictureLogement'>
        {selectedLogement.pictures.length > 0 && (
          <img src={selectedLogement.pictures[currentIndex]} alt="Image des logements" />
        )}
        <img src={arrowLeft} alt='Fleche gauche' className='arrowLeft' onClick={handlePrevClick} />
        <img src={arrowRight} alt='Fleche droite' className='arrowRight' onClick={handleNextClick} />
      </div>
      <div className='titleLogement'>
        {selectedLogement.title && <h1>{selectedLogement.title}</h1>}
        {selectedLogement.location && (
          <h2 className='location'>{selectedLogement.location}</h2>
        )}
      </div>
      <div className='tagsLogement'>
        {selectedLogement.tags && selectedLogement.tags.map((tag, index) => (
          <h1 key={index}>{tag}</h1>
        ))}
        <div className='host'>
          {selectedLogement.host && <p className='host'>{selectedLogement.host.name}</p>}
          {selectedLogement.host && (
          <img className='host' src={selectedLogement.host.picture} alt='Host Picture' />
        )}
        </div>
      </div>
      <div className='ratingLogement'>
        {selectedLogement.rating && generateStars(selectedLogement.rating)}
      </div>
      <div className='CardsPositionLogement'>
        <div className='cardsEquipement'>
          <h1>Fiabilité</h1>
          <img src={Arrow} alt='fleche' onClick={rotateArrow} className='arrow' />
        </div>
        <div className='description'>
          {selectedLogement.description && <p>{selectedLogement.description}</p>}
        </div>
        <div className='cardsEquipement'>
          <h1>Équipements</h1>
          <img src={Arrow} alt='fleche' onClick={rotateArrow} className='arrow' />        
        </div>
        <div className='description'>
          {selectedLogement.equipments && <p>{selectedLogement.equipments}</p>}
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