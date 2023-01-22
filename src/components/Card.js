import './Card.css';

const Card = (props) => {
  const className = `card ${props.isDisabled ? 'card_disabled' : ''} ${
    props.page === 'savedSets' ? 'card_inactive' : ''
  }`;
  return <li className={className}>{props.children}</li>;
};

export default Card;
