import React, {FC} from 'react';
import classes from './BlockCard.module.css'
import {BlockType, InTheaterType} from "../../Types";
import MiniCard from "../MiniCard/MiniCard";
import {Link} from "react-router-dom";


const BlockCard: FC<BlockType> = (props) => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.wrapperTop}>
                <div className={classes.nameBlock}>{props.name}</div>
                <Link className={classes.linkSee} to={`/category/${props.apiname}`}>See more...</Link>
            </div>

            <div className={classes.cardWrapper}>
            {props.item.map((item, index) =>
                index < 8 && <MiniCard item={item} raiting={props.raiting}/>
            )}
            </div>
        </div>
    );
};

export default BlockCard;