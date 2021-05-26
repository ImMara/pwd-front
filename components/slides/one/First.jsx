import React from 'react';
import Image from 'next/image';
import styles from './First.module.scss';

function First(props) {

    const { children } = props;

    return (
        <div className={styles.container}>
            <div className={"wrapper "+styles.content}>
                <div className={styles.c}>
                    <h1>ENERGY DRINK</h1>
                    <p>Get all your meetings minutes, tasks and decisions in one place. Share them with anyone instantly. Export them to all the tools you already use.</p>
                    <div className={styles.action}>
                        <div className={styles.btn}>
                            Produits
                        </div>
                        <div className={styles.btn}>
                            Events
                        </div>
                    </div>
                </div>
                <div className={styles.c2}>
                    <div className={styles.round}>
                        <img src="/images/svg/Group.svg" alt="energy-can"/>
                        <img src="/images/svg/plan.svg" alt="gaming-setup"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default First;