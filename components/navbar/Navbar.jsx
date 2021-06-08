import React from 'react';
import styles from './Navbar.module.scss';
import Link from 'next/link';

function Navbar(props) {
    return (
        <nav className={styles.nav}>
            <ul className={"wrapper"}>
                <li><a href="/">ENERGY DRINK</a></li>
                <li><a href="/">Home</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/events">Events</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;