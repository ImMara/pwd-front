import React from 'react';
import styles from './Third.module.scss';

function Third(props) {
    return (
        <div className={styles.container}>
            <div className={styles.content+" wrapper"}>
                <img src="/images/game.png" alt=""/>
                <div className={styles.c}>
                    <h2>ACTIVE MEMBER OF ESPORT</h2>
                    <p>Our company is an active actor of esport ,
                        since we are also gamer we provide the best product for players .
                        And we are working hardly to participate to events , and sponsoring competitive teams around the world.</p>
                    <div className={styles.action}>
                        <div className={styles.btn}>Product</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Third;