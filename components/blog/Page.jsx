import React, {useEffect, useState} from 'react';
import {getBlogs} from "../../actions";

export  async function getStaticProps(){
    const blogs = await getBlogs()
    return { props : { blogs } }
}

function Page({blogs}) {
    const test = () =>{
        console.log(blogs)
    }
    test()
    return (
        <>
             <div>
                 {blogs}
             </div>
        </>
    );
}

export default Page;