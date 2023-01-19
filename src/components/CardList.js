import './CardList.css';

const CardList = (props) => {
  const className = `card-list ${props.className ? props.className : ''}`;
  return <ul className={className}>{props.children}</ul>;
};

export default CardList;
