import logo from '../assets/LOGO.png';
import Footer from '../assets/Footer.png';
import { Link } from 'react-router-dom';
import '../styles/Styles.css'

function error() {
    return (
        <div>
        <div className="banner">
             <img src={logo} alt="logo du site" className='logoDuSite' />
            <Link to='/error' className='reference'>Accueil</Link>
            <Link to="/about" className='reference'>A Propos</Link>
        </div>
        <div className='Main'>
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/">Retourner sur la pge d'acceuil</Link>
        </div>
        <div className='footer'>
            <img src={Footer} alt='logo du footer' />
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
        </div>
    )
}

export default error