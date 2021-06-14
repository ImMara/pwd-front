import React from 'react';
import styles from './Third.module.scss';
import Link from 'next/link';

function Third(props) {
    return (
        <div className={styles.container}>
            <div className={styles.content+" wrapper"}>
                <img src="/images/game.png" alt=""/>
                <div className={styles.c}>
                    <h2>ACTIVE MEMBER OF ESPORT</h2>
                    <p>Du niveau 1 au boss final, avec une canette d EnergyDrink dans ton équipe, la victoire n’est jamais très loin.Le fait que les soirées les plus mémorables commencent souvent avec une canette d EnergyDrink ne doit rien au hasard.</p>
                    <div className={styles.action}>
                        <a href="/events"><div className={styles.btn}>Events</div></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Third;