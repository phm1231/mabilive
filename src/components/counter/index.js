import React from 'react';
import { useSelector } from 'react-redux';

const Counter = () => {
  const options = useSelector(state => state.options);
  const levels = useSelector(state => state.levels);
  const itemInfo = useSelector(state => state.itemInfo);

  return (
    <div>
      <ul>
        {options.map((option, index) => (
          <li key={index}>
            {option}
            {levels[index]}
            {itemInfo[index]}
          </li>
        ))}
      </ul>
    </div>
  );

};

export default Counter;
