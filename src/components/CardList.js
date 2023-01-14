import './CardList.css';

const CardList = (props) => {
  return <ul className='card-list'>{props.children}</ul>;
};

export default CardList;
