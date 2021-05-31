import React from 'react';
import styles from './Post.module.scss';

function Post(props) {
    return (
        <div className={"wrapper "}>
            <div className={styles._container}>
                <img src="/images/game.png" alt=""/>
                <h1>{props.post.title}</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad aspernatur delectus dolores doloribus eligendi enim est exercitationem explicabo, facere fugiat ipsam ipsum iste labore magnam molestias nisi nobis non obcaecati officiis omnis qui repellendus sequi sit tempore temporibus totam voluptatibus. A dolores maiores molestias provident quam qui reprehenderit vero?
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