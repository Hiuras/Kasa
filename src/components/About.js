import React, { useEffect } from 'react';
import logoImage from '../assets/LOGO.png';
import '../styles/Styles.css';
import { Card, Description } from './Cards/Card';
import { useArrowRotation } from './Cards/Card';
import presentationImage from '../assets/kalen-emsley.png';
import k from '../assets/k.png';
import group from '../assets/Group.png';
import a from '../assets/a.png';
import s from '../assets/s.png';
import { Link, useLocation } from 'react-router-dom';

function About() {
  const { rotateArrow } = useArrowRotation();
  const location = useLocation();

  useEffect(() => {
    const element = document.querySelector('.about-reference');
    if (location.pathname === '/about') {
      element.style.textDecoration = 'underline';
    } else {
      element.style.textDecoration = 'none';
    }
  }, [location.pathname]);

  return (
    <div>
      <div className='banner'>
        <img src={logoImage} alt='logo du site' />
        <nav>
          <Link to='/' className='reference'>
            Accueil
          </Link>
          <Link to="/about" className='about-reference'>
            A Propos
          </Link>
        </nav>
      </div>
      <div className='pictureAbout'>
        <img src={presentationImage} alt='image de presentation' />
      </div>

      <div className='cardsPosition'>
        <Card title='Fiabilité' arrowIndex={1} rotateArrow={rotateArrow} />
        <Description
          arrowIndex={1}
          description={[
            'Les annonces postées sur Kasa garantissent une Fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.',
          ]}
        />
        <Card title='Respect' arrowIndex={2} rotateArrow={rotateArrow} />
        <Description
          arrowIndex={2}
          description={[
            'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de pertubation du voisinage entrainera une exclusion de notre plateforme.',
          ]}
        />

        <Card title='Service' arrowIndex={3} rotateArrow={rotateArrow} />
        <Description
          arrowIndex={3}
          description={[
            'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de pertubation du voisinage entrainera une exclusion de notre plateforme. ',
          ]}
        />

        <Card title='Sécurité' arrowIndex={4} rotateArrow={rotateArrow} />
        <Description
          arrowIndex={4}
          description={[
            'La sécurité est la priorité de Kasa. Aussi bien pour nos hotes que pour les voyageurs, chaque logement correspond aux critères de sécurité etablis par nos services. En laissant une note aussi bien a l hote qu au locataire, cela permet à nos équipes de verifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hotes.',
          ]}
        />
      </div>
      
      <div className='footerAbout'>
        <div className='footerKasa'>
          <img src={k} alt='k Footer' />
          <img src={group} alt='logoSite' />
          <img src={s} alt='s Footer' />
          <img src={a} alt='a Footer' />
        </div>
        <h2 className='footerH2'>© 2020 Kasa. All rights reserved</h2>
      </div>
    </div>
  );
}

export default About;