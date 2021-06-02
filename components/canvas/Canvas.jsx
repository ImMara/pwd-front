import React, {useEffect, useRef, useState} from 'react';
import * as THREE from 'three-full';
import {OrbitControls} from 'three-full';
import gsap from 'gsap';
import Model from "./Model";

function Canvas(props) {

    const id = useRef(null)
    const [color,setColor] = useState(props.color)


    useEffect(() =>{

        console.log(color)

        /*------------------------------
        Renderer
        ------------------------------*/

        const renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true,
        })
        renderer.setSize( (id.current.clientWidth), window.innerHeight)
        id.current.appendChild(renderer.domElement);

        /*------------------------------
        Scene & Camera
        ------------------------------*/

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            50,
            id.current.clientWidth / window.innerHeight,
            0.1,
            100
        );
        camera.position.z =5;
        camera.position.y = 5;

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
            color1:color,
            color2:color,
            placeOnLoad: true,
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

            if(Cans.isActive){
               Cans.particlesMaterial.uniforms.uTime.value = clock.getElapsedTime()
            }
        };
        animate();

        /*------------------------------
        Resize
        ------------------------------*/

        function onWindowResize() {
            camera.aspect = id.current.clientWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize( id.current.clientWidth, window.innerHeight );
        }
        window.addEventListener( 'resize', onWindowResize, false )

        /*------------------------------
        MouseMove
        ------------------------------*/

        function onMouseMove(e){
            const x = e.clientX
            const y = e.clientY

            gsap.to(scene.rotation,{
                y:gsap.utils.mapRange(0,window.innerWidth,.2,-.2, x),
                x:gsap.utils.mapRange(0,window.innerHeight,.2,-.2, y)
            })
        }
        window.addEventListener('mousemove',onMouseMove)
        },[id,color])

    return (
        <>
            <div ref={id} />
        </>
    );
}

export default Canvas;