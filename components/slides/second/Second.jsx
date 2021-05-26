import React, {useState} from 'react';
import styles from './Second.module.scss'

function Second(props) {

    const [color,setColor] = useState('blue');

    const colorGetter = () =>{
        switch (color) {
            case 'blue' :
                return {__html:`
                            <h2>ICE VICTORY COLD & CLEAN</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, voluptate.</p>
                        `}
            case 'red' :
                return {__html:`
                            <h2>FOR POWER GAMING</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, voluptate.</p>
                       `}
            case 'green':
                return {__html:`
                            <h2>FAST VICTORY</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, voluptate.</p>
                       `}
        }
    }

    return (
        <div className={styles.container+" wrapper"}>
            <div className={styles.l}>

            </div>
            <div className={styles.r}>
                <div className={styles.action}>
                    <div className={styles.btn} onClick={() => setColor('red')}>Red</div>
                    <div className={styles.btn} onClick={() => setColor('blue')}>Blue</div>
                    <div className={styles.btn} onClick={() => setColor('green')}>Green</div>
                </div>
                <div className={styles.content} dangerouslySetInnerHTML={colorGetter()}/>
            </div>
        </div>
    );
}

export default Second;