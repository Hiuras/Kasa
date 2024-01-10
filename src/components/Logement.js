import React from 'react';
import logo from '../assets/LOGO.png'
import logoFooter from '../assets/Footer.png'
import { useParams, Link } from 'react-router-dom';
import logement from '../logements.json';
import Arrow from '../assets/arrow_back.png';
import arrowLeft from '../assets/Arrow_left.png';
import arrowRight from '../assets/Arrrow_right.png';
import '../styles/Styles.css';

function Logement() {
  const { id } = useParams();
  const selectedLogement = logement.find(item => item.id === id);

  if (!selectedLogement) {
    return <div>Logement non trouvé</div>;
  }

function rotateArrow() {
        let isArrowRotated = false;

        const arrowBack = document.querySelector('.arrow');
        const description = document.querySelector('.description');

        if (!isArrowRotated) {
            arrowBack.style.transform = 'rotate(180deg)';
            description.style.height = '85px';
        } else {
            arrowBack.style.transform = 'rotate(0deg)';
            description.style.height = '0px';
        }

        isArrowRotated = !isArrowRotated;

        arrowBack.style.transitionDuration = '1s';
        description.style.transitionDuration = '1s';
    }

  return (
    <div>
      <div className="banner">
        <img src={logo} alt='logo du site' />
        <Link to='/' className='reference'> Accueil </Link>
        <Link to='/about' className='reference'> A Propos </Link>
      </div>
      <div className='picture'>
        {selectedLogement.pictures.length > 0 && (
          <img src={selectedLogement.pictures[1]} alt="Image des logements" />
        )}
        <img src={arrowLeft} alt='Fleche gauche' className='arrowLeft' />
        <img src={arrowRight} alt='Fleche gauche' className='arrowRight' />
      </div>
      <div className='title'>
        {selectedLogement.title && <h1>{selectedLogement.title}</h1>}
        {selectedLogement.location && (
          <h2 className='location'>{selectedLogement.location}</h2>
        )}
      </div>
      <div className='tags'>
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
      <div className='CardsPositionLogement'>
        <div className='cardsEquipement'>
          <h1>Fiabilité</h1>
          <img src={Arrow} alt='fleche' onClick={rotateArrow} className='arrow' />
        </div>
        <div className='description'>
          {selectedLogement.description && <p>{selectedLogement.description}</p>}
        </div>
        <div className='rating'>
        {selectedLogement.rating && <p>{selectedLogement.rating}</p>}
        </div>
        <div className='cardsEquipement'>
          <h1>Équipements</h1>
          <img src={Arrow} alt='fleche' onClick={rotateArrow} className='arrow' />        
        </div>
        <div className='description'>
          {selectedLogement.equipments && <p>{selectedLogement.equipments}</p>}
        </div>
      </div>
      <div className='footer'>
        <img src={logoFooter} alt='logo du footer' />
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </div>
  );
}

export default Logement;