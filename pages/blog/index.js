import React, {useEffect, useState} from 'react';
import Blog from "../../components/blog/Blog";
import {getBlogs} from "../../actions";
import Header from "../../components/layouts/header/Header";
import Image from 'next/image'
import Loader from "../../components/loader/loader";



function Index(props) {

    const {blogs} = props;

    return (
        <>
            <Header screen={true} color={"black"} height={"400px"}>
                <div style={{
                    position:'absolute',
                    width:'100%',
                    height:'400px',
                    top:0,
                    left:0,
                    background: 'linear-gradient(to top, rgba(241,241,243,1) 0%, rgba(0,0,0,0) 100%)'
                    }}
                />
                <img src="/images/header.jpg" style={{height:'100%', width:'100%', objectFit:'cover',}} alt=""/>
            </Header>
            <Blog blogs={blogs}/> 
        </>
    );
}

Index.getInitialProps = async () => {
    const blogs = await getBlogs()
    return {blogs}
}
export default Index;