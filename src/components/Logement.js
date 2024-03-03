import React from 'react';
import logo from '../assets/LOGO.png'
import k from '../assets/k.png'
import group from '../assets/Group.png'
import a from '../assets/a.png'
import s from '../assets/s.png'
import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import logement from '../logements.json';
import Arrow from '../assets/arrow_back.png';
import {CardLogement, DescriptionLogement, CardLogement2, DescriptionLogement2} from './CardsLogement/CardLogement';
import {rotateArrow,setIsArrowRotated,getIsArrowRotated} from './CardsLogement/CardLogement';
import Carousel from './Carousel/Carousel';
import handlePrevClick from './Carousel/Carousel';
import handleNextClick from './Carousel/Carousel';
import RatingHost from './RatingHosts/RatingHost';
import '../styles/Styles.css';


function Logement() {
  const { id } = useParams();
  const selectedLogement = logement.find(item => item.id === id);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isArrowRotated1, setIsArrowRotated1] = useState(false);
  const [isArrowRotated2, setIsArrowRotated2] = useState(false);

  if (!selectedLogement) {
    return <Navigate to="/error" />;
  }

    const rotateArrow = (arrowIndex) => {
      switch (arrowIndex) {
        case 1:
          setIsArrowRotated1(!isArrowRotated1);
          break;
        case 2:
          setIsArrowRotated2(!isArrowRotated2);
          break;
        default:
          break;
      }
    };

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
       <Carousel />
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

      <RatingHost selectedLogement={selectedLogement} />

    <div className='directionRow'>
    <div className='CardsPositionLogement'>
    <div className='cardCollumn1'>
    <CardLogement
        title='Fiabilité'
        arrowIndex={1}
        rotateArrow={rotateArrow}
        isOpen={isArrowRotated1}
      />
      <DescriptionLogement
        arrowIndex={1}
        description={selectedLogement.description}
        isOpen={isArrowRotated1}
      />
      </div>
      <div className='cardCollumn2'>
      <CardLogement2
        title='Équipements'
        arrowIndex={2}
        rotateArrow={rotateArrow}
        isOpen={isArrowRotated2}
      />
      <DescriptionLogement2
        arrowIndex={2}
        description={selectedLogement.equipments}
        isOpen={isArrowRotated2}
      />
      </div>
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