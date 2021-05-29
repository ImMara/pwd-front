import React, {useEffect, useState} from 'react';
import Cards from "../cards/Cards";
import Header from "../layouts/header/Header";
import styles from "./Page.module.scss";

function Page({blogs}) {

    return (
        <div style={{backgroundColor: 'silver'}}>
            <Header screen={true} color={"red"} height={"400px"}/>
            <div className={styles.blog_container + " wrapper"}>
                {blogs.map(b => (
                    <Cards blogs={b}/>
                ))}
            </div>
        </div>
    );
}

export default Page;