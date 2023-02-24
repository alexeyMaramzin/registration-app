import React from 'react';
import cn from 'classnames';
import IPhone from '../../images/IPhone.png';
import Logo from '../../images/Logo.jpg';
import styles from './IPhone.module.scss';
import {StartForm} from '.';
import {UiButton} from "../UI";
export const Container = () => {
    return (
        <div className={styles.container}>
            <img alt="" className={styles.iphone} src={IPhone}/>
            <img alt="" className={styles.logo} src={Logo}/>
            <StartForm/>
            <div onClick={()=>console.log("log")} className={styles.iphone_login}>
                <UiButton padding='20px 140px' name='Log in' color='#FFCA42'/>
            </div>
            <div onClick={()=>console.log("sign")} className={styles.iphone_signup}>
                <UiButton padding='20px 132px' name='Sign up' color='#D5E7D4'/>
            </div>
        </div>
    );
};

