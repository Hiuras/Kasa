import '../styles/Styles.css'
import logo from '../assets/LOGO.png'
import logement from '../logements.json';
import image from '../assets/IMG.png'
import k from '../assets/k.png'
import group from '../assets/Group.png'
import a from '../assets/a.png'
import s from '../assets/s.png'
import { Link } from 'react-router-dom';

function Accueil() {
    return (
      <div>
        <div className='logoAcceuil'>
        <img src={logo} alt="logo du site" className='logoDuSite' />
        <Link to='/' className='reference'>Accueil</Link>
        <Link to="/about" className='reference'>A Propos</Link>
        </div>

        <div className='pictureAccueil'>
        <img src={image} alt='image de présentation' className='imagePresentation' />
        </div>

        <div className="Cards-background">
        <section>
              <div className="card-container">
                {logement.map((item, index) => (
                  <div className="card" key={index}>
                    <Link to={`/logement/${item.id}`} id='reference'>
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

export default Accueil