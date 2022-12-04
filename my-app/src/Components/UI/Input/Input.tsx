import React, {FC} from 'react';
import {inputType} from "../../../Types";
import classes from './Input.module.css'

const Input: FC<inputType> = (props) => {
    return (
        <input
            className={classes.styleInput}
            style={{width: props.style}}
            type={props.type}
            placeholder={props.name}
        />
    );
};

export default Input;