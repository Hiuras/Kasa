import logoImage from '../assets/LOGO.png';
import '../styles/Styles.css'
import presentationImage from '../assets/kalen-emsley.png';
import  Arrow  from '../assets/arrow_back.png';
import Footer from '../assets/Footer.png';
import { Link } from 'react-router-dom';

function About() {

  let isArrowRotated = false;

  const rotateArrow = () => {
      const arrowBack = document.querySelector('.arrowBack');
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
  };


  return (
    <div>
      <div className="banner">
        <img src={logoImage} alt="logo du site" />
        <Link to='/' className="reference">Accueil</Link>
        <h2 className="reference">A Propos</h2>
      </div>
      <div className="aboutMain">
        <img src={presentationImage} alt="image de presentation" />
      </div>
      <div className='cardsPosition'>
      <div className='cards'>
        <h1>Fiabilité</h1>
        <img src={Arrow} alt='fleche' onClick={rotateArrow} className='arrowBack' />        
        </div>
        <div className='description'>
          <p>Les annonces postées sur Kasa garantissent une Fiabilité totale.Les photos sont conformes aux logements,et <br />toutes les informations sont régulièrement verifiées par nos equipes</p>
      </div>
      <div className='cards'>
        <h1>Respect</h1>
        <img src={Arrow} alt='fleche' onClick={rotateArrow} className='arrowBack' />
      </div>
      <div className='cards'>
        <h1>Service</h1>
        <img src={Arrow} alt='fleche' onClick={rotateArrow} className='arrowBack' />
      </div>
      <div className='cards'>
        <h1>Sécurité</h1>
        <img src={Arrow} alt='fleche' onClick={rotateArrow} className='arrowBack' />
      </div>
      </div>
    <div className='footer'>
        <img src={Footer} alt='logo Footer' className='footerLogo' />
        <h2 className='footerH2'>© 2020 Kasa. All rights reserved</h2>
    </div>
    </div>
  );
}

export default About;