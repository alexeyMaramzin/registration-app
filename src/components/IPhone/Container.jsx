import React from 'react';
import styles from './IPhone.module.scss';
import {StartForm, SignupForm} from '.';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {UiInput} from "../UI/UiInput/UiInput";
import {ReactComponent as UserIcon} from "../../images/icons/user.svg";
import {ReactComponent as LockIcon} from "../../images/icons/lock.svg";

export const Container = () => {
    return (
        <div className={styles.container}>
            <Router>
                <Routes>
                    <Route path='/' element={<StartForm/>}/>
                    <Route path='signup' element={<SignupForm/>}/>
                </Routes>
            </Router>
        </div>
    );
};

