import React from 'react';
import styles from './Navbar.module.scss';
import Link from 'next/link';

function Navbar(props) {
    return (
        <nav className={styles.nav}>
            <ul className={"wrapper"}>
                <li><Link href="/">ENERGY DRINK</Link></li>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/events">Events</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;