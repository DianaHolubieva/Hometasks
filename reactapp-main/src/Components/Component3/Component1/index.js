import React from "react";
import styles from '../TotalComponents.module.scss';
import PropTypes from 'prop-types';

function Component1(props){
    const {level} = props;
    return(
        <div className={styles.styleForComponent1}>
            <p>Component1</p>
            <p>You have {level} game level!!!</p>
        </div>
    );
}

Component1.propTypes = {
    level: PropTypes.number.isRequired
};


Component1.defaultProps = {
    level: 0
}

export default Component1;