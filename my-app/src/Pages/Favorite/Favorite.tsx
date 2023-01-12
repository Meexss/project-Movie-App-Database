import React from 'react';
import {useSelector} from "react-redux";
import {NotesState} from "../../Components/Redux/cardsReducer";
import Title from "../../Components/UI/Title/Title";
import FavoriteCard from "../../Components/FavoriteCard/FavoriteCard";
import classes from "./Favorite.module.css";

const Favorite = () => {
    const id = useSelector<NotesState, NotesState['id']>((state) => state.id)

    return (
        <div className={classes.wrapper}>
            <Title>Favorite</Title>
            <div className={classes.wrapper_card}>
                {id.map((item) => <FavoriteCard key={item} id={item}/>)}
            </div>
        </div>
    );
};

export default Favorite;