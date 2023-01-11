import React, {FC} from 'react';
import classes from './InfoType.module.css'
import {InfoCardType} from "../../Types";


const InfoCard: FC<InfoCardType> = (props) => {
    return (
        <div className={classes.wrapper}>
            <span className={classes.infoTitle}>{props.text}</span>
            <span className={classes.infoText}>{props.value}</span>
        </div>
    );
};

export default InfoCard;