import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { currentSetActions } from '../store/currentSet';

const CheckBox = ({ value, ...props }) => {
  const dispatch = useDispatch();

  const isChecked = useSelector(
    (state) => state.currentSet.filterStates[value]
  );

  const handleCheckBoxChange = () => {
    dispatch(currentSetActions.toggleFilters(value));
  };
  return (
    <li className={props.className}>
      {value}
      <input
        type='checkbox'
        checked={isChecked}
        onChange={handleCheckBoxChange}
      />
    </li>
  );
};

export default CheckBox;
