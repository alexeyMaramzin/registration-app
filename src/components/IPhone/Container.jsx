import React from 'react';
import styles from './IPhone.module.scss';
import {StartForm, SignupForm, LoginForm} from '.';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
export const Container = () => {
    return (
        <div className={styles.container}>
            <Router>
                <Routes>
                    <Route path='/' element={<StartForm/>}/>
                    <Route path='login' element={<LoginForm/>}/>
                    <Route path='signup' element={<SignupForm/>}/>
                </Routes>
            </Router>
        </div>
    );
};

