import React from 'react';
import {ReactComponent as Battery} from "../../../images/icons/battery.svg";
import {ReactComponent as Connection} from "../../../images/icons/connection.svg";
import {ReactComponent as Wifi} from "../../../images/icons/wifi.svg";
import styles from './UiIcons.module.scss';

export const UiIcons = () => {
    return (
        <div className={styles.icons}>
            <Battery className={styles.battery}/>
            <Connection className={styles.connection}/>
            <Wifi className={styles.wifi}/>
        </div>
    );
};

