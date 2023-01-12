import React, {FC} from 'react';
import classes from "./InputForAuth.module.css";
import {InputAuthType} from "../../../Types";

const InputForAuth: FC<InputAuthType> = (props) => {
    return (
        <div>
            <span className={classes.text}>{props.name}</span>
            <input
                className={props.error ? classes.error : classes.styleInput}
                onChange={props.onChange}
                value={props.value}
                type={props.type}
                placeholder={props.placeholder}
            />
        </div>
    );
};

export default InputForAuth;