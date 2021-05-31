import React from 'react';
import Page from "../../components/blog/Page";
import {getBlogs} from "../../actions";
import Header from "../../components/layouts/header/Header";

export async function getServerSideProps(){
    const blogs = await getBlogs()
    return { props : { blogs }}
}

function Index(props) {
    return (
        <>
            <Header screen={true} color={"black"} height={"400px"}>
                <div style={{
                    position:'absolute',
                    width:'100%',
                    height:'400px',
                    top:0,
                    left:0,
                    background: 'linear-gradient(to top, rgba(241,241,243,1) 0%, rgba(0,0,0,0) 100%)'}}/>
                <img src="/images/header.jpg" style={{height:'100%', width:'100%', objectFit:'cover',}} alt=""/>
            </Header>
            <Page blogs={props.blogs}/>
        </>
    );
}


export default Index;