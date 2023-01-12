import React, {FC, useEffect, useState} from 'react';
import classes from "./FavoriteCard.module.css";
import {Link, Navigate} from "react-router-dom";
import {OpenCardType} from "../../Types";

interface FavoriteCardType {
    id: string
}

const FavoriteCard: FC<FavoriteCardType> = (props) => {

    const [data, setData] = useState<OpenCardType>()
    const [anyError, setAniError] = useState<string>('')

    useEffect(() => {
        const url = fetch(`https://imdb-api.com/en/API/Title/k_53o2jbzt/${props.id}/Images,Wikipedia,`)
            .then(response => response.json())
            .then(data => setData(data))
            .catch((e) => {
                setAniError(e)
            })
        window.scrollTo(0, 0)
    }, [props.id]);


    return (
        <div className={classes.wrapper}>
            {anyError && <Navigate to={'/404'}/>}
            <Link to={`/card/${props.id}`}>
                <img className={classes.imagePoser} src={`https://imdb-api.com/API/ResizeImage?apiKey=k_53o2jbzt&size=600x720&url=${data?.image}`} alt='Poser image'/>
                {data?.year && <div className={classes.year}>{data?.year}</div>}
                <p className={classes.mainText}>{data?.title}</p>
                {data?.imDbRating && <div className={classes.wrapper_raiting}>
                    <img className={classes.imageIMDB} src= "/MV5BMTk3ODA4Mjc0NF5BMl5BcG5nXkFtZTgwNDc1MzQ2OTE@ 1.png" alt='IMDB'/>
                    <div className={classes.rating}>{data?.imDbRating}</div>
                </div> }
            </Link>
            <Link className={classes.like} to='/'>
                <img className={classes.imageLike} src='/Favorite.png' alt='Like'/>
            </Link>
        </div>
    );
};

export default FavoriteCard;