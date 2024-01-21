import logo from '../assets/LOGO.png';
import k from '../assets/k.png'
import group from '../assets/Group.png'
import a from '../assets/a.png'
import s from '../assets/s.png'
import { Link } from 'react-router-dom';
import '../styles/Styles.css'

function error() {
    return (
        <div>
        <div className="bannerError">
             <img src={logo} alt="logo du site" className='logoDuSite' />
            <Link to='/error' className='reference'>Accueil</Link>
            <Link to="/about" className='reference'>A Propos</Link>
        </div>
        <div className='Error404'>
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/">Retourner sur la pge d'accueil</Link>
        </div>
        <div className='footerError'>
        <div className='footerKasa'>
      <img src={k} alt='k Footer' />
      <img src={group} alt='logoSite' />
      <img src={s} alt='s Footer' />
      <img src={a} alt='a Footer' />
      </div>
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
        </div>
    )
}

export default error