import React, {FC, useEffect, useState} from 'react';
import {ActorImg, MiniActorType} from "../../Types";
import classes from "./MiniActor.module.css";
import {Link} from "react-router-dom";

const MiniActors: FC<MiniActorType> = (props) => {

    return (
        <Link to={`/actor/${props.id}`}>
        <div className={classes.wrapper}>
            {props.image.includes('nopicture.jpg')
                ? <img className={classes.imageError} src={props.image}/>
                : <img className={classes.image} src={props.image}/>
            }
            <span className={classes.title}>{props.name}</span>
            <span className={classes.text}>{props.type}</span>
        </div>
        </Link>
    );
};

export default MiniActors;