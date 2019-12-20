import React from 'react';
import PropTypes from 'prop-types';
import Notification from '../Notification/Notification';
import Statistic from '../Statistic/Statistic';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  if (good === 0 && neutral === 0 && bad === 0) {
    return <Notification message="No feedback given" />;
  }
  return (
    <div>
      <Statistic label="Good" value={good} />
      <Statistic label="Neutral" value={neutral} />
      <Statistic label="Bad" value={bad} />
      <Statistic label="Total" value={total} />
      <Statistic label="Positive Feedback" value={`${positivePercentage}%`} />
    </div>
  );
};

Statistics.defaultProps = {
  good: 0,
  neutral: 0,
  bad: 0,
  total: 0,
  positivePercentage: '',
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.string,
};

export default Statistics;
