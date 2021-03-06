import React, {useState} from 'react';
import styles from './Second.module.scss'
import Canvas from "../../canvas/Canvas";
import Model from "../../canvas/Model";

function Second(props) {

    const [color,setColor] = useState('blue');

    const colorGetter = () =>{
        switch (color) {
            case 'blue' :
                return {__html:`
                            <h2>ICE VICTORY COLD & CLEAN</h2>
                            <p>Les framboises sont fraîches, les framboises bleues sont plus fraîches. contient les meilleures framboises bleues pour un rafraîchissement unique !</p>
                        `}
            case 'red' :
                return {__html:`
                            <h2>FOR POWER GAMING</h2>
                            <p>Une édition normale de Bubble Gum était trop ennuyeuse  - dans Bubble Boom, le pouvoir explosif du Popping Candy rencontre le goût classique de Bubble Gum !</p>
                       `}
            case 'green':
                return {__html:`
                            <h2>FAST VICTORY</h2>
                            <p style="padding: 5px">Le hack le plus savoureux qui soit se fraie un chemin à travers le réseau pour revenir au cœur de la scène du jeu.</p>
                       `}
        }
    }
    const changeColor = (color) =>{
        setColor(color)
    }


    return (
        <div className={styles.container+" wrapper"}>
            <div className={styles.l}>
                <Canvas color={color}/>
            </div>
            <div className={styles.r}>
                <div className={styles.action}>
                    <div className={styles.btn} onClick={() => changeColor('red')}>Red</div>
                    <div className={styles.btn} onClick={() => changeColor('blue')}>Blue</div>
                    <div className={styles.btn} onClick={() => changeColor('green')}>Green</div>
                </div>
                <div className={styles.content} dangerouslySetInnerHTML={colorGetter()}/>
            </div>
        </div>
    );
}

export default Second;