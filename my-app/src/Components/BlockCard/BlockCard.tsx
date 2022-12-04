import React, {FC} from 'react';
import classes from './BlockCard.module.css'
import {BlockType, InTheaterType} from "../../Types";
import MiniCard from "../MiniCard/MiniCard";
import {Link} from "react-router-dom";
import Title from "../UI/Title/Title";


const BlockCard: FC<BlockType> = (props) => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.wrapperTop}>
                <Title>{props.name}</Title>
                <Link className={classes.linkSee} to={`/category/${props.apiname}`}>See more...</Link>
            </div>

            <div className={classes.cardWrapper}>
            {props.item.map((item, index) =>
                index < 8 && <MiniCard id={item.id} image={item.image} title={item.title} year={item.year}  imDbRating={item.imDbRating}/>
            )}
            </div>
        </div>
    );
};

export default BlockCard;