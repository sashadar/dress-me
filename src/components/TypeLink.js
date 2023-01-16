import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { currentSetActions } from '../store/currentSet';

import Card from './Card';
import CardImage from './CardImage';

import './TypeLink.css';

const TypeLink = ({ type, ...props }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const currentSet = useSelector((state) => state.currentSet);
  const isDisabled =
    currentSet.shirt.type === type ||
    currentSet.pants.type === type ||
    currentSet.shoes.type === type ||
    currentSet.currentType === type;

  const handleTypeLinkClick = () => {
    dispatch(currentSetActions.setCurrentType(type));
    history.push('/items');
  };

  return (
    <Card isDisabled={isDisabled}>
      <div onClick={handleTypeLinkClick} className='type-link__link'>
        <CardImage className={props.imgClass}></CardImage>
        <p className='type-link__title'>{props.title}</p>
      </div>
    </Card>
  );
};

export default TypeLink;
