import React from 'react';
import styles from './Post.module.scss';
import nl2br from "react-nl2br";

function Post({post}) {
    console.log(post)
    return (
        <div className={"wrapper "}>
            <div className={styles._container}>
                <img src={`http://api.energydrink.eraertsalan.be/images/blogs/resized/${post.image}`} alt=""/>
                <h1>{post.title}</h1>
                <h3>{post.author && post.author.username}</h3>
                <p>
                    {nl2br(post.content)}
                </p>
                <div className={styles.action}>
                    <a href="/blog/"><div className={styles.btn}>retour</div></a>
                    <a href="/"><div className={styles.btn}>Home</div></a>
                </div>
            </div>
        </div>
    );
}

export default Post;