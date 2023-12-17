import logo from '../assets/LOGO.png'
import logement from '../logements.json';
import '../styles/Logement.css'
import { Link } from 'react-router-dom';

function Logement() {
    return (
        <div>
        <div className="banner">
            <img src={logo} alt='logo du site' />
            <Link to = '/' className='reference'> Accueil </Link>
            <Link to = '/about' className='reference'> A Propos </Link>
        </div>
        <div className='main'>
        {logement.length > 0 && <img src={logement[0].pictures} alt="Image des logements" />}
        </div>
        <div className='title'>
        {logement.length > 0 && <h1>{logement[0].title}</h1>}
        </div>

        </div>
    )
}

export default Logement