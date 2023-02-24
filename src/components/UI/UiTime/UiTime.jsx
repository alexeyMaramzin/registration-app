import React from 'react';
import Moment from 'react-moment';
import styles from './UiTime.module.scss';

export const UiTime = () => {
    return (
        <Moment className={styles.time} format="HH:mm" interval={1000}/>
    );
};

