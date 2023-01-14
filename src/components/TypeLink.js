import './TypeLink.css';

const TypeLink = (props) => {
  return (
    <li className='type-link__item'>
      <a href='./items' className='type-link__link'>
        <div className={`type-link__image ${props.imgClass}`}></div>
        <p className='type-link__title'>{props.title}</p>
      </a>
    </li>
  );
};

export default TypeLink;
