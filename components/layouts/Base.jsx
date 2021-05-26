import React from 'react';
import styles from './Base.module.scss';

function Base(props) {
    const {children} = props
    return (
        <div className={styles.container}>
            <section>
                {children}
            </section>
        </div>
    );
}

export default Base;