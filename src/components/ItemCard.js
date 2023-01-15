import Card from './Card';
import CardImage from './CardImage';

import './ItemCard.css';

const ItemCard = (props) => {
  return (
    <Card>
      <div className='item-card__wrapper'>
        <CardImage
          className={`card-image__${props.type}`}
          color={props.color}
        ></CardImage>
        <div className='item-card__description'>
          <p className='item-card__brand'>{props.brand}</p>
          <p className='item-card__color'>color: {props.color}</p>
          <p className='item-card__size'>size: {props.size}</p>
        </div>
      </div>
    </Card>
  );
};

export default ItemCard;
