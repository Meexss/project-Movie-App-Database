import React, {FC} from 'react';
import {TitleType} from "../../../Types";
import classes from './Title.module.css'

const Title: FC<TitleType> = (props) => {
    return (
        <h1 className={classes.titleStyle}>
            {props.children}
        </h1>
    );
};

export default Title;