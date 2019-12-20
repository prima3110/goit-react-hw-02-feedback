import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      <h1>Please leave feedback</h1>
      {Object.keys(options).map(option => (
        <button
          type="button"
          name={option}
          key={shortid.generate()}
          onClick={onLeaveFeedback}
          className={styles.button}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
