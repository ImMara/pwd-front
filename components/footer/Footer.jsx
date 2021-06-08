import React from 'react';
import styles from './Footer.module.scss';
import Link from 'next/link';

function Footer(props) {
    return (
        <footer className={styles._ff}>
            <div className={"wrapper"} style={{ height:"100%"}}>
                <div className={styles.f}>
                    <div className={styles._content}>
                        <div className={styles.block}>
                            <a href="/">Home</a>
                            <a href="/blog">Blog</a>
                            <a href="/events">Events</a>
                        </div>
                    </div>
                    <div className={styles._content}>
                        <div className={styles.block}>
                            <h2>Energy Drink</h2>
                        </div>
                    </div>
                    <div className={styles._content}>
                        <div className={styles.block}>
                            <a href="/conditions">Conditions Générales</a>
                            <a href="/mentions">Mentions lègales</a>
                            <a href="/protection">Protection de la marque</a>
                        </div>
                    </div>
                    <div className={styles.copy}>
                        <p>© 2021 - ENERGY DRINK</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;