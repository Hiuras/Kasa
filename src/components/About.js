import logoImage from '../assets/LOGO.png';
import '../styles/About.css'
import presentationImage from '../assets/kalen-emsley.png';
import  Arrow  from '../assets/arrow_back.png';
import Footer from '../assets/Footer.png';
import { Link } from 'react-router-dom';

function About() {

    const handleClick = () => {
        console.log('fleche cliquée')
    }

  return (
    <div>
      <div className="banner">
        <img src={logoImage} alt="logo du site" />
        <Link to='/' className="reference">Accueil</Link>
        <h2 className="reference">A Propos</h2>
      </div>
      <div className="main">
        <img src={presentationImage} alt="image de presentation" />
      </div>
      <div className='cards'>
        <h1>Fiabilité</h1>
        <img src={Arrow} alt='fleche' onClick={handleClick} id='arrowBack' />
      </div>
      <div className='cards'>
        <h1>Respect</h1>
        <img src={Arrow} alt='fleche' onClick={handleClick} id='arrowBack' />
      </div>
      <div className='cards'>
        <h1>Service</h1>
        <img src={Arrow} alt='fleche' onClick={handleClick} id='arrowBack' />
      </div>
      <div className='cards'>
        <h1>Sécurité</h1>
        <img src={Arrow} alt='fleche' onClick={handleClick} id='arrowBack' />
      </div>
    <div className='footer'>
        <img src={Footer} alt='logo Footer' className='footerLogo' />
        <h2 className='footerH2'>© 2020 Kasa. All rights reserved</h2>
    </div>
    </div>
  );
}

export default About;