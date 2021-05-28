import React from 'react';
import styles from './Section.module.scss';

function Section(props) {
    const {children} = props
    return (
        <div className={styles.container}>
            <section>
                {children}
            </section>
        </div>
    );
}

export default Section;