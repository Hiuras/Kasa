import React, { useState } from 'react';
import logoImage from '../assets/LOGO.png';
import '../styles/Styles.css';
import presentationImage from '../assets/kalen-emsley.png';
import Arrow from '../assets/arrow_back.png';
import Footer from '../assets/Footer.png';
import { Link } from 'react-router-dom';

const Card = ({ title, arrowIndex, rotateArrow }) => (
  <div className='cards'>
    <div className='card-header'>
      <h1>{title}</h1>
      <img
        src={Arrow}
        alt='fleche'
        onClick={() => rotateArrow(arrowIndex)}
        className={`arrowBack arrowBack-${arrowIndex}`}
      />
    </div>
  </div>
);

const Description = ({ arrowIndex, description }) => (
  <div className={`description description-${arrowIndex}`}>
    <p>{description}</p>
  </div>
);

function About() {
  const [isArrowRotated1, setIsArrowRotated1] = useState(false);
  const [isArrowRotated2, setIsArrowRotated2] = useState(false);
  const [isArrowRotated3, setIsArrowRotated3] = useState(false);
  const [isArrowRotated4, setIsArrowRotated4] = useState(false);

  const rotateArrow = (arrowIndex) => {
    const arrowBack = document.querySelector(`.arrowBack-${arrowIndex}`);
    const description = document.querySelector(`.description-${arrowIndex}`);

    const isArrowRotated = getIsArrowRotated(arrowIndex);

    if (!isArrowRotated) {
      arrowBack.style.transform = 'rotate(180deg)';
      description.style.height = '85px';
    } else {
      arrowBack.style.transform = 'rotate(0deg)';
      description.style.height = '0px';
    }

    setIsArrowRotated(arrowIndex, !isArrowRotated);

    arrowBack.style.transitionDuration = '1s';
    description.style.transitionDuration = '1s';
  };

  const setIsArrowRotated = (arrowIndex, value) => {
    switch (arrowIndex) {
      case 1:
        setIsArrowRotated1(value);
        break;
      case 2:
        setIsArrowRotated2(value);
        break;
      case 3:
        setIsArrowRotated3(value);
        break;
      case 4:
        setIsArrowRotated4(value);
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
      case 3:
        return isArrowRotated3;
      case 4:
        return isArrowRotated4;
      default:
        return false;
    }
  };

  return (
    <div>
      <div className='banner'>
        <img src={logoImage} alt='logo du site' />
        <Link to='/' className='reference'>
          Accueil
        </Link>
        <h2 className='reference'>A Propos</h2>
      </div>
      <div className='aboutMain'>
        <img src={presentationImage} alt='image de presentation' />
      </div>
      <div className='cardsPosition'>
        <Card
          title='Fiabilité'
          arrowIndex={1}
          rotateArrow={rotateArrow}
        />
        <Description
        arrowIndex={1}
        description='Les annonces postées sur Kasa garantissent une Fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.'
        />
        <Card title='Respect' 
        arrowIndex={2} 
        rotateArrow={rotateArrow}
        />
        <Description
        arrowIndex={2}
        description='La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de pertubation du voisinage entrainera une exclusion de notre plateforme.'
        />

        <Card title='Service' 
        arrowIndex={3} 
        rotateArrow={rotateArrow}
        />
        <Description
        arrowIndex={3}
        description='La ' />

        <Card title='Sécurité' 
        arrowIndex={4} 
        rotateArrow={rotateArrow}
        />
        <Description
        arrowIndex={4}
        description='La sécurité est la priorité de Kasa. Aussi bien pour nos hotes que pour les voyageurs, chaque logement correspond aux critères de sécurité etablis par nos services. En laissant une note aussi bien a l hote qu au locataire, cela permet à nos équipes de verifier que les standards sont bien respectés. 
         Nous organisons également des ateliers sur la sécurité domestique pour nos hotes.' />
      </div>
      <div className='footer'>
        <img src={Footer} alt='logo Footer' className='footerLogo' />
        <h2 className='footerH2'>© 2020 Kasa. All rights reserved</h2>
      </div>
    </div>
  );
}

export default About;