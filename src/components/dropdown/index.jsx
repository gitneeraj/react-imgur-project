import React from 'react';
import { string, shape, arrayOf } from 'prop-types';
import { useDispatch } from 'react-redux';

import { setSelection } from '../../store/features/gallery';

const propTypes = {
  type: string,
  options: arrayOf(
    shape({
      value: string,
      text: string
    })
  )
};

function Dropdown({ type, options }) {
  const dispatch = useDispatch();

  return (
    <select onChange={(event) => dispatch(setSelection({ value: event.target.value, type }))}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.text}
        </option>
      ))}
    </select>
  );
}

Dropdown.propTypes = propTypes;
export default Dropdown;
