import React, {FC} from 'react';
import {Link} from "react-router-dom";
import classes from "./BurgerMenu.module.css";
import {BurgerMenuTypes} from "../../../Types";

const BurgerMenu: FC<BurgerMenuTypes> = (props) => {
    return (
        <div className={props.type ? classes.wrapperOpen : classes.wrapperClose } onClick={() => props.setType(false)}>
            <Link to={`/category/In Theaters`}><span className={classes.text}>In Theaters</span></Link>
            <Link to={`/category/Coming Soon`}><span className={classes.text}>Coming Soon</span></Link>
            <Link to={`/category/Top 250 Movies`}><span className={classes.text}>Top 250 Movies</span></Link>
            <Link to={`/category/Top 250 TVs`}><span className={classes.text}>Top 250 TVs</span></Link>
            <Link to={`/like`}><span className={classes.text}>Favorite</span></Link>
        </div>
    );
};

export default BurgerMenu;