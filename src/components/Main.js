import '../styles/Styles.css'
import image from '../assets/IMG.png'

function Main() {
    return (
        <div className='main'>
            <img src={image} alt='image de présentation' className='imagePresentation' />
            <p className='titreImage'>Chez vous, partout et ailleurs</p>
        </div>
    )
}

export default Main