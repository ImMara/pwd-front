import React from 'react';
import Page from "../../components/blog/Page";
import {getBlogs} from "../../actions";

export async function getStaticProps(){
    const blogs = await getBlogs()
    return { props : { blogs }}
}

function Index(props) {
    return (
        <Page blogs={props.blogs}/>
    );
}

export default Index;