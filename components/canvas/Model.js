import * as THREE from 'three-full';
import gsap from 'gsap';
import {vertex} from './shaders/vertexShader';
import {fragment} from './shaders/fragmentShader';
import {MeshSurfaceSampler, Triangle} from "three-full";
import {GLTFLoader} from 'three-full';
import {DRACOLoader} from "three-full";


class Model {
    constructor(obj){
        // console.log(obj)
        this.name = obj.name
        this.file = obj.file
        this.scene = obj.scene
        this.placeOnLoad = obj.placeOnLoad

        this.isActive = false

        this.color1 = obj.color1
        this.color2 = obj.color2

        this.loader = new GLTFLoader();
        this.dracoLoader = new DRACOLoader();
        this.dracoLoader.setDecoderPath('./draco/')
        this.loader.setDRACOLoader(this.dracoLoader)
        this.init()
    }

    init(targetPosition, targetNormal){
        this.loader.load(this.file,(response)=>{

            /*------------------------------
            Original Mesh
            ------------------------------*/
            this.mesh = response.scene.children[0]
            // this.mesh.material.customProgramCacheKey = () =>{}
            // this.mesh.hasAttribute = () =>{}

            /*------------------------------
            Material Mesh
            ------------------------------*/
            this.material = new THREE.MeshBasicMaterial({
                color:'red',
                wireframe:true
            })
            this.mesh.material = this.material

            /*------------------------------
            Geometry Mesh
            ------------------------------*/
            this.geometry = this.mesh.geometry
            // console.log(this.geometry)


            /*------------------------------
            Particles Material
            ------------------------------*/

            // this.particlesMaterial = new THREE.PointsMaterial({
            //     color:'red',
            //     size: 0.02
            // })


            this.particlesMaterial = new THREE.ShaderMaterial({
                uniforms:{
                    uColor1:{value : new THREE.Color(this.color1)},
                    uColor2:{value: new THREE.Color(this.color2)},
                    uTime:{ value:0 },
                    uScale:{value : 0}
                },
                vertexShader:vertex(),
                fragmentShader:fragment(),
                transparent:true,
                depthTest:false,
                depthWrite:false,
                blending: THREE.AdditiveBlending
            })

            /*------------------------------
            Particles Geometry
            ------------------------------*/

            const sampler = new MeshSurfaceSampler(this.mesh).build()
            let numParticles = 70000
            window.addEventListener("resize", () => {
                console.log(window.innerWidth)
                if (window.innerWidth < 769) {
                    numParticles = 8000
                }
            })
            this.particlesGeometry = new THREE.BufferGeometry()
            const particlesPosition = new Float32Array(numParticles *3)
            const particlesRandomness = new Float32Array(numParticles*3)
            const normalVec = new THREE.Vector3();

            for (let i = 0; i< numParticles;i++){

                const newPosition = new THREE.Vector3();

                sampler.sample(newPosition,normalVec)

                particlesPosition.set([
                    newPosition.x, // 0
                    newPosition.y, // 1
                    newPosition.z, // 2
                ], i*3 )

                particlesRandomness.set([
                    Math.random() * 2 - 1, // -1 <> 1
                    Math.random() * 2 - 1,
                    Math.random() * 2 - 1
                ],i*3)
            }

            this.particlesGeometry.setAttribute('position', new THREE.BufferAttribute(particlesPosition,3))
            this.particlesGeometry.setAttribute('aRandom',new THREE.BufferAttribute(particlesRandomness,3))

            // console.log(2,this.particlesGeometry)

            /*------------------------------
            Particles
            ------------------------------*/

            this.particles = new THREE.Points(this.particlesGeometry,this.particlesMaterial)

            /*------------------------------
            Place On Load
            ------------------------------*/
            if(this.placeOnLoad){
                this.add()
            }

        })
    }
    add(){
        if(this.particlesMaterial!== undefined){
            this.scene.add(this.particles)
            gsap.to(this.particlesMaterial.uniforms.uScale,{
                value:1,
                duration:.8,
                delay:.3,
                ease:"power3.out"
            })
            if(!this.isActive){
                gsap.fromTo(this.particles.rotation,{
                    y : Math.PI
                },{
                    y: 0,
                    duration: .8,
                    ease:'power3.out',
                })
            }
            this.isActive = true
        }
    }
    remove(){
        if(this.particlesMaterial !== undefined){
            gsap.to(this.particlesMaterial.uniforms.uScale,{
                value:0,
                duration:.8,
                ease:"power3.out",
                onComplete:()=>{
                    this.scene.remove(this.particles)
                    this.isActive = false
                }
            })

            gsap.to(this.particles.rotation,{
                y:Math.PI,
                duration:.8,
                ease:'power3.out'
            })
        }
    }
}
export default Model;