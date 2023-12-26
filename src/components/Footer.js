import '../styles/Styles.css'
import LOGO from '../assets/Footer.png'

function Footer() {
    return (
        <div className="footer">
            <section>
            <img src={LOGO} alt='logo footer' className='logoFooter'></img>
            <p className='footerText'>© 2020 Kasa. All rights reserved</p>
            </section>
        </div>
    )
}

export default Footer