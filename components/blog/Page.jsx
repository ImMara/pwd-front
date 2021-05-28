import React, {useEffect, useState} from 'react';
import {getBlogs} from "../../actions";

function Page(props) {

    const {blog} = props;
    const test = () =>{
        console.log(1,blog)
    }
    test()

    return (
        <>
             <div>

             </div>
        </>
    );
}
Page.getInitialProps = async () =>{
    const blog = await getBlogs();
    return {blog};
}
export default Page;