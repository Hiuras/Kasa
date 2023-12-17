import '../styles/Cards.css';
import logement from '../logements.json';
import { Link } from 'react-router-dom';

function Cards() {
  return (
    <div className="Cards-background">
      <section>
        <div className='cards-Main'>
          <section className='logement'>
            <div className="card-container">
              {logement.map((item, index) => (
                <div className="card" key={index}>
                  <Link to="/logement" id='reference'>
                  <img src={item.cover} alt='image de la maison' />
                  </Link>
                  <h3>{item.title}</h3>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}

export default Cards;