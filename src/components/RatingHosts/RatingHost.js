import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import '../../styles/Styles.css'

function generateStars(rating) {
  const maxStars = 5;
  const redStars = Math.round(rating);
  const stars = [];

  for (let i = 1; i <= maxStars; i++) {
    stars.push(<FontAwesomeIcon key={i} icon={faStar} className={i <= redStars ? 'red-star' : 'gray-star'} />);
  }

  return stars;
}

const ratingHost = ({ selectedLogement }) => {
  return (
    <div className='ratingHost'>
      <div className='host'>
        <h3>{selectedLogement.host.name}</h3>
        <img src={selectedLogement.host.picture} alt={selectedLogement.host.name} />
      </div>
      <div className='ratingLogement'>
        {selectedLogement.rating && generateStars(selectedLogement.rating)}
      </div>
    </div>
  );
};

export default ratingHost;
