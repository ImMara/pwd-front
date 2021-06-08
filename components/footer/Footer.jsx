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
                            <Link href="/">Home</Link>
                            <Link href="/blog">Blog</Link>
                            <Link href="/events">Events</Link>
                        </div>
                    </div>
                    <div className={styles._content}>
                        <div className={styles.block}>
                            <h2>Energy Drink</h2>
                        </div>
                    </div>
                    <div className={styles._content}>
                        <div className={styles.block}>
                            <Link href="/conditions">Conditions Générales</Link>
                            <Link href="/mentions">Mentions lègales</Link>
                            <Link href="/protection">Protection de la marque</Link>
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