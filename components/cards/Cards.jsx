import React from 'react';
import styles from './Cards.module.scss';

function Cards({blogs ,key}) {

    return (
        <article key={key}>
            <a href={"/blog/"+blogs._id}  style={{textDecoration:"none" , color:"black"}}>
                <div className={styles.cards}>
                    <div className={styles.card_image}>
                        <img src={`http://api.energydrink.eraertsalan.be/images/blogs/resized/${blogs.image}`}  alt="logo"/>
                    </div>
                    <div className={styles.card_content}>
                        <h4>{blogs.title}</h4>
                    </div>
                </div>
            </a>
        </article>
    );
}

export default Cards;