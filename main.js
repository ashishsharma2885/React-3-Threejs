import * as THREE from "three"

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 1000)
scene.add(camera)

camera.position.z = 5

console.log(camera.position)

/* MESH => (Shape and Material) */

const cubeGemometry = new THREE.BoxGeometry(1,1,1)
const cubeMaterial = new THREE.MeshStandardMaterial({
  color:0x00FF00
})

const cube = new THREE.Mesh(cubeGemometry, cubeMaterial)
scene.add(cube)

console.log(cube.position)

const light = new THREE.DirectionalLight(0xFFFFFF, 10)
scene.add(light)

light.position.y = 4
light.position.z = 4

console.log(light.position)

const renedered = new THREE.WebGLRenderer()
renedered.setSize(innerWidth, innerHeight)

document.body.appendChild(renedered.domElement)

function animate(){
  cube.rotation.y += 0.05
  cube.rotation.z += 0.05
  cube.rotation.x += 0.05
  renedered.render(scene, camera)
}

renedered.setAnimationLoop(animate)