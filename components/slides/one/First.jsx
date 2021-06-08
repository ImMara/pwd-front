import React, {useRef, useState} from 'react';
import Image from 'next/image';
import styles from './First.module.scss';
import Link from 'next/link';

function First(props) {

    const { children } = props;

    const img = useRef()
    const img2 = useRef()
    const round = useRef()

    const [mouseX,setMouseX] = useState();
    const [mouseY,setMouseY] = useState();

    const mousePosition = (event) =>{
        setMouseX(event.clientX)
        setMouseY(event.clientY)

        console.log(img.current)
        img.current.style.top = 42+(mouseY * 0.002)+"%"
        img.current.style.left = 53+(mouseX * 0.002)+"%"

        img2.current.style.top = 80-(mouseY * 0.0035)+"%"
        img2.current.style.left = 50-(mouseX * 0.0035)+"%"

    }

    return (
        <div className={styles.container} onMouseMove={mousePosition}>
            <div className={"wrapper "+styles.content}>
                <div className={styles.c}>
                    <h1>ENERGY DRINK</h1>
                    <p>Get all your meetings minutes, tasks and decisions in one place. Share them with anyone instantly. Export them to all the tools you already use.</p>
                    <div className={styles.action}>
                        <Link href={"/blog"}>
                            <div className={styles.btn}>
                                Blog
                            </div>
                        </Link>
                        <Link href={"/events"}>
                            <div className={styles.btn}>
                                Events
                            </div>
                        </Link>
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