import React from 'react';
import styles from './Navbar.module.scss';

function Navbar(props) {
    return (
        <nav className={styles.nav}>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/event">Events</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;