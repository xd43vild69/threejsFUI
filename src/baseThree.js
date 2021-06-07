import * as THREE from 'three';

export function baseThreeJS(){
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
    const cubeGeometry2 = new THREE.BoxGeometry(sizeBox, sizeBox, sizeBox)
    const cubeMaterial = new THREE.MeshBasicMaterial({
        color: '#ff0000'
    })
    const cubeMaterial2 = new THREE.MeshBasicMaterial({
        color: '#0000FF'
    })

    const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial)
    //console.log("distance object to camera: " + cubeMesh.position.length());

    const cubeMesh2 = new THREE.Mesh(cubeGeometry2, cubeMaterial2)
    cubeMesh2.position.set(-.5, -.5, -.5);

    const cubeMesh3 = new THREE.Mesh(
        new THREE.BoxGeometry(sizeBox, sizeBox, sizeBox),
        new THREE.MeshBasicMaterial({color:0x00ff00})
    )
    
    //cubeMesh.position.y = -0.7        
    cubeMesh.position.set(.9, 0, -.6)       
    //cubeMesh.rotation.set(.5, .2, 0)
    cubeMesh.rotation.y = Math.PI * 0.25; //Rotate 45 degres

    const groupMesh = new THREE.Group()
    groupMesh.position.y = -0.7 // group po

    groupMesh.add(cubeMesh2)
    groupMesh.add(cubeMesh3)

    scene.add(cubeMesh)
    scene.add(groupMesh)

    // Camera
    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
    camera.position.z = 3
    camera.lookAt(cubeMesh.position) // camera follow mesh

    scene.add(camera)

    // Renderer
    const renderer = new THREE.WebGLRenderer({
        canvas: canvas
    })
    renderer.setSize(sizes.width, sizes.height)
    renderer.render(scene, camera)
}

