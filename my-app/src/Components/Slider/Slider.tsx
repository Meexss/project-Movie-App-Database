import React, {FC, useEffect, useState} from 'react';
import {OpenCardType, SliderType} from "../../Types";
import classes from "./Slider.module.css";
import Title from "../UI/Title/Title";
import PopUpWindow from "../PopUpWindow/PopUpWindow";
import {Link, Navigate} from "react-router-dom";

const Slider: FC<SliderType> = (props) => {
    const [data, setData] = useState<OpenCardType>()
    const [click, setClick] = useState<boolean>(false)
    const [anyError, setAniError] = useState<string>('')

    const isClicked = () => {
        click
            ? setClick(false)
            : setClick(true)
    }

    useEffect(() => {
        fetch(`https://imdb-api.com/en/API/Title/k_53o2jbzt/${props.id}/Images,Wikipedia,`)
            .then(response => response.json())
            .then(data => setData(data))
            .catch((e) => {
                setAniError(e)
            })
    }, []);

    return (
        <Link to={`/card/${props.id}`}>
            {anyError && <Navigate to={'/404'}/>}
            <div className={classes.wrapper}>
                <img className={classes.image} src={props.link} alt={'poster'}/>
                <div className={classes.wrapperInfo}>
                    <Title>{data?.title}</Title>
                    <div className={classes.wrapperIcon}>
                        <img className={classes.imageIcon} src='/MV5BMTk3ODA4Mjc0NF5BMl5BcG5nXkFtZTgwNDc1MzQ2OTE@ 1.png' alt={''}/>
                        <span className={classes.textIcon}> {data?.imDbRating} / 10.0</span>
                    </div>
                    <p className={classes.text}>{data?.plot}</p>
                    <PopUpWindow id={props.id} display={click} do={isClicked}/>
                </div>
            </div>
        </Link>
    );
};

export default Slider;