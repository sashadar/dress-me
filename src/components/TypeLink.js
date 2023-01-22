import Card from './Card';
import CardImage from './CardImage';

import './TypeLink.css';

const TypeLink = (props) => {
  const handleTypeLinkClick = () => {
    props.handleTypeLinkClick(props.type);
  };

  return (
    <Card isDisabled={props.isDisabled}>
      <div onClick={handleTypeLinkClick} className='type-link__link'>
        <CardImage className={props.imgClass}></CardImage>
        <p className='type-link__title'>{props.title}</p>
      </div>
    </Card>
  );
};

export default TypeLink;
