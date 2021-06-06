import React from 'react';
import styles from './HeaderContent.module.scss'

function HeaderContent(props) {
    return (
        <div className={styles.container}>
            <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/SQjxq7r4R1s?rel=0&amp;&autoplay=1;&mute=1;&loop=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer;
                       autoplay;
                       clipboard-write;
                       encrypted-media;
                       gyroscope;
                       picture-in-picture"
            />
        </div>
    );
}

export default HeaderContent;