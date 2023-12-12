import '../styles/Cards.css';
import logement from '../logements.json';

function Cards() {
  return (
    <div className="Cards-background">
      <section>
        <div className='cards-Main'>
          <section className='logement'>
            <div className="card-container">
              {logement.map((item, index) => (
                <div className="card" key={index}>
                  <img src={item.cover} alt='image de la maison' />
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