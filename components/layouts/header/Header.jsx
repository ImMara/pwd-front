import React from 'react';
import styles from './Header.module.scss';

function Header(props) {

    const {children} = props

    return (
        <header style={{backgroundColor:props.color,height:props.height}} className={styles.container}>
            {!props.screen ? children : (
                <div className='wrapper'>
                    {children}
                </div>
            )}
        </header>
    );
}

export default Header;