import React, {FC} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation, Pagination} from 'swiper';
import {SearchBlockType} from "../../Types";
import classes from "./SearchBlock.module.css";
import SearchCard from "./SearchCard";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



const SearchBlock: FC<SearchBlockType> = (props) => {
    return (
        <div className={classes.wrapper}>

                <Swiper modules={[ Pagination, Navigation]}
                        pagination={{
                            dynamicBullets: true,
                            clickable: true
                        }}
                        slidesPerView={3}
                        spaceBetween={10}
                        slidesPerGroup={1}
                        // loop={true}
                        loopFillGroupWithBlank={true}
                        navigation={true}
                >
                    {props.item.map((item, index) =>
                   <SwiperSlide key={item.id}><SearchCard type={item.resultType} id={item.id} title={item.title} image={item.image}/></SwiperSlide>
                    )}
                </Swiper>
                :
        </div>
    );
};

export default SearchBlock;