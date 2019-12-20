import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistic.module.css';

const Statistic = ({ label, value }) => {
  return (
    <div className={styles.div}>
      <span className={styles.text}>{label}: </span>
      <span className={styles.text}>{value}</span>
    </div>
  );
};

Statistic.defaultProps = {
  value: '',
};

Statistic.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Statistic;
