import React from 'react';
import PropTypes from 'prop-types';
import styles from './Reader.module.css';

const Counter = ({ index, length, step }) => (
  <p className={styles.counter}>
    {index + step}/{length}
  </p>
);

Counter.propTypes = {
  index: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
};
export default Counter;
