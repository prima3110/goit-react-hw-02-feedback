import React from 'react';
import PropTypes from 'prop-types';
import Statistics from '../Statistics/Statistics';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';

const Section = ({
  title,
  good,
  neutral,
  bad,
  total,
  positivePercentage,
  options,
  onLeaveFeedback,
}) => {
  return (
    <div>
      <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      <h1>{title}</h1>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        positivePercentage={positivePercentage}
      />
    </div>
  );
};

Section.defaultProps = {
  good: 0,
  neutral: 0,
  bad: 0,
  total: 0,
  positivePercentage: '',
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.string,
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default Section;
