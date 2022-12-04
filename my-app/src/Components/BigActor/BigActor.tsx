import React, {useEffect, useState} from 'react';
import classes from './BigActor.module.css'
import {useParams} from "react-router-dom";
import {BigActorType, ParamsTypeMore} from "../../Types";
import Button from "../UI/Button/Button";
import InfoCard from "../InfoCard/InfoCard";
import Title from "../UI/Title/Title";
import MiniCard from "../MiniCard/MiniCard";
import Loader from "../Loader/Loader";

const BigActor = () => {

    const {id} = useParams<ParamsTypeMore>()
    const [actor, setActor] = useState<BigActorType>()

    useEffect(() => {
        fetch(`https://imdb-api.com/en/API/Name/k_53o2jbzt/${id}`)
            .then(response => response.json())
            .then(data => setActor(data))
    }, []);

    return (
        <div>
            {actor ?
                <div>
                    <div className={classes.wrapper}>
                        <div>
                            <img className={classes.imageCard} src={actor?.image}/>
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