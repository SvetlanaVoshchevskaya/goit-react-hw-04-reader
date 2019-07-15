import React from 'react';
import PropTypes from 'prop-types';
import styles from './Reader.module.css';

const Controls = ({ index, handleClickNext, handleClickPrevios }) => {
  // debugger;
  return (
    <section className={styles.controls}>
      <button
        type="button"
        onClick={handleClickPrevios}
        className={index <= 0 ? styles.disabled : styles.button}
        disabled={index <= 0}
      >
        Назад
      </button>
      <button
        type="button"
        onClick={handleClickNext}
        className={index >= 11 ? styles.disabled : styles.button}
        disabled={index >= 11}
      >
        Вперед
      </button>
    </section>
  );
};

Controls.propTypes = {
  index: PropTypes.number.isRequired,
  handleClickNext: PropTypes.func.isRequired,
  handleClickPrevios: PropTypes.func.isRequired,
};
export default Controls;
