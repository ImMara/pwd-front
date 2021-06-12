import React, {useEffect} from 'react';
import {useRouter} from 'next/router';
import Header from "../../../components/layouts/header/Header";
import {getPost} from "../../../actions";
import Post from "../../../components/blog/post/Post";

function Index(props) {

    const router = useRouter()
    const {id} = router.query
    const {post} = props

    return (
        <>
            <Header height={"400px"} screen={true} color={"black"}>
                <div style={{
                    position:'absolute',
                    width:'100%',
                    height:'400px',
                    top:0,
                    left:0,
                    background: 'linear-gradient(to top, rgba(241,241,243,1) 0%, rgba(0,0,0,0) 100%)'}}/>
                <img src="/images/game.png" style={{height:'100%', width:'100%', objectFit:'cover',}} alt=""/>
            </Header>
            <Post post={post}/>
        </>
    );
}

Index.getInitialProps = async ({query}) =>{
    const post = await getPost(query.id);
    return {post}
}

export default Index;