import React, {FC} from 'react';
import classes from './BlockCard.module.css'
import {BlockType, InTheaterType} from "../../Types";
import MiniCard from "../MiniCard/MiniCard";
import {Link} from "react-router-dom";
import Title from "../UI/Title/Title";
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const BlockCard: FC<BlockType> = (props) => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.wrapperTop}>
                <Title>{props.name}</Title>
                <Link className={classes.linkSee} to={`/category/${props.apiname}`}>See more...</Link>
            </div>
            <div className={classes.cardWrapper}>
                <Swiper modules={[ Pagination, Navigation]}
                        pagination={{
                            dynamicBullets: true,
                            clickable: true
                        }}
                        slidesPerView={4}
                        spaceBetween={30}
                        slidesPerGroup={4}
                        loop={true}
                        loopFillGroupWithBlank={true}
                        navigation={true}
                >
                    {props.item.map((item, index) =>
                index < 12 && <SwiperSlide><MiniCard id={item.id} image={item.image} title={item.title} year={item.year}  imDbRating={item.imDbRating}/></SwiperSlide>
                    )}
                </Swiper>
            </div>
        </div>
    );
};

export default BlockCard;