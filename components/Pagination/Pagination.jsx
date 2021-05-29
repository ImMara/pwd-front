import React from 'react';
import styles from './Pagination.module.scss';

function Pagination(props) {

    const pagesCount = Math.ceil(props.length / props.itemsPerPage)
    const pages = []

    for(let i=1; i<= pagesCount; i++)
    {
        pages.push(i)
    }

    return (
        <>
            <ul className={styles.pagination_container}>
                <li className={(props.currentPage === 1 ? " disabled" : null)}>
                    <div className={styles.btn} onClick={()=>props.onPageChanged(props.currentPage - 1)} >&laquo;</div>
                </li>
                    {pages.map(page => (
                        <li key={page} className={( props.currentPage === page && " active" ) }>
                            <div className={styles.btn} onClick={() => props.onPageChanged(page)}>{page}</div>
                        </li>
                    ))}
                <li className={(props.currentPage === pagesCount && " disabled")}>
                    <div className={styles.btn} onClick={()=>props.onPageChanged(props.currentPage + 1)} >&raquo;</div>
                </li>
            </ul>
        </>
    );
}

Pagination.getData = (items, currentPage, itemsPerPage) => {
    const start = currentPage * itemsPerPage - itemsPerPage
    return items.slice(start, start + itemsPerPage)
}


export default Pagination;