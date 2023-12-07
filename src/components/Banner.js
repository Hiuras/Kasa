import '../styles/Banner.css'
import logo from '../assets/LOGO.png'

function Banner() {
    return (
        <div className='logo'>
            <img src={logo} alt="logo du site" className='logoDuSite' />
            <h2 className='reference'>Accueil</h2>
            <h2 className='reference'>A Propos</h2>
        </div>
    )
}

export default Banner