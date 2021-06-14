import React, {useEffect, useRef, useState} from 'react';
import Image from 'next/image';
import styles from './First.module.scss';
import Link from 'next/link';

function First(props) {

    const { children } = props;

    const img = useRef()
    const img2 = useRef()
    const round = useRef()
    const slide = useRef()

    useEffect(()=>{

        const mousePosition = (event) =>{
            let mouseX = event.clientX;
            let mouseY = event.clientY;

            img.current.style.top = 42+(mouseY * 0.002)+"%"
            img.current.style.left = 53+(mouseX * 0.002)+"%"

            img2.current.style.top = 80-(mouseY * 0.0035)+"%"
            img2.current.style.left = 50-(mouseX * 0.0035)+"%"

        }

        slide.current.addEventListener('mousemove' ,(event) => mousePosition(event))
    },[])


    return (
        <div className={styles.container} ref={slide}>
            <div className={"wrapper "+styles.content}>
                <div className={styles.c}>
                    <h1>ENERGY DRINK</h1>
                    <p>
                        Energy Drink est une boisson appréciée dans le monde entier par les athlètes de haut niveau, les étudiants, ceux qui ont métier très exigeant et durant les longs trajets en voiture.
                    </p>
                    <div className={styles.action}>
                        <a href={"/blog"}>
                            <div className={styles.btn}>
                                Blog
                            </div>
                        </a>
                        <a href={"/events"}>
                            <div className={styles.btn}>
                                Events
                            </div>
                        </a>
                    </div>
                </div>
                <div className={styles.c2}>
                    <div className={styles.round} ref={round}>
                        <img ref={img} src="/images/svg/Group.svg" alt="energy-can"/>
                        <img ref={img2} src="/images/svg/plan.svg" alt="gaming-setup"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default First;