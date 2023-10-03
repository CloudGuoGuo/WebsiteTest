// 3DModel.js

// Set up the scene, camera, and renderer
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a cube and add it to the scene (you can load your glb model here instead)
//  var geometry = new THREE.BoxGeometry();
//  var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
//  var cube = new THREE.Mesh(geometry, material);
//  scene.add(cube);

// Create OrbitControls
var controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableZoom = true;

// Load GLB model
var loader = new THREE.GLTFLoader();
var modelPath = 'train.glb';

loader.load(modelPath, function (gltf) {
     var model = gltf.scene;
     scene.add(model);
});

// Position the camera
camera.position.z = 5;

// Render function
function render() {
    requestAnimationFrame(render);

    // Update the OrbitControls
    controls.update();

    renderer.render(scene, camera);
}

// Call the render function to start rendering
render();
