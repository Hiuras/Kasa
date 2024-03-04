import { useState } from 'react'; // Importez useState depuis React
import './StyleCards.css';
import Arrow from '../../assets/arrow_back.png';

export const Card = ({ title, arrowIndex, rotateArrow }) => {
  const handleClick = () => {
    rotateArrow(arrowIndex);
  };

  return (
    <div className='card'>
      <h3>{title}</h3>
        <img src={Arrow} className={`arrowBack-${arrowIndex}`} onClick={handleClick} alt="Arrow" />
    </div>
  );
};

export const Description = ({ arrowIndex, description }) => {
  return (
    <div className={`description-${arrowIndex}`} id='description'>
      <p>{description}</p>
    </div>
  );
};

export const useArrowRotation = () => {
  const [isArrowRotated1, setIsArrowRotated1] = useState(false);
  const [isArrowRotated2, setIsArrowRotated2] = useState(false);
  const [isArrowRotated3, setIsArrowRotated3] = useState(false);
  const [isArrowRotated4, setIsArrowRotated4] = useState(false);

  const rotateArrow = (arrowIndex) => {
    const arrowBack = document.querySelector(`.arrowBack-${arrowIndex}`);
    const description = document.querySelector(`.description-${arrowIndex}`);

    const isArrowRotated = getIsArrowRotated(arrowIndex);

    if (!isArrowRotated) {
      arrowBack.style.transform = 'rotate(180deg)';
      description.style.height = 'auto';
    } else {
      arrowBack.style.transform = 'rotate(0deg)';
      description.style.height = '0px';
    }

    setIsArrowRotated(arrowIndex, !isArrowRotated);

    arrowBack.style.transitionDuration = '1s';
    description.style.transitionDuration = '1s';
  };

  const setIsArrowRotated = (arrowIndex, value) => {
    switch (arrowIndex) {
      case 1:
        setIsArrowRotated1(value);
        break;
      case 2:
        setIsArrowRotated2(value);
        break;
      case 3:
        setIsArrowRotated3(value);
        break;
      case 4:
        setIsArrowRotated4(value);
        break;
      default:
        break;
    }
  };

  const getIsArrowRotated = (arrowIndex) => {
    switch (arrowIndex) {
      case 1:
        return isArrowRotated1;
      case 2:
        return isArrowRotated2;
      case 3:
        return isArrowRotated3;
      case 4:
        return isArrowRotated4;
      default:
        return false;
    }
  };

  return { rotateArrow, setIsArrowRotated, getIsArrowRotated };
};