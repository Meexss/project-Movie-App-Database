import React, {FC, useEffect, useState} from 'react';
import {OpenCardType, SliderType} from "../../Types";
import classes from "./Slider.module.css";
import Title from "../UI/Title/Title";
import Button from "../UI/Button/Button";
import PopUpWindow from "../PopUpWindow/PopUpWindow";

const Slider: FC<SliderType> = (props) => {
    const [data, setData] = useState<OpenCardType>()
    const [click, setClick] = useState<boolean>(false)

    const isClicked = () => {
        click
            ? setClick(false)
            : setClick(true)
    }

    useEffect(() => {
        fetch(`https://imdb-api.com/en/API/Title/k_53o2jbzt/${props.id}/Images,Wikipedia,`)
            .then(response => response.json())
            .then(data => setData(data))
    }, []);

    return (
        <div className={classes.wrapper}>
            <img className={classes.image} src={props.link}/>
            <div className={classes.wrapperInfo}>
                <Title>{data?.title}</Title>
                <div className={classes.wrapperIcon}>
                    <img className={classes.imageIcon} src='/MV5BMTk3ODA4Mjc0NF5BMl5BcG5nXkFtZTgwNDc1MzQ2OTE@ 1.png'/>
                    <span className={classes.textIcon}> {data?.imDbRating} / 10.0</span>
                </div>
                <p className={classes.text}>{data?.plot}</p>
                <Button style={'100%'} do={isClicked} >Watch trailer</Button>
                <PopUpWindow id={props.id} display={click} do={isClicked}/>
            </div>
        </div>
    );
};

export default Slider;