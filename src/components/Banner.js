import '../styles/Banner.css'
import logo from '../assets/LOGO.png'
import { Link } from 'react-router-dom';

function Banner() {
    return (
        <div className='logo'>
            <img src={logo} alt="logo du site" className='logoDuSite' />
            <Link to='/' className='reference'>Accueil</Link>
            <Link to="/about" className='reference'>A Propos</Link>
        </div>
    )
}

export default Banner