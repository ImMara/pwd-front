import React from 'react';
import styles from './Post.module.scss';

function Post({post}) {
    return (
        <div className={"wrapper "}>
            <div className={styles._container}>
                <img src={`http://api.energydrink.eraertsalan.be/images/blogs/resized/${post.image}`} alt=""/>
                <h1>{post.title}</h1>
                <p>
                    {post.content}
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