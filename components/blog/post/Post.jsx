import React from 'react';
import styles from './Post.module.scss';

function Post(props) {
    return (
        <div className={"wrapper "}>
            <div className={styles._container}>
                <img src="/images/game.png" style={{width:'100%',height:'200px',objectFit:'cover'}} alt=""/>
                <h1>{props.post.title}</h1>
                <p>
                    {props.post.body}
                </p>
                <a href="/blog/"><button>retour</button></a>
                <a href="/"><button>Home</button></a>
            </div>
        </div>
    );
}

export default Post;