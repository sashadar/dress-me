import Card from './Card';

import './TypeLink.css';

const TypeLink = (props) => {
  return (
    <Card>
      <a href='./items' className='type-link__link'>
        <div className={`type-link__image ${props.imgClass}`}></div>
        <p className='type-link__title'>{props.title}</p>
      </a>
    </Card>
  );
};

export default TypeLink;
