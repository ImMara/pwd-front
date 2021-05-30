import React, {useEffect, useState} from 'react';
import Cards from "../cards/Cards";
import styles from "./Page.module.scss";
import Pagination from "../Pagination/Pagination";

function Page({blogs}) {

    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 6

    const handlePageChange = (page) => {
        setCurrentPage(page)
    }

    const paginatedBlog = Pagination.getData(blogs, currentPage, itemsPerPage)

    return (
        <>
            <div className={styles.blog_container + " wrapper"}>
                { itemsPerPage < blogs.length &&
                    <Pagination
                        currentPage={currentPage}
                        itemsPerPage={itemsPerPage}
                        length={blogs.length}
                        onPageChanged={handlePageChange}
                    />
                }
                {paginatedBlog.map(b => (
                    <Cards blogs={b} key={b.id}/>
                ))}
                { itemsPerPage < blogs.length &&
                <Pagination
                    currentPage={currentPage}
                    itemsPerPage={itemsPerPage}
                    length={blogs.length}
                    onPageChanged={handlePageChange}
                />
                }
            </div>
        </>
    );
}

export default Page;