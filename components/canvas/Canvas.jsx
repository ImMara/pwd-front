import React, {useEffect, useRef, useState} from 'react';
import * as THREE from 'three-full';
import {OrbitControls} from 'three-full';
import gsap from 'gsap';
import Model from "./Model";

function Canvas(props) {

    const id = useRef(null)
    const blue = useRef(null)
    const red = useRef(null)
    const green = useRef(null)

    useEffect(()=>{
        const triggerEvent = (el, type) => {
            if ("createEvent" in document) {
                var e = document.createEvent("HTMLEvents");
                e.initEvent(type, false, true);
                el.dispatchEvent(e);
            } else {
                var e = document.createEventObject();
                e.eventType = type;
                el.fireEvent("on" + e.eventType, e);
            }
        };
        if(props.color ==="red"){
            triggerEvent(red.current,"click")
        }
        if(props.color ==="blue"){
            triggerEvent(blue.current,"click")
        }
        if(props.color ==="green"){
            triggerEvent(green.current,"click")
        }
    },[props.color])


    useEffect(() =>{

        /*------------------------------
        Renderer
        ------------------------------*/

        const renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true,
        })
        renderer.setSize( (id.current.clientWidth), id.current.clientHeight)
        id.current.appendChild(renderer.domElement);

        /*------------------------------
        Scene & Camera
        ------------------------------*/

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            50,
            id.current.clientWidth / id.current.clientHeight,
            0.1,
            100
        );
        camera.position.x = 5;
        camera.position.z =3;
        camera.position.y = 3;

        /*------------------------------
        Mesh
        ------------------------------*/

        const geometry = new THREE.BoxGeometry(2, 2, 2);
        const material = new THREE.MeshBasicMaterial( {
        color: 0x00ff00,
        } );
        const cube = new THREE.Mesh( geometry, material );
        // scene.add( cube );

        /*------------------------------
        OrbitControls
        ------------------------------*/
        const controls = new OrbitControls( camera, renderer.domElement );
        // controls.enabled = true;
        controls.enabled = false;

        /*------------------------------
        Helpers
        ------------------------------*/

        // const gridHelper = new THREE.GridHelper( 10, 10 );
        // scene.add( gridHelper );
        // const axesHelper = new THREE.AxesHelper( 5 );
        // scene.add( axesHelper );

        /*------------------------------
        Models
        ------------------------------*/

        const Cans = new Model({
            name:'cans',
            file:'/models/cans.glb',
            scene: scene,
            color1:"mediumblue",
            color2:"royalblue",
            placeOnLoad: true,
        })
        const Cans2 = new Model({
            name:'cans',
            file:'/models/cans.glb',
            scene: scene,
            color1:"crimson",
            color2:"red",
            placeOnLoad: false,
        })
        const Cans3 = new Model({
            name:'cans',
            file:'/models/cans.glb',
            scene: scene,
            color1:"limegreen",
            color2:"green",
            placeOnLoad: false,
        })

        /*------------------------------
        Controllers
        ------------------------------*/

        red.current.addEventListener('click', ()=>{
            console.log(1,"time")
            if(Cans.isActive) Cans.remove()
            if(Cans3.isActive) Cans3.remove()
            Cans2.add()
        })

        blue.current.addEventListener('click',()=>{
            console.log(2,'time 2')
            if(Cans3.isActive) Cans3.remove()
            if(Cans2.isActive) Cans2.remove()
            Cans.add()
        })

        green.current.addEventListener('click',()=>{
            console.log(3,"test time green")
            if(Cans2.isActive) Cans2.remove()
            if(Cans.isActive) Cans.remove()
            Cans3.add()
        })


        /*------------------------------
        Clock
        ------------------------------*/

        const clock = new THREE.Clock()

        /*------------------------------
        Loop
        ------------------------------*/

        const animate = function () {
            requestAnimationFrame( animate );
            renderer.render( scene, camera );
            if(Cans.particlesMaterial !== undefined){
                if(Cans.isActive){
                    Cans.particlesMaterial.uniforms.uTime.value = clock.getElapsedTime()
                }
            }
            if(Cans2.particlesMaterial !== undefined){
                if(Cans2.isActive){
                    Cans2.particlesMaterial.uniforms.uTime.value = clock.getElapsedTime()
                }
            }
            if(Cans3.particlesMaterial !== undefined){
                if(Cans3.isActive){
                    Cans3.particlesMaterial.uniforms.uTime.value = clock.getElapsedTime()
                }
            }
        };
        animate()
        /*------------------------------
        Resize
        ------------------------------*/

        function onWindowResize() {
           console.log(window.innerWidth)

            if(id.current !==null){
                camera.aspect = id.current.clientWidth / id.current.clientHeight;
                camera.updateProjectionMatrix();
                renderer.setSize( id.current.clientWidth, id.current.clientHeight );
            }
        }
        window.addEventListener( 'resize', onWindowResize, false )

        /*------------------------------
        MouseMove
        ------------------------------*/

        function onMouseMove(e){
            const x = e.clientX
            const y = e.clientY
            if(id.current != null){
                gsap.to(scene.rotation,{
                    y:gsap.utils.mapRange(0,id.current.clientWidth,.2,-.2, x),
                    x:gsap.utils.mapRange(0,id.current.clientHeight,.2,-.2, y)
                })
            }
        }
        window.addEventListener('mousemove',onMouseMove)

        return () => {

        }

        },[])

    return (
        <>
            <div id="controllers">
                <button className="button" hidden={true} ref={red}>Red</button>
                <button className="button" hidden={true}  ref={blue}>Blue</button>
                <button className="button" hidden={true}  ref={green}>Green</button>
            </div>
            <div ref={id} style={{ height:'100%' }}/>
        </>
    );
}

export default Canvas;