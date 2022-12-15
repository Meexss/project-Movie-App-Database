import React, {FC} from 'react';
import classes from './Button.module.css'
import {ButtonType} from "../../../Types";

const Button: FC<ButtonType> = (props) => {
    return (
        <button className={classes.styleButton} style={{width: props.style}} onClick={() => props.do()}>
            {props.children}
        </button>
    );
};

export default Button;