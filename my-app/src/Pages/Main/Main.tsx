import React, {useEffect, useState} from 'react';
import BlockCard from "../../Components/BlockCard/BlockCard";
import {InfoType, InTheaterType} from "../../Types";
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
import {Navigate} from "react-router-dom";

const Main = () => {
    const [films, setFilms] = useState<InfoType[]>([])
    const [serials, setSerials] = useState<InfoType[]>([])
    const [theaters, setTheaters] = useState<InTheaterType[]>([])
    const [comingSoon, setComingSoon] = useState<InTheaterType[]>([])
    const [errorApi, setErrorApi] = useState<string>('')
    const [anyError, setAniError] = useState<string>('')

    const sliderData = [
        {link: '/Poster.png', id: 'tt6146586'},
        {link: '/455897.1200xp.jpg', id: 'tt1630029'},
        {link: '/16511668805764.jpg', id: 'tt9114286'},
        ]

    useEffect(() => {
      const url = fetch('https://imdb-api.com/en/API/Top250Movies/k_53o2jbzt')
            .then(response => response.json())
             .catch((e) => {
               setAniError(e)
           })
        url.then(data => setErrorApi(data.errorMessage))
            url.then(data => setFilms(data.items))
    }, []);

    useEffect(() => {
        const url = fetch('https://imdb-api.com/en/API/Top250TVs/k_53o2jbzt')
            .then(response => response.json())
            .catch((e) => {
                setAniError(e)
            })
        url.then(data => setErrorApi(data.errorMessage))
            url.then(data => setSerials(data.items))
    }, []);

    useEffect(() => {
        const url = fetch('https://imdb-api.com/en/API/ComingSoon/k_53o2jbzt')
            .then(response => response.json())
           .catch((e) => {
               setAniError(e)
           })
        url.then(data => setErrorApi(data.errorMessage))
        url.then(data => setComingSoon(data.items))
    }, []);
    useEffect(() => {
        const url =  fetch('https://imdb-api.com/en/API/InTheaters/k_53o2jbzt')
            .then(response => response.json())
            .catch((e) => {
                setAniError(e)
            })
        url.then(data => setErrorApi(data.errorMessage))
        url.then(data => setTheaters(data.items))
    }, []);



    return (
    <div className={classes.wrapper}>
        {errorApi && <Navigate to={'/404'}/>}
        {anyError && <Navigate to={'/404'}/>}
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
                {sliderData.map(item => <SwiperSlide key={item.id}><Slider  link={item.link} id={item.id}/></SwiperSlide>)}

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