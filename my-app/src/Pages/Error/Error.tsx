import React from 'react';
import { Link } from 'react-router-dom';
import classes from "./Error.module.css";

const Error = () => {

    return (
        <div className={classes.wrapper}>
            <h1 className={classes.title}>404 Page not found</h1>
            <Link  to={'/'}> <span className={classes.button}>Return home</span></Link>
        </div>
    );
};

export default Error;