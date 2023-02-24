import React from 'react';
import styles from "./IPhone.module.scss";
import {UiTime, UiIcons} from "..";
import {UiButton} from "..";
export const StartForm = () => {
    return (
        <div className={styles.start_form}>
            <div className={styles.start_form__flex}>
                <div className={styles.time}><UiTime/></div>
                <div className={styles.icons}><UiIcons/></div>
            </div>
            <h1 className={styles.start_form__head}>Let's<br/> get started</h1>
            <p className={styles.start_form__bot}>Everything's start from here</p>
        </div>
    );
};

