import React from 'react';
import classes from './MiniCard.module.css'
import {CardType} from "../../Types";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addCard} from "../Redux/action";

const MiniCard: React.FC<CardType> = (props) => {

const dispatch = useDispatch()

const onAddCard = (id: string) => {
    dispatch(addCard(id))
}

    return (
        <div className={classes.wrapper}>
            <Link to={`/card/${props.id}`}>
            <img className={classes.imagePoser} src={`https://imdb-api.com/API/ResizeImage?apiKey=k_53o2jbzt&size=600x720&url=${props.image}`} alt='Poser image'/>
                {props.year && <div className={classes.year}>{props.year}</div>}
            <p className={classes.mainText}>{props.title}</p>
                {props.imDbRating && <div className={classes.wrapper_raiting}>
                <img className={classes.imageIMDB} src= "/MV5BMTk3ODA4Mjc0NF5BMl5BcG5nXkFtZTgwNDc1MzQ2OTE@ 1.png" alt='IMDB'/>
                <div className={classes.rating}>{props.imDbRating}</div>
            </div> }
            </Link>
                <Link className={classes.like} to='/'>
                    <img className={classes.imageLike} onClick={() => onAddCard(props.id)} src='/Favorite.png' alt='Like'/>
                </Link>
        </div>
    );
};


export default MiniCard;