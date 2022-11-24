import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {InfoType, ParamsType, ParamsTypeMore} from "../Types";

const OpenCard = () => {
    const {id} = useParams<ParamsTypeMore>()

    const [data, setData] = useState<InfoType[]>([])

    useEffect(() => {
        fetch(`https://imdb-api.com/en/API/Title/k_53o2jbzt/${id}/Images,Trailer,Ratings,`)
            .then(response => response.json())
            .then(data => setData(data))
    }, []);


    console.log(data)
    return (

        <div>

        </div>
    );
};

export default OpenCard;