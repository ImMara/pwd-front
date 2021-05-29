import React from 'react';
import styles from './Cards.module.scss';

function Cards({blogs}) {

    return (
        <article>
            <a>
                <div className={styles.cards}>
                    <div className={styles.card_image}>
                        <img src="/images/game.png" alt="logo"/>
                    </div>
                    <div className={styles.card_content}>
                        <h4>{blogs.title}</h4>
                        <p>{blogs.title}</p>
                    </div>
                </div>
            </a>
        </article>
    );
}

export default Cards;