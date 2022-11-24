import React from 'react';
import classes from './MiniCard.module.css'
import {CardType} from "../../Types";
import {Link} from "react-router-dom";

const MiniCard: React.FC<CardType> = (props) => {
    return (
        <div className={classes.wrapper}>
            <Link to={`/card/${props.item.id}`}>
            <img className={classes.imagePoser} src={props.item.image} alt='Poser image'/>
            <div className={classes.year}>{props.item.year}</div>
            <p className={classes.mainText}>{props.item.title}</p>
            <div className={classes.wrapper_raiting}>
                <img src="/MV5BMTk3ODA4Mjc0NF5BMl5BcG5nXkFtZTgwNDc1MzQ2OTE@ 1.png" alt='IMDB'/>
                <div className={classes.rating}>{props.item.imDbRating}</div>
            </div>

            {/*{props.raiting && <div>Place in TOP: {props.item.rank}</div>}*/}
            </Link>
                <Link className={classes.like} to='/'>
                    <img src='/Favorite.png' alt='Like'/>
                </Link>
        </div>
    );
};

export default MiniCard;