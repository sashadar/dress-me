import './CardImage.css';

const CardImage = (props) => {
  const color = props.color !== 'undefined' ? props.color : 'white';
  const borderStyle = '3px solid ' + color;
  const classes = 'card-image ' + props.className;
  return <div className={classes} style={{ border: borderStyle }}></div>;
};

export default CardImage;
