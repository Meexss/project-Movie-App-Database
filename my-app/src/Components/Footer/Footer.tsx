import React from 'react';
import classes from "./Footer.module.css";

const Footer = () => {
    return (
        <div className={classes.wrapper}>
            <span className={classes.text}>© 2022 MovieBox by Dev. Maksim Pavlov</span>
        </div>
    );
};

export default Footer;