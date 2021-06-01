import React from 'react';
import styles from './Post.module.scss';

function Post(props) {
    return (
        <div className={"wrapper "}>
            <div className={styles._container}>
                <img src="/images/game.png" alt=""/>
                <h1>{props.post.title}</h1>
                <p>
                    {props.post.content}
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