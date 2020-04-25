import React from 'react';
import PropTypes from 'prop-types';
import style from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(item => (
        <button
          className={style.btnStyle}
          key={item.id}
          name={item.name}
          type="button"
          onClick={() => (onLeaveFeedback(item.name))}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  ),
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
