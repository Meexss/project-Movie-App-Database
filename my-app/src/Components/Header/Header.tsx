import React from 'react';
import {Link} from "react-router-dom";
import classes from './Header.module.css'

const Header = () => {


    return (
        <div className={classes.wrapper}>
            <div >
                <Link className={classes.logo_wrapper} to='/'>
                <img className={classes.logo_img} src='/tv.png' alt='logo'/>
                <p className={classes.logo_title}>MovieBox</p>
                </Link>
            </div>
            <div>
                <input
                    className={classes.search}
                    type='text'
                    placeholder='What do you want to watch?'/>
            </div>
            <div className={classes.wrapper_burger}>
                <Link className={classes.signIn} to='/'>Sign in</Link>
                <div className={classes.burger}></div>
            </div>
        </div>
    );
};

export default Header;