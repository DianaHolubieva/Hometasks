import React, { Component } from 'react';
import styles from '../TotalComponents.module.scss';
import PropTypes from 'prop-types';

function Component2(props) {
  const { level, step, setLevel } = props;
  const inc = () => {
    setLevel(level+step);
  };
  const dec = () => {
    setLevel(level-step);
  };  
 return (
      <div className={styles.styleForComponent2}>
        <p>Component1</p>
        <p>{level}</p>
        <button onClick={inc}> + </button>
        <button onClick={dec}> - </button>
      </div>
    );
}

Component2.propTypes = {
    level: PropTypes.number,
    step: PropTypes.number,
    setLevel: PropTypes.func.isRequired
};

Component2.defaultProps = {
    level: 0,
    step: 1
};

export default Component2;