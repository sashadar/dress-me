import './CardImage.css';

const CardImage = (props) => {
  const classes = 'card-image ' + props.className;
  return <div className={classes}></div>;
};

export default CardImage;
