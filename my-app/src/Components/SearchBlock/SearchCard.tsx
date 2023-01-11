import React, {FC} from 'react';
import classes from "./SearchCard.module.css";
import {Link} from "react-router-dom";
import {SearchCardType} from "../../Types";

const SearchCard: FC<SearchCardType> = (props) => {
    return (
        <div className={classes.wrapper}>
            <Link to={props.type === 'Title'? `/card/${props.id}` : `/actor/${props.id}`}>
                <div>
                    <img className={classes.imagePoser} src={props.image} alt={''}/>
                    <p className={classes.mainText}>{props.title}</p>
                </div>
            </Link>
        </div>
    );
};

export default SearchCard;