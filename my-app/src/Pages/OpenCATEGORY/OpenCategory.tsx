import React, {useEffect, useState} from 'react';
import {InfoType, ParamsType} from "../../Types";
import {useParams} from "react-router-dom";
import MiniCard from "../../Components/MiniCard/MiniCard";
import classes from './OpenCategory.module.css'
import Title from "../../Components/UI/Title/Title";
import Loader from "../../Components/Loader/Loader";
import Pagination from "../../Components/Pagination/Pagination";
import { Navigate } from "react-router-dom";

const OpenCategory = () => {
    const {idCategory} = useParams<ParamsType>()
    const [data, setData] = useState<InfoType[]>([])
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [postsPerPage] = useState<number>(12);
    const [errorApi, setErrorApi] = useState<string>('')
    const [anyError, setAniError] = useState<string>('')
    const urlName = idCategory?.split(' ').join('')

    useEffect(() => {
        const url = fetch(`https://imdb-Api.com/en/API/${urlName}/k_53o2jbzt`)
            .then(response => response.json())
            .catch((e) => {
                setAniError(e)
            })
        url.then(data => setData(data.items))
        url.then(data => setErrorApi(data.errorMessage))
    }, [idCategory]);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber: number): void => setCurrentPage(pageNumber);
    return (
        <div>
            {errorApi && <Navigate to={'/404'}/>}
            {anyError && <Navigate to={'/404'}/>}
            {data.length > 0
                ?
                <div className={classes.wrapper}>
                    <Title>{idCategory}</Title>
                    <div className={classes.wrapper_card}>
                        {currentPosts.map(item =>
                            <MiniCard
                                key={item.id}
                                id={item.id}
                                image={item.image}
                                title={item.title}
                                imDbRating={item.imDbRating}/>
                        )}
                    </div>
                    <Pagination
                        postsPerPage={postsPerPage}
                        totalPosts={data.length}
                        paginate={paginate}
                        currentPage={currentPage}
                    />
                </div>

                : <Loader/>}
        </div>
    );
};
export default OpenCategory;