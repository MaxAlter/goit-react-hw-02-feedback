import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import style from './FeedbackOptions.module.css';

const FeedbackOptions = ({ onLeaveFeedback }) => (
  <Fragment>
    <button
      className={style.btnStyle}
      name="good"
      type="button"
      onClick={onLeaveFeedback}
    >
      Good
    </button>
    <button
      className={style.btnStyle}
      name="neutral"
      type="button"
      onClick={onLeaveFeedback}
    >
      Neutral
    </button>
    <button
      className={style.btnStyle}
      name="bad"
      type="button"
      onClick={onLeaveFeedback}
    >
      Bad
    </button>
  </Fragment>
);

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
