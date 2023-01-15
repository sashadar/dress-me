import Card from './Card';
import CardImage from './CardImage';

import './TypeLink.css';

const TypeLink = (props) => {
  return (
    <Card>
      <a href='./items' className='type-link__link'>
        <CardImage className={props.imgClass}></CardImage>
        <p className='type-link__title'>{props.title}</p>
      </a>
    </Card>
  );
};

export default TypeLink;
