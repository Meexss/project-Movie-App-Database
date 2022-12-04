import React, {useEffect, useState} from 'react';
import BlockCard from "../Components/BlockCard/BlockCard";
import {ActorsType, InfoType, InTheaterType} from "../Types";
import Loader from "../Components/Loader/Loader";

const Main = () => {
    const [films, setFilms] = useState<InfoType[]>([])
    const [serials, setSerials] = useState<InfoType[]>([])
    const [theaters, setTheaters] = useState<InTheaterType[]>([])

    useEffect(() => {
        fetch('https://imdb-api.com/en/API/Top250Movies/k_53o2jbzt')
            .then(response => response.json())
            .then(data => setFilms(data.items))
    }, []);

    useEffect(() => {
        fetch('https://imdb-api.com/en/API/Top250TVs/k_53o2jbzt')
            .then(response => response.json())
            .then(data => setSerials(data.items))
    }, []);

    useEffect(() => {
        fetch('https://imdb-api.com/en/API/InTheaters/k_53o2jbzt')
            .then(response => response.json())
            .then(data => setTheaters(data.items))
    }, []);



    return (
    <div>

        {theaters.length > 0 ?
        <div>
                <BlockCard item={theaters} name={"In Theaters Movies."} apiname='In Theaters' raiting={true}/>
                <BlockCard item={films} name={"Top 250 Movies"} apiname='Top 250 Movies' raiting={true}/>
                <BlockCard item={serials} name={"Top 250 TVs"} apiname='Top 250 TVs' raiting={true}/>

        </div>
                :
                <Loader/>
        }
    </div>
    );

};



export default Main;