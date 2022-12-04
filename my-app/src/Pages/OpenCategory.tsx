import React, {useEffect, useState} from 'react';
import {InfoType, ParamsType} from "../Types";
import {useParams} from "react-router-dom";
import MiniCard from "../Components/MiniCard/MiniCard";
import classes from './OpenCategory.module.css'
import Title from "../Components/UI/Title/Title";
import Loader from "../Components/Loader/Loader";

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
        <div>
            {data.length > 0
                ?   <div className={classes.wrapper}>
                        <Title>{idCategory}</Title>
                        <div className={classes.wrapper_card}>
                            {data.map(item =>
                            <MiniCard
                                key={item.id}
                                id={item.id}
                                image={item.image}
                                title={item.title}
                                imDbRating={item.imDbRating}/>
                            )}
                        </div>
                    </div>

              :     <Loader/>}
     </div>
    );
};

export default OpenCategory;