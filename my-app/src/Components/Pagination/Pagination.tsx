import React, {FC} from 'react';
import {PaginationType} from "../../Types";
import classes from "./Pagination.module.css";

const Pagination: FC<PaginationType> = ({ postsPerPage, totalPosts , paginate, currentPage }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className={classes.pagination}>
                {pageNumbers.map(number => (
                    <li key={number} className={classes.pageItem} onClick={() => paginate(number)} >
                        <span  className={currentPage === number ? classes.activePage : classes.pageLink}>
                            {number}
                        </span>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;