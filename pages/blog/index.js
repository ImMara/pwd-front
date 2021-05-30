import React from 'react';
import Page from "../../components/blog/Page";
import {getBlogs} from "../../actions";
import Header from "../../components/layouts/header/Header";

export async function getStaticProps(){
    const blogs = await getBlogs()
    return { props : { blogs }}

}

function Index(props) {
    return (
        <>
            <Header screen={true} color={"black"} height={"400px"}/>
            <Page blogs={props.blogs}/>
        </>
    );
}


export default Index;