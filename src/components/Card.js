import './Card.css';

const Card = (props) => {
  const className = `card ${props.isDisabled ? 'card_disabled' : ''}`;
  return <li className={className}>{props.children}</li>;
};

export default Card;
