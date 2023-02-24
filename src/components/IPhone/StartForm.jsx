import React from 'react';
import styles from "./IPhone.module.scss";
import {UiTime, UiIcons} from "..";
import {UiButton} from "..";
import IPhone from "../../images/IPhone.png";
import Logo from "../../images/Logo.jpg";
export const StartForm = () => {
    return (
        <div className={styles.start_form}>
            <div className={styles.start_form__flex}>
                <div className={styles.time}>
                    <UiTime/>
                </div>
                <div className={styles.icons}>
                    <UiIcons/>
                </div>
            </div>
            <h1 className={styles.start_form__head}>
                Let's
                <br/>
                get started
            </h1>
            <p className={styles.start_form__bot}>
                Everything's start from here
            </p>
            <img
                alt="Downloading..."
                className={styles.iphone}
                src={IPhone}/>
            <img
                alt="Downloading..."
                className={styles.logo}
                src={Logo}/>
            <div onClick={()=>console.log("log")} className={styles.iphone_login}>
                <UiButton
                    padding='20px 140px'
                    name='Log in'
                    color='#FFCA42'/>
            </div>
            <div onClick={()=>console.log("sign")} className={styles.iphone_signup}>
                <UiButton
                    padding='20px 132px'
                    name='Sign up'
                    color='#D5E7D4'/>
            </div>
        </div>
    );
};

