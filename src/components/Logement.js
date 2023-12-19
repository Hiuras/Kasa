import logo from '../assets/LOGO.png'
import logoFooter from '../assets/Footer.png'
import logement from '../logements.json';
import Arrow from '../assets/arrow_back.png'
import arrowLeft from '../assets/Arrow_left.png'
import arrowRight from '../assets/Arrrow_right.png'
import '../styles/Logement.css'
import { Link } from 'react-router-dom';

function Logement() {

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
                {logement.length > 0 && <img src={logement[0].cover} alt="Image des logements" />}
                <img src={arrowLeft} alt='Fleche gauche' className='arrowLeft' />
                <img src={arrowRight} alt='Fleche gauche' className='arrowRight' />
            </div>
            <div className='title'>
                {logement.length > 0 && <h1>{logement[0].title}</h1>}
                {logement.length > 0 && <h2 className='location'>{logement[0].location}</h2>}
            </div>
            <div className='tags'>
            {logement.length > 0 && <h1>{logement[0].tags[0]}</h1>}
            {logement.length > 0 && <h1>{logement[0].tags[1]}</h1>}
            {logement.length > 0 && <h1>{logement[0].tags[2]}</h1>}
            </div>
            <div className='CardsPosition'>
            <div className='cards'>
        <h1>Fiabilité</h1>
        <img src={Arrow} alt='fleche' onClick={rotateArrow} className='arrow' />        
        </div>
        <div className='description'>
        {logement.length > 0 && <p>{logement[0].description}</p>}
      </div>
      <div className='cardsEquipement'>
        <h1>equipments</h1>
        <img src={Arrow} alt='fleche' onClick={rotateArrow} className='arrow' />        
        </div>
        <div className='description'>
        {logement.length > 0 && <p>{logement[0].equipments}</p>}
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
