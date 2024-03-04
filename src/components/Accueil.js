import '../styles/Styles.css'
import logo from '../assets/LOGO.png'
import logement from '../logements.json';
import image from '../assets/IMG.png'
import k from '../assets/k.png'
import group from '../assets/Group.png'
import a from '../assets/a.png'
import s from '../assets/s.png'
import { Link, useLocation } from 'react-router-dom';

function Accueil() {
  const location = useLocation();
  return (
    <div>
        <div className='banner'>
            <img src={logo} alt="logo du site" className='logoDuSite' />
            <nav>
                <Link to='/' className={location.pathname === '/' ? 'reference active' : 'reference'}>Accueil</Link>
                <Link to="/about" className={location.pathname === '/about' ? 'reference active' : 'reference'}>A Propos</Link>
            </nav>
        </div>

        <div className='pictureAccueil'>
            <img src={image} alt='image de présentation' className='imagePresentation' />
            <p className='pictureTitle'>Chez vous, partout et ailleurs</p>
        </div>

        <div className="Cards-background">
            <section>
                <div className="card-container">
                    {logement.map((item, index) => (
                        <div className="card" key={index}>
                            <Link to={`/logement/${item.id}`} className='reference'>
                                <img src={item.cover} alt='image de la maison' />
                            </Link>
                            <h3>{item.title}</h3>
                        </div>
                    ))}
                </div>
            </section>
        </div>

        <div className="footerAccueil">
            <section>
                <div className='footerKasa'>
                    <img src={k} alt='k Footer' />
                    <img src={group} alt='logoSite' />
                    <img src={s} alt='s Footer' />
                    <img src={a} alt='a Footer' />
                </div>
                <p className='footerText'>© 2020 Kasa. All rights reserved</p>
            </section>
        </div>
    </div>
)
}

export default Accueil;