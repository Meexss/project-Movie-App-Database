import React, {useEffect, useState} from 'react';
import BlockCard from "../../Components/BlockCard/BlockCard";
import {ActorsType, ComingSoonTypes, InfoType, InTheaterType} from "../../Types";
import Loader from "../../Components/Loader/Loader";
import Slider from "../../Components/Slider/Slider";
import classes from "./Main.module.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Main = () => {
    const [films, setFilms] = useState<InfoType[]>([])
    const [serials, setSerials] = useState<InfoType[]>([])
    const [theaters, setTheaters] = useState<InTheaterType[]>([])
    const [comingSoon, setComingSoon] = useState<InTheaterType[]>([])

    const sliderData = [
        {link: '/Poster.png', id: 'tt6146586'},
        {link: '/455897.1200xp.jpg', id: 'tt1630029'},
        {link: '/16511668805764.jpg', id: 'tt9114286'},

        ]
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
        fetch('https://imdb-api.com/en/API/ComingSoon/k_53o2jbzt')
            .then(response => response.json())
            .then(data => setComingSoon(data.items))
    }, []);
    useEffect(() => {
        fetch('https://imdb-api.com/en/API/InTheaters/k_53o2jbzt')
            .then(response => response.json())
            .then(data => setTheaters(data.items))
    }, []);



    return (
    <div className={classes.wrapper}>

        {theaters.length > 0 ?
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                loop={true}
                loopFillGroupWithBlank={true}
            >
                {sliderData.map(item => <SwiperSlide><Slider link={item.link} id={item.id}/></SwiperSlide>)}

            </Swiper>

                <BlockCard item={theaters} name={"In Theaters Movies."} apiname='In Theaters' raiting={true}/>
                <BlockCard item={comingSoon} name={"Coming Soon"} apiname='Coming Soon' raiting={true}/>
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