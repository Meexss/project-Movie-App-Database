import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import {CardType, InfoType, OpenCardType, ParamsType, ParamsTypeMore, PosterType} from "../../Types";
import Button from "../../Components/UI/Button/Button";
import Title from "../../Components/UI/Title/Title";
import classes from './OpenCard.module.css'
import InfoCard from "../../Components/InfoCard/InfoCard";
import Loader from "../../Components/Loader/Loader";
import MiniActors from "../../Components/MiniActors/MiniActors";
import MiniCard from "../../Components/MiniCard/MiniCard";
import PopUpWindow from "../../Components/PopUpWindow/PopUpWindow";

const OpenCard = () => {
    const {id} = useParams<ParamsTypeMore>()

    const [data, setData] = useState<OpenCardType>()
    const [click, setClick] = useState<boolean>(false)

    const isClicked = () => {
        click
            ? setClick(false)
            : setClick(true)
    }

    useEffect(() => {
        fetch(`https://imdb-api.com/en/API/Title/k_53o2jbzt/${id}/Images,Wikipedia,`)
            .then(response => response.json())
            .then(data => setData(data))
             window.scrollTo(0, 0)
    }, [id]);

    console.log(data)
    return (
        <div>
            <PopUpWindow id={id} display={click} do={isClicked}/>
            {data ?
                <div>
                    <div className={classes.wrapperBlockImg}>
                        <img  className={classes.wrapperImg} src={data?.image}/>
                        <div className={classes.filterImg}></div>
                        <div className={classes.wrapperBread}>
                            <Title>{data?.title}</Title>
                        </div>
                    </div>
                    <div className={classes.wrapper}>
                        <div>
                            <img className={classes.imageCard} src={`https://imdb-api.com/API/ResizeImage?apiKey=k_53o2jbzt&size=490x720&url=${data?.image}`}/>
                            <Button style={'100%'} do={isClicked} >Watch trailer</Button>
                        </div>
                        <div className={classes.rightBlock}>
                            <p className={classes.text}>{data?.plot}</p>
                            <div className={classes.wrapperIcon}>
                                <img className={classes.imageIcon} src='/MV5BMTk3ODA4Mjc0NF5BMl5BcG5nXkFtZTgwNDc1MzQ2OTE@ 1.png'/>
                                <span className={classes.textIcon}> {data?.imDbRating} / 10.0</span>
                            </div>
                            <div className={classes.wrapperInfo}>
                                <InfoCard text='Type' value={data?.type}/>
                                <InfoCard text={data?.type == 'Movie' ? 'Release Date:' : 'First air date' } value={data?.releaseDate}/>
                                {data?.type == 'Movie'
                                    ? <InfoCard text='Budget' value={data?.boxOffice.budget == '' ? '-' : data?.boxOffice.budget }/>
                                    : <InfoCard text='Last air date' value={data?.tvSeriesInfo.yearEnd}/>
                                }
                                {data?.type == 'Movie'
                                    ? <InfoCard text='Run time' value={data?.runtimeStr}/>
                                    : <InfoCard text='No. of Seasons' value={data?.tvSeriesInfo.seasons.length}/>
                                }
                                <InfoCard text='Production companies' value={data?.companies}/>
                                <InfoCard text='Filming locations' value={data?.countries}/>
                                <InfoCard text='Genres' value={data?.genres}/>
                            </div>
                        </div>
                    </div>
                    <Title>Cast</Title>
                    <div className={classes.wrapperActor}>
                        {data?.actorList.map((item, index) =>
                            index < 16 &&
                            <MiniActors
                                key={item.id}
                                id={item.id}
                                type={'Actor'}
                                name={item.name}
                                image={item.image}/>
                        )}
                    </div>
                    {data?.wikipedia.plotShort.plainText &&
                        <div>
                            <Title>Overview</Title>
                            <p className={classes.text}>
                                {data?.wikipedia.plotShort.plainText}
                            </p>
                        </div>
                    }
                    <Title>Similar</Title>
                    <div className={classes.wrapperSemilar}>
                        {data?.similars.map(item =>
                            <MiniCard
                                key={item.id}
                                id={item.id}
                                image={item.image}
                                title={item.title}
                                imDbRating={item.imDbRating}/>
                        )}
                    </div>
                 </div>
            : <Loader/>
            }
        </div>
    );
};

export default OpenCard;