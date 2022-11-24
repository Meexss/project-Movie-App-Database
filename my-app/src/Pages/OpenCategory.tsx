import React, {useEffect, useState} from 'react';
import {InfoType, ParamsType} from "../Types";
import {useParams} from "react-router-dom";
import MiniCard from "../Components/MiniCard/MiniCard";
import classes from './OpenCategory.module.css'

const OpenCategory = () => {
    const {idCategory} = useParams<ParamsType>()
    const [data, setData] = useState<InfoType[]>([])
    const urlName = idCategory?.split(' ').join('')
    useEffect(() => {
        fetch(`https://imdb-api.com/en/API/${urlName}/k_53o2jbzt`)
            .then(response => response.json())
            .then(data => setData(data.items))
    }, []);

    console.log(data)

    return (
        <div className={classes.wrapper}>
            <div className={classes.title}>{idCategory}</div>
            <div className={classes.wrapper_card}>
                {data.map(item =>
                <MiniCard item={item} raiting={false}/>
                )}
            </div>
        </div>
    );
};

export default OpenCategory;