import React, {useEffect, useState} from 'react';
import classes from './BigActor.module.css'
import {Navigate, useParams} from "react-router-dom";
import {BigActorType, ParamsTypeMore} from "../../Types";
import InfoCard from "../../Components/InfoCard/InfoCard";
import Title from "../../Components/UI/Title/Title";
import MiniCard from "../../Components/MiniCard/MiniCard";
import Loader from "../../Components/Loader/Loader";

const BigActor = () => {

    const {id} = useParams<ParamsTypeMore>()
    const [actor, setActor] = useState<BigActorType>()
    const [anyError, setAniError] = useState<string>('')

    useEffect(() => {
        fetch(`https://imdb-api.com/en/API/Name/k_53o2jbzt/${id}`)
            .then(response => response.json())
            .then(data => setActor(data))
            .catch((e) => {
                setAniError(e)
            })
    }, [id]);

    return (
        <div>
            {anyError && <Navigate to={'/404'}/>}
            {actor ?
                <div>
                    <div className={classes.wrapper}>
                        <div>
                            <img className={classes.imageCard} src={`https://imdb-api.com/API/ResizeImage?apiKey=k_53o2jbzt&size=700x1000&url=${actor?.image}`} alt={''}/>
                        </div>
                        <div className={classes.rightBlock}>
                            <Title>{actor?.name}</Title>
                            <div className={classes.wrapperInfo}>
                                <InfoCard text='Role' value={actor?.role}/>
                                <InfoCard text='Birth Date' value={actor?.birthDate}/>
                                {actor?.deathDate &&
                                    <InfoCard text='Death Date' value={actor.deathDate}/>
                                }
                                <InfoCard text='Awards' value={actor?.awards}/>
                                <InfoCard text='Height' value={actor?.height}/>
                                <InfoCard text='Col All Movies' value={actor?.castMovies.length}/>
                            </div>
                        </div>
                    </div>
                    <Title>Overview</Title>
                    <p className={classes.text}>{actor?.summary}</p>
                    <div>
                        <Title>Know for</Title>
                        <div className={classes.wrapperKnowFor}>
                            {actor?.knownFor.map(item => <MiniCard key={item.id} id={item.id} image={item.image}
                                                                   title={item.title} role={item.role}
                                                                   year={item.year}/>)}
                        </div>
                    </div>
                </div>
                : <Loader/>
            }
        </div>

    );
};

export default BigActor;