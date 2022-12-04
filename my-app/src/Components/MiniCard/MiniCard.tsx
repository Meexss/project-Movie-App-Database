import React from 'react';
import classes from './MiniCard.module.css'
import {CardType} from "../../Types";
import {Link} from "react-router-dom";

const MiniCard: React.FC<CardType> = (props) => {


    return (
        <div className={classes.wrapper}>
            <Link to={`/card/${props.id}`}>
            <img className={classes.imagePoser} src={props.image} alt='Poser image'/>
                {props.year && <div className={classes.year}>{props.year}</div>}
            <p className={classes.mainText}>{props.title}</p>
                {props.imDbRating && <div className={classes.wrapper_raiting}>
                <img src="/MV5BMTk3ODA4Mjc0NF5BMl5BcG5nXkFtZTgwNDc1MzQ2OTE@ 1.png" alt='IMDB'/>
                <div className={classes.rating}>{props.imDbRating}</div>
            </div> }
            </Link>
                <Link className={classes.like} to='/'>
                    <img className={classes.imageLike} src='/Favorite.png' alt='Like'/>
                </Link>
        </div>
    );
};

export default MiniCard;