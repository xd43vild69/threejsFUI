import * as THREE from 'three';

export function testThree(){
    // Canvas
    const canvas = document.querySelector('canvas.webgl')

    // Sizes
    const sizes = {
        width: 800,
        height: 600
    }

    // Scene
    const scene = new THREE.Scene()

    // Object
    const sizeBox = 0.5;
    const cubeGeometry = new THREE.BoxGeometry(sizeBox, sizeBox, sizeBox)
    const cubeMaterial = new THREE.MeshBasicMaterial({
        color: '#ff0000'
    })
    const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial)
    scene.add(cubeMesh)

    // Camera
    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
    camera.position.z = 3
    scene.add(camera)

    // Renderer
    const renderer = new THREE.WebGLRenderer({
        canvas: canvas
    })
    renderer.setSize(sizes.width, sizes.height)
    renderer.render(scene, camera)
}

