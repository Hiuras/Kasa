import Arrow from '../../assets/arrow_back.png'
import { setIsArrowRotated1, setIsArrowRotated2, isArrowRotated1, isArrowRotated2 } from '../Logement'
import '../../styles/Styles.css';


export const CardLogement = ({ title, arrowIndex, rotateArrow, isOpen }) => (

    <div className='cardsEquipement1'>
      <h1>{title}</h1>
      <img
        src={Arrow}
        alt='fleche'
        onClick={() => rotateArrow(arrowIndex)}
        className={`arrow ${isOpen ? 'rotated' : ''}`}
      />
    </div>
  );
  
  export const DescriptionLogement = ({ arrowIndex, description, isOpen }) => (
  <div className={`description${isOpen ? ' open' : ''}`}>
    {description && <p>{description}</p>}
  </div>
  );
  
  export const CardLogement2 = ({ title, arrowIndex, rotateArrow, isOpen }) => (
    <div className='cardsEquipement2'>
      <h1>{title}</h1>
      <img
        src={Arrow}
        alt='fleche'
        onClick={() => rotateArrow(arrowIndex)}
        className={`arrow ${isOpen ? 'rotated' : ''}`}
      />
    </div>
  );
  
  export const DescriptionLogement2 = ({ arrowIndex, description, isOpen }) => (
  <div className={`description2${isOpen ? ' open' : ''}`}>
    {description && <p>{description[1]}</p>}
    {description && <p>{description[2]}</p>}
    {description && <p>{description[3]}</p>}
    {description && <p>{description[4]}</p>}
    {description && <p>{description[5]}</p>}
    {description && <p>{description[6]}</p>}
    {description && <p>{description[7]}</p>}
  </div>
  );
